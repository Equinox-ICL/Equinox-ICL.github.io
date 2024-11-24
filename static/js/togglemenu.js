function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function highlightMenu() {
    const menu = document.getElementById("headerList");
    for (const child of menu.children) {
        if(window.location.pathname == "/" &&  child.name == "home"){
            child.classList.add("rust")
            break
        }
        if (window.location.pathname.includes(child.name)){
            child.classList.add("rust")
            break;
        }
    }
    
}
window.onload = highlightMenu;