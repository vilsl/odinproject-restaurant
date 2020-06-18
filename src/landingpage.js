/* 
This is the module that handles the website's landing page.
*/

function renderLanding() {

    let contentDiv = document.getElementById("content");
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "main");

    let contentTitle = "Tomfoolery is simply the best";
    let contentText = "Like, did you think whatever weak buns you've eaten until now were good?<br>Think again.<br>They're straight garbage compared to this Tomfoolery.";

    let title = document.createElement("h1");
    title.innerHTML = contentTitle;
    mainDiv.appendChild(title);

    let text = document.createElement("p");
    text.innerHTML = contentText;
    mainDiv.appendChild(text);

    contentDiv.appendChild(mainDiv);
}

export { renderLanding };