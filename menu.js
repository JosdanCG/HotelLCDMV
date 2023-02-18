const habitac = document.getElementById('submit')
const nav = document.querySelector('.nav');
const Swarning=document.querySelector('warning')


  
window.addEventListener('scroll', ()=>{
    nav.classList.toggle('active', window.scrollY > 0)
    
})


const enviarDatos = (e) => {
    // 924796668
    const telefono = "924796668";
    let nombre = document.querySelector('#nombre').value;
    let tipo = document.querySelector('#tipo');
    var selected = tipo.options[tipo.selectedIndex].text;
    let fecha = document.querySelector('#fecha').value;
    let text = "";

    let entrada = false
    
    if (nombre === "" ) {
        text += `Faltan rellenar`
        entrada = true
    }
    if (selected === "") {
        text += `Faltan rellenar`
        entrada = true 
    }
    if (entrada) {
        warning.innerHTML= text
    } else {
        const url = window.open(`https://wa.me/${telefono}?text=Nombres:%0A${nombre}%0AHabitacion:%0A${selected}%0AFecha de su reserva:%0A${fecha}`)
    }
}

habitac.addEventListener('click', enviarDatos);

var swiper = new Swiper(".slide_content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor:"true",
    pagination: {
      el: ".swiper-pagination",
        clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});



