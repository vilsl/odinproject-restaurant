/* 
This is the module that handles the website's menu page.
*/

function renderMenu(){
    let contentDiv = document.getElementById("content");
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "main");

    let contentTitle = "Tomfoolery's epic pastries";

    let title = document.createElement("h1");
    title.innerHTML = contentTitle;
    mainDiv.appendChild(title);

    let menu = document.createElement("ul");
    let menuEntries = ['Cinnamon bun', 'Muffin', 'The MegaTom',
    'Whatever you want. baby', 'The Second Breakfast', 'Plain bun'];

    for (let i = 0; i < menuEntries.length; i++){
        let li = document.createElement("li");
        li.textContent = menuEntries[i];
        menu.appendChild("li");
    }

    mainDiv.appendChild(menu);
    contentDiv.appendChild(mainDiv);
}

export { renderMenu };