export default function({ appendToId, appendToClass, frontendDOM, appendToFunctionInScript, appendToFunctionAtMarker, setStyleByClass, setStyleById, updateCssRule, removeCssRule, setStyleByTag, appendToTag, prependToTag, setAttributeById, setAttributeByClass, setAttributeByTag }) {
appendToTag("body", 0, "<div id='mcbg' class='mcbg' style='position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;'></div>");
appendToId("mcbg", `<div class="cube">
  <div class="cube-front" style="background-image:url(https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.12.2/assets/minecraft/textures/gui/title/background/panorama_3.png);"></div>
  <div class="cube-back" style="background-image:url(https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.12.2/assets/minecraft/textures/gui/title/background/panorama_1.png);"></div>
  <div class="cube-left" style="background-image:url(https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.12.2/assets/minecraft/textures/gui/title/background/panorama_2.png);"></div>
  <div class="cube-right" style="background-image:url(https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.12.2/assets/minecraft/textures/gui/title/background/panorama_0.png);"></div>
  <div class="cube-top" style="background-image:url(https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.12.2/assets/minecraft/textures/gui/title/background/panorama_4.png);"></div>
  <div class="cube-bottom" style="background-image:url(https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.12.2/assets/minecraft/textures/gui/title/background/panorama_5.png);"></div>
</div>`);

  appendToTag("head", `
    <style>
      .mcbg {
        margin: 0;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        perspective: 325px;
        z-index: -5;
      }
      .cube {
        width: 800px;
        height: 800px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -400px 0 0 -400px;
        transform-style: preserve-3d;
        transform: translate3d(0px, 0px, 325px) rotateX(0deg) rotateY(0deg);
        animation: spin 120s linear infinite;
      }
      .cube > div {
        background-color: #000;
        width: inherit;
        height: inherit;
        position: absolute;
        background-repeat: no-repeat;
        background-size: cover;
        transform-style: preserve-3d;
      }
      .cube .cube-front { transform: translateZ(-398px); }
      .cube .cube-back { transform: rotateY(180deg) translateZ(-398px); }
      .cube .cube-left { transform: rotateY(90deg) translateZ(-398px); }
      .cube .cube-right { transform: rotateY(-90deg) translateZ(-398px); }
      .cube .cube-top { transform: rotateX(-90deg) translateZ(-398px); }
      .cube .cube-bottom { transform: rotateX(90deg) rotateZ(90deg) translateZ(-398px); }

      @keyframes spin {
        0% { transform: translate3d(0px, 0px, 325px) rotateX(0deg) rotateY(0deg); }
        33% { transform: translate3d(0px, 0px, 325px) rotateX(0deg) rotateY(120deg); }
        67% { transform: translate3d(0px, 0px, 325px) rotateX(0deg) rotateY(240deg); }
        100% { transform: translate3d(0px, 0px, 325px) rotateX(0deg) rotateY(360deg); }
      }

        
    </style>
    <style>

    @font-face {
  font-family: 'mc';
  src: url(https://raw.githubusercontent.com/CrungeyDownloadsViruses/clouddrivepublic/refs/heads/main/MinecraftRegular-Bmg3.otf) format('opentype');
  font-weight: normal;
  font-style: normal;
}
</style>
<style>
@font-face {
  font-family: 'mcb';
  src: url(https://raw.githubusercontent.com/CrungeyDownloadsViruses/clouddrivepublic/refs/heads/main/MinecraftBold-nMK1.otf) format('opentype');
}

    </style>
  `);
//https://get.fontspace.co/download/font/Bmg3/YzZmODk4Y2EzMzc3NGM2MDk4OWQxNDRhZDhlNTQ2ZjAub3Rm/MinecraftRegular-Bmg3.otf
  updateCssRule("body", "background: transparent; font-family: mc;");

setAttributeByClass("status-title", "style", `font-family: mcb; font-weight: normal;`);

setAttributeByClass("topbar", "style", `border-bottom: 2px solid rgba(0, 0, 0, 0.75); background: 
  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`);

appendToClass("wrap", `<div style="width: 100%; height: 2px; background: rgba(255, 254, 254, 0.2)"></div>`);

setAttributeById("mainContent", "style", `border: 2px solid rgba(255, 254, 254, 0.2); margin-left: 15px; margin-right: 15px;`);

setAttributeById("instances", "style", `
    background: transparent;
    /* max-height: calc(100vh - 200px); */
    display:flex;
    flex-wrap:wrap;
    gap:10px;
    padding:10px;
    display: inline-flex;
    width: max-content;
    width: calc(100% - 390px);
    position: relative;
    /* top: 13px; */
    border-radius: 5px;
    margin: 5px;
    align-content: flex-start;
    justify-content: flex-start;
`);
//instance creator

setAttributeById("icpanel", "style", `
    width: 350px;
    background: var(--card-bg);
    display: inline-flex;
    padding: 5px;
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: center;
    justify-content: center;
    margin: 5px;
    border: 2px solid rgba(0, 0, 0, 0.75);
    color: black;
`);

setAttributeById("nameTextInst", "style", `
    width: 100%;
    height: 20px;
    vertical-align: middle;
    padding-bottom: 5px;
    padding-top: 5px;
`);

setAttributeById("descTextInst", "style", `
    width: 100%;
    height: 20px;
    vertical-align: middle;
    padding-bottom: 5px;
    padding-top: 5px;
`);

setAttributeById("jarTextInst", "style", `
    width: 100%;
    height: 20px;
    vertical-align: middle;
    padding-bottom: 5px;
    padding-top: 5px;
`);

setAttributeById("nodeTextInst", "style", `
    width: 100%;
    height: 20px;
    vertical-align: middle;
    padding-bottom: 5px;
    padding-top: 5px;
`);

setAttributeById("pfilelist", "style", `
    width: 350px;
    background: transparent;
    display: inline-flex;
    padding: 5px;
    flex-wrap: nowrap;
    overflow-y: scroll;
    align-items: center;
    justify-content: flex-start;
    margin: 5px;
    flex-direction: column;
    border: 2px solid rgba(255, 254, 254, 0.2);
`);

setAttributeById("plugindltop", "style", `
    background: var(--card-bg);
    display: block;
    flex-wrap:wrap;
    gap:10px;
    padding:10px;
    display: inline-flex;
    width: 100%;
    width: calc(100% - 44px);
    height: 100px;
    position: relative;
    margin: 5px;
    margin-bottom: 0px;
    border: 2px solid rgba(0, 0, 0, 0.75);
`);

setAttributeById("plugindltop", "style", `
    background: var(--card-bg);
    display: block;
    flex-wrap:wrap;
    gap:10px;
    padding:10px;
    display: inline-flex;
    width: 100%;
    width: calc(100% - 40px);
    height: 100px;
    position: relative;
    margin: 5px;
    margin-bottom: 0px;
    border: 2px solid rgba(0, 0, 0, 0.75);
`);

setAttributeById("plugins-browser", "style", `
    background: transparent;
    height: calc(100vh - 312px);
    display:flex;
    flex-wrap:wrap;
    gap:10px;
    padding:10px;
    display: inline-flex;
    width: 100%;
    width: calc(100% - 40px);
    position: relative;
    margin: 5px;
    overflow-y: scroll;
    border: 2px solid rgba(255, 254, 254, 0.2);
`);

setAttributeById("node-browser", "style", `
    background: transparent;
    height: calc(100vh - 184px);
    display:flex;
    flex-wrap: nowrap;
    gap:10px;
    padding:10px;
    display: inline-flex;
    width: 100%;
    width: calc(100% - 40px);
    position: relative;
    margin: 5px;
    overflow-y: scroll;
    overflow-x: hidden;
    flex-direction: column;
    justify-content: flex-start;
    border: 2px solid rgba(255, 254, 254, 0.2);
`);

setAttributeById("addanodebox", "style", `
    width: 350px;
    background: var(--card-bg);
    display: inline-flex;
    padding: 5px;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
    margin: 5px;
    flex-direction: column;
    border: 2px solid rgba(0, 0, 0, 0.75);
    color: black;
`);



setAttributeByClass("tabContent", "style", `padding-top: 5px; background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    display: flex;
    border: 2px solid rgba(0, 0, 0, 0.75);`);

updateCssRule(":root", "--card-bg: #c6c6c7");

updateCssRule(".terminal", "border-radius: 0px; background: #c6c6c7");
updateCssRule(".file-browser", "border-radius: 0px; background: #c6c6c7");
updateCssRule(".file-browser .title", "color: black; font-weight: normal; font-family: mcb;");
updateCssRule(".file-list", "border-radius: 0px; background:linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(https://assets.mcasset.cloud/1.12.2/assets/minecraft/textures/gui/options_background.png); background-size: 40px; image-rendering: pixelated;");
updateCssRule(".file-item", "border-radius: 0px; border: 2px solid rgb(255 255 255 / 25%); background: transparent;");
updateCssRule(".file-item .meta", "color: white;");

updateCssRule(".terminal .title", "color: black; font-weight: normal; font-family: mcb;");

updateCssRule("#console-output", "border-radius: 0px; background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(https://assets.mcasset.cloud/1.12.2/assets/minecraft/textures/gui/options_background.png); background-size: 40px; image-rendering: pixelated;");

updateCssRule(".tab", `margin-right: 0px; border-radius: 0px; border: 2px solid rgba(255, 254, 254, 0.2); padding-top: 0px; background: transparent; position: relative;`);

updateCssRule(".tab::before", `content: attr(tabName);
    border: 2px solid rgba(0, 0, 0, 0.75);
    position: relative;
    display: block;
    height: 100%;
    top: 0px;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    padding-top: 2px;
    font-size: 14px;`);

updateCssRule("#console-input", `font-family: mc; border-radius: 0px;`);
updateCssRule("#console-output", `font-family: mc;`);
updateCssRule(".small-btn", `
    image-rendering: pixelated;
    background-size: 600% 100%;
    background-position: left;
    border-left: none;
    border-top: none;
    border-bottom: none;
    border-right: 2px solid black;
    font-family: mc;
    padding-left: 12px;
    padding-right: 8px;
    border-radius: 0px;
    `);
updateCssRule(".small-btn", `background: url(https://assets.mcasset.cloud/1.21.11/assets/minecraft/textures/gui/sprites/widget/button.png) no-repeat;`);
updateCssRule(".small-btn:hover", `background: url(https://assets.mcasset.cloud/1.21.11/assets/minecraft/textures/gui/sprites/widget/button_highlighted.png) no-repeat; background-size: 600% 100%; background-position: left; border-right: 2px solid white;`);
//https://assets.mcasset.cloud/1.21.11/assets/minecraft/textures/gui/sprites/widget/button_highlighted.png

updateCssRule(".action-btn", `
    image-rendering: pixelated;
    background-size: 500% 100%;
    background-position: left;
    border-left: none;
    border-top: none;
    border-bottom: none;
    border-right: 2px solid black;
    font-family: mc;
    padding-left: 12px;
    padding-right: 8px;
    border-radius: 0px;
    `);
updateCssRule(".action-btn", `background: url(https://assets.mcasset.cloud/1.21.11/assets/minecraft/textures/gui/sprites/widget/button.png) no-repeat;`);
updateCssRule(".action-btn:hover", `background: url(https://assets.mcasset.cloud/1.21.11/assets/minecraft/textures/gui/sprites/widget/button_highlighted.png) no-repeat; background-size: 600% 100%; background-position: left; border-right: 2px solid white;`);

updateCssRule(".btn.start", `
    image-rendering: pixelated;
    background-size: 500% 100%;
    background-position: left;
    border-left: none;
    border-top: none;
    border-bottom: none;
    border-right: 2px solid black;
    font-family: mc;
    padding-left: 12px;
    padding-right: 8px;
    border-radius: 0px;
    `);
updateCssRule(".btn.start", `background: url(https://assets.mcasset.cloud/1.21.11/assets/minecraft/textures/gui/sprites/widget/button.png) no-repeat;`);
updateCssRule(".btn.start:hover", `background: url(https://assets.mcasset.cloud/1.21.11/assets/minecraft/textures/gui/sprites/widget/button_highlighted.png) no-repeat; background-size: 600% 100%; background-position: left; border-right: 2px solid white;`);

updateCssRule(".btn.stop", `
    image-rendering: pixelated;
    background-size: 500% 100%;
    background-position: left;
    border-left: none;
    border-top: none;
    border-bottom: none;
    border-right: 2px solid black;
    font-family: mc;
    padding-left: 12px;
    padding-right: 8px;
    border-radius: 0px;
    `);
updateCssRule(".btn.stop", `background: url(https://assets.mcasset.cloud/1.21.11/assets/minecraft/textures/gui/sprites/widget/button.png) no-repeat;`);
updateCssRule(".btn.stop:hover", `background: url(https://assets.mcasset.cloud/1.21.11/assets/minecraft/textures/gui/sprites/widget/button_highlighted.png) no-repeat; background-size: 600% 100%; background-position: left; border-right: 2px solid white;`);
updateCssRule(".btn.restart", `
    image-rendering: pixelated;
    background-size: 500% 100%;
    background-position: left;
    border-left: none;
    border-top: none;
    border-bottom: none;
    border-right: 2px solid black;
    font-family: mc;
    padding-left: 12px;
    padding-right: 8px;
    border-radius: 0px;
    `);
updateCssRule(".btn.restart", `background: url(https://assets.mcasset.cloud/1.21.11/assets/minecraft/textures/gui/sprites/widget/button.png) no-repeat;`);
updateCssRule(".btn.restart:hover", `background: url(https://assets.mcasset.cloud/1.21.11/assets/minecraft/textures/gui/sprites/widget/button_highlighted.png) no-repeat; background-size: 600% 100%; background-position: left; border-right: 2px solid white;`);
updateCssRule(".usage-bar", `border-radius: 0px; background: url(https://assets.mcasset.cloud/1.21.11/assets/minecraft/textures/gui/sprites/widget/button_disabled.png) no-repeat; background-size: 100% 100%; padding: 1.5px; image-rendering: pixelated; border: 1.5px solid rgb(255 255 255 / 25%);`);
updateCssRule(".usage-bar .fill", `border-radius: 0px;`);

updateCssRule('input[type="file"]', "border-radius: 0px;");
updateCssRule('input[type="text"]', "border-radius: 0px;");

const styleTags = frontendDOM.querySelectorAll("style");

  styleTags.forEach(styleTag => {
    // Replace --accent variable if it exists
    const updatedContent = styleTag.innerHTML.replace(
      /(--accent\s*:\s*)#5ddcff/gi,
      "$1#00f8ff"
    );

    styleTag.set_content(updatedContent);
  });

  let scripttag = frontendDOM.querySelector("script");
  let scriptContent = scripttag.innerHTML;
  scriptContent = scriptContent.replace(/document\.getElementsByClassName\("tab"\)\[i]\.style\.background = "#3b4548";/gm, `document.getElementsByClassName("tab")[i].style.background = "transparent";`)
    .replace(/document\.getElementsByClassName\("tab"\)\[i]\.style\.background = "#282828";/gm, `document.getElementsByClassName("tab")[i].style.background = "transparent";`)
    .replace(/document\.getElementsByClassName\("tab"\)\[i]\.style\.paddingTop = "0\.3%";/gm,`document.getElementsByClassName("tab")[i].style.top = '0px';`)
    .replace(/document\.getElementsByClassName\("tab"\)\[i]\.style\.paddingTop = "0\.03%";/gm,`document.getElementsByClassName("tab")[i].style.top = '5px';`)
    .replace(/p\.style\.fontFamily = 'monospace';/gm, `p.style.fontFamily = 'mc';`)
    .replace(/\.style\.fontWeight = 'bold';/gm, `.style.fontFamily = 'mcb';`)
    .replace(/'h3'/gm, `'div'`);

  scripttag.set_content(scriptContent);
  return { frontendDOM };
};
