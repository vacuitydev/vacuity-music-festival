function addOpenOnClick(element){
    element.addEventListener("click", ()=>{
        element.classList.toggle("open")
    })
}
window.onload = ()=>{
    const mobile_menu_icon = document.getElementById("mobile-menu-icon");
    addOpenOnClick(mobile_menu_icon)
    addOpenOnClick(document.getElementById("ticket-menu-item"))
}