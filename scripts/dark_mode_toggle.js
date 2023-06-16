window.onload = ()=>{
    const dark_mode_toggle =document.getElementById("dark-mode-toggle")
    dark_mode_toggle.onclick =()=>{
        document.body.classList.toggle('dark')
    }
}