export default function({ appendToId, appendToClass, appendToFunctionInScript, appendToFunctionAtMarker }) {
  // 1️⃣ Add the LuckPerms tab button at the end
  appendToId('tabs', `
    <div class="tab" onclick="currentTab = 7; updateTabs();">LuckPerms</div>
  `);

  // 2️⃣ Add the LuckPerms tab content inside mainContent
  appendToId('mainContent', `
    <div id="luckpermsTab" class="tabContent" style="display:none; margin-left: 15px; margin-right: 15px; padding-top: 5px; border-radius: 0px 5px 0px 0px; background: linear-gradient(180deg, rgba(59, 69, 72, 1) 0%, rgba(22, 22, 22, 1) 100%); min-height: 60px;"></div>
  `);



  appendToFunctionInScript(
    0, // first <script> tag in index.html
    "waitForLP", // name of your new function
    `
        let editormsg = "";
      function waitloop() {
          for(let i = 0; i < document.getElementById('console-output').children.length; i++) {
              if(document.getElementById('console-output').children[i].innerText.includes('https://luckperms.net/editor/')) {
                  editormsg = 'https://luckperms.net/editor/' + document.getElementById('console-output').children[i].innerText.split('https://luckperms.net/editor/')[1].split('[0m')[0];
                  document.getElementById('luckpermsTab').innerHTML = "<iframe src='" + editormsg + "' style='width: 100%; height: calc(100vh - 150px); border-radius: 0px 0px 5px 5px;'></iframe>";
                  //stop the loop
                  clearInterval(lpinterval);
              }
          }
      }
      const lpinterval =setInterval(waitloop, 100);
    `
  );

  // 3️⃣ Append logic to updateTabs function to handle currentTab == 7
  appendToFunctionAtMarker(
    0, // assuming first <script> tag in index.html contains updateTabs
    "// PLUGIN_INJECTION_POINT-CurrentTabFunctions",
    `
    if (currentTab == 7) {

    fetch("/currentInstInfo", {
    method: 'GET'
    }).then(res => {
    return res.json().then(data => {
        if(data.isOnline == false) {
            document.getElementById('luckpermsTab').innerText = "Please start the server first.";
        }
        else
        {
            document.getElementById('luckpermsTab')[0].innerText = "Loading...";
            sendConsoleInput("lp editor");
            waitForLP();
            
        }
    });
    });

      
    }
    `
  );
}
