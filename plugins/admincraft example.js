export default function apply({ backend, frontend, insertAtLine }) {
  // Add a route to backend after line 10
  /**backend = insertAtLine(
    backend,
    10,
    `
app.get("/ping", (req, res) => {
  res.send("pong");
});
`
  );**/

  // Add a button before closing </body> in frontend

  //<div class="backups" style="margin-left: 15px; margin-right: 15px; padding-top: 5px; border-radius: 0px 5px 0px 0px; background: linear-gradient(180deg, rgba(59, 69, 72, 1) 0%, rgba(22, 22, 22, 1) 100%); min-height: 60px;"></div>

  frontend = insertAtLine(
    frontend,
    221,
    `
    <div class="tab" onclick="currentTab = 5; updateTabs();" style="background: #282828; width: 150px; height: 100%; border-radius: 5px 5px 0px 0px; text-align: center; padding-top: 0.03%; display: inline-block; margin-right: 5px;">reddit</div>
    `
  );

  frontend = insertAtLine(
    frontend,
    414,
    `
    <div class="reddit" style="margin-left: 15px; margin-right: 15px; padding-top: 5px; border-radius: 0px 5px 0px 0px; background: linear-gradient(180deg, rgba(59, 69, 72, 1) 0%, rgba(22, 22, 22, 1) 100%); min-height: 60px;">
    <iframe style="
    width: 100%;
    height: calc(100vh - 150px);"
    src="https://redditsharp-b7de3.firebaseapp.com/r/admincraft"></iframe> 
    </div>
    
    `
  );

  return { backend, frontend };
}