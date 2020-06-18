/* 
This is the module that handles the website's menu page.
*/

function renderContact(){
    let contentDiv = document.getElementById("content");
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "main");

    let contentTitle = "Contact Tomfoolery";
    let contentText = "Please don't.";

    let title = document.createElement("h1");
    title.innerHTML = contentTitle;
    mainDiv.appendChild(title);

    let text = document.createElement("p");
    text.innerHTML = contentText;
    mainDiv.appendChild(text);

    contentDiv.appendChild(mainDiv);
}

export { renderContact };