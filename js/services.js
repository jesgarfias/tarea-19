const mouse=document.querySelector("#nosotros");
const container=document.querySelector(".header__submenu");

const display=()=>{   
    container.classList.add("header__submenu--show");
}

const displayNo=()=>{   
    container.classList.remove("header__submenu--show");
}

mouse.addEventListener("mouseenter",e=>display());
mouse.addEventListener("mouseleave",e=>displayNo());