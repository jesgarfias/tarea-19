const largoCarrusel=document.querySelectorAll(".carrusel__section");
const slider=document.querySelector("#slider");
const btnLeft=document.querySelector(".btn-left");
const btnRight=document.querySelector(".btn-right");
const mouse=document.querySelector("#nosotros");
const container=document.querySelector(".header__submenu");
console.log(slider);
//variables
let operacion = 0;
let imgleng = 100/largoCarrusel.length;
let contador = 0;
//botones

btnRight.addEventListener("click",e=>moveToRight());
btnLeft.addEventListener("click",e=>moveToLeft());
//funcion mover derecha - izquierda
const moveToRight=()=>{   
    if(contador>=largoCarrusel.length-1){
        contador=0;
        operacion=0;
        slider.style.transform= `translate(-${operacion}%)`;
        slider.style.transition="none"
        console.log("se paso")   
    }else{
        contador++;
        console.log(contador); 
        operacion=operacion+imgleng;
        console.log(operacion);
        slider.style.transform= `translate(-${operacion}%)`;
        slider.style.transition= "all ease .6s";
    }
}

const moveToLeft=()=>{   
    contador--;
    if(contador<0){
        contador=largoCarrusel.length;
        operacion=imgleng*(largoCarrusel.length-1);
        slider.style.transform= `translate(-${operacion}%)`;
        slider.style.transition="none"
        console.log("se paso")   
    }else{
        console.log(contador); 
        operacion=operacion-imgleng;
        console.log(operacion);
        slider.style.transform= `translate(-${operacion}%)`;
        slider.style.transition= "all ease .6s";
    }
}

setInterval(moveToRight,3000);

const display=()=>{   
    container.classList.add("header__submenu--show");
}

const displayNo=()=>{   
    container.classList.remove("header__submenu--show");
}

mouse.addEventListener("mouseenter",e=>display());
mouse.addEventListener("mouseleave",e=>displayNo());