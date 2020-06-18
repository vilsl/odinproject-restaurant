/* 
This is the main file that handles page-loading from their respective modules.
*/

import { renderLanding } from "./landingpage";
import { renderMenu } from "./menupage";

const pageSwitcher = (() => {
    const _clearPage = () => {
        let contentDiv = document.getElementById("content");
        while (contentDiv.firstChild){
            contentDiv.removeChild(contentDiv.firstChild);
        }
    }

    const _tabSwitcher = (targetTab) => {
        if (targetTab == "home"){
            console.log("home");
            _clearPage();
            renderLanding();
        }
        else if (targetTab == "menu"){
            console.log("menu");
            _clearPage();
            renderMenu();
        }
    }

    const tabSwitcher = (targetTab) => {
        _tabSwitcher(targetTab);
    }

    return {
        tabSwitcher,
    };
})();

document.getElementById("homeTab").addEventListener("click", function(){ pageSwitcher.tabSwitcher("home") });
document.getElementById("menuTab").addEventListener("click", function(){ pageSwitcher.tabSwitcher("menu") });
document.getElementById("contactTab").addEventListener("click", function(){ pageSwitcher.tabSwitcher("contact") });

// Render initial landing page immediately
pageSwitcher.tabSwitcher("home");