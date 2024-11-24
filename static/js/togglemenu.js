function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function highlightMenu() {
    await sleep(100);
    const menu = document.getElementById("headerList");
    for (const child of menu.children) {
        console.log(window.location.pathname)
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
document.addEventListener('DOMContentLoaded', highlightMenu);