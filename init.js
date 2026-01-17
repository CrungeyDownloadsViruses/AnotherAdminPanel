import fs from "fs";
import path from "path";
import * as url from "url";
import { spawn } from "child_process";
import { parse } from "node-html-parser";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

// Paths
const baseDir = path.join(__dirname, "base");
const pluginDir = path.join(__dirname, "plugins");

// Load base files
let backend = fs.readFileSync(path.join(baseDir, "index.js"), "utf8");
let frontendRaw = fs.readFileSync(path.join(baseDir, "index.html"), "utf8");

// Parse frontend into DOM
let frontendDOM = parse(frontendRaw, { script: true, style: true });

// --------------------
// New Helper Functions
// --------------------

// Append HTML to an element by ID
function appendToId(id, html) {
  const el = frontendDOM.querySelector(`#${id}`);
  if (!el) return false;
  el.appendChild(parse(html));
  return true;
}

// Prepend HTML to an element by ID
function prependToId(id, html) {
  const el = frontendDOM.querySelector(`#${id}`);
  if (!el) return false;
  el.insertAdjacentHTML("afterbegin", html);
  return true;
}

// Append HTML to an element by class (first match)
function appendToClass(cls, html) {
  const el = frontendDOM.querySelector(`.${cls}`);
  if (!el) return false;
  el.appendChild(parse(html));
  return true;
}

// Prepend HTML to an element by class (first match)
function prependToClass(cls, html) {
  const el = frontendDOM.querySelector(`.${cls}`);
  if (!el) return false;
  el.insertAdjacentHTML("afterbegin", html);
  return true;
}

// Append code to a named function inside a <script> tag
function appendToFunctionInScript(scriptSelector, functionName, codeToAppend) {
  let scriptTag;
  if (typeof scriptSelector === "string") {
    scriptTag = frontendDOM.querySelector(`script#${scriptSelector}`);
  } else {
    scriptTag = frontendDOM.querySelectorAll("script")[scriptSelector];
  }
  if (!scriptTag) return false;

  let scriptContent = scriptTag.innerHTML;

  // Match function declaration
  const funcRegex = new RegExp(`function\\s+${functionName}\\s*\\([^)]*\\)\\s*{([\\s\\S]*?)}\\s*$`, "m");
  const match = scriptContent.match(funcRegex);

  if (match) {
    // Append code inside existing function
    scriptContent = scriptContent.replace(funcRegex, match[0].replace(/}$/, `\n${codeToAppend}\n}`));
  } else {
    // Function doesn't exist: add new function at end
    scriptContent += `\nfunction ${functionName}() {\n${codeToAppend}\n}\n`;
  }

  scriptTag.set_content(scriptContent);
  return true;
}

function appendToFunctionAtMarker(scriptSelector, marker, codeToAppend) {
  let scriptTag;
  if (typeof scriptSelector === "string") {
    scriptTag = frontendDOM.querySelector(`script#${scriptSelector}`);
  } else {
    scriptTag = frontendDOM.querySelectorAll("script")[scriptSelector];
  }
  if (!scriptTag) return false;

  let scriptContent = scriptTag.innerHTML;

  if (scriptContent.includes(marker)) {
    // Insert code before the marker
    scriptContent = scriptContent.replace(marker, `${codeToAppend}\n${marker}`);
    scriptTag.set_content(scriptContent);
    return true;
  } else {
    console.warn(`Marker "${marker}" not found in script.`);
    return false;
  }
}


// Export a function to serialize DOM back to string
function getFrontend() {
  return frontendDOM.toString();
}

// --------------------
// Existing plugin system
// --------------------
let plugins = fs.readdirSync(pluginDir).filter(f => f.endsWith(".js"));
console.log(`🧩 Found plugins: ${plugins.join(", ") || "none"}`);

for (const pluginFile of plugins) {
  const pluginPath = path.join(pluginDir, pluginFile);
  try {
    const pluginModule = await import(url.pathToFileURL(pluginPath));
    if (typeof pluginModule.default === "function") {
      console.log(`⚙️ Applying plugin: ${pluginFile}`);
      const result = pluginModule.default({
        backend,
        frontendDOM,
        appendToId,
        prependToId,
        appendToClass,
        prependToClass,
        appendToFunctionInScript,
        appendToFunctionAtMarker
      });
      if (result) {
        if (result.backend) backend = result.backend;
        if (result.frontendDOM) frontendDOM = result.frontendDOM;
      }
    } else {
      console.warn(`⚠️ Plugin ${pluginFile} has no default export function`);
    }
  } catch (err) {
    console.error(`❌ Error in plugin ${pluginFile}:`, err);
  }
}

// Write updated files
fs.writeFileSync(path.join(__dirname, "index.js"), backend);
fs.writeFileSync(path.join(__dirname, "index.html"), getFrontend());

console.log("Starting index.js...");
const child = spawn("node", ["index.js"], {
  cwd: __dirname,
  stdio: "inherit",
});

child.on("exit", (code) => {
  console.log(`index.js exited with code ${code}`);
});
