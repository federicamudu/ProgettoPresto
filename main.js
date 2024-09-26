let navbar = document.querySelector('.navbar');
let navLink = document.querySelectorAll('.nav-link')
let logo = document.querySelector('.logo')
let hamburger = document.querySelector('#hamburger')
let pagCarosello = document.querySelector('.pagCarosello')
let carosello = document.querySelector('.carosello')
let annunciTarget=document.querySelector('#annunciTarget')
let addContactBtn = document.querySelector('#addContactBtn')
let inputTitoloArticolo = document.querySelector('#inputTitoloArticolo')
let inputCategoria = document.querySelector('#inputCategoria')
let inputPrezzo = document.querySelector('#inputPrezzo')
let swiperWrapper = document.querySelector('.swiper-wrapper');
let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber');

let products = {
    contacts : [
        {nomeArticolo:'iPhone 15',categoria:'telefonia',prezzo:700},
        {nomeArticolo:'macBook',categoria:'pc',prezzo:3000},
        {nomeArticolo:'monopattino elettrico',categoria:'mobilita',prezzo:350}
    ],
    categories : [
        {categoria:'telefonia', descrizione:'I migliori telefoni dell\'ultimo periodo', copertina: `url(./media/telefonia.avif)`},
        {categoria:'pc', descrizione:'I migliori pc dell\'ultimo periodo', copertina: `url(./media/pc.jpeg)`},
        {categoria:'mobilita', descrizione:'I migliori mezzi di trasporto dell\'ultimo periodo', copertina: `url(./media/mobilita.jpg)`},
        {categoria:'arredo', descrizione:'I migliori arredi dell\'ultimo periodo',copertina: `url(./media/arredo-interni.jpg)`},
        {categoria:'gaming', descrizione:'Le migliori console dell\'ultimo periodo',copertina: `url(./media/joystick.jpg)`},
    ],
    addProduct: function (newName, newCategoria, newPrezzo) {
        this.contacts.push({ nomeArticolo: newName, categoria: newCategoria, prezzo:newPrezzo });
    },
}



navLink.forEach((link)=>{
    link.addEventListener('mouseenter', ()=>{
        link.classList.remove('text-w')
        link.classList.add('text-or')
    })
    link.addEventListener('mouseleave',()=>{
        link.classList.remove('text-or')
        link.classList.add('text-w')
    })
})

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle(`bi-chevron-bar-up`)  
})


//evento allo scroll
window.addEventListener('scroll',()=>{
    if(window.scrollY>0){
        navbar.classList.remove('bg-b')
        navbar.classList.add('bg-or')
        navbar.style.borderBottom = '5px solid var(--b)'
        navLink.forEach((link)=>{
            link.classList.remove('text-w')
            link.classList.add('text-b')
            link.addEventListener('mouseenter', ()=>{
                link.classList.remove('text-b')
                link.classList.remove('text-or')
                link.classList.add('text-w')
            })
            link.addEventListener('mouseleave',()=>{
                link.classList.remove('text-or')
                link.classList.remove('text-w')
                link.classList.add('text-b')
            })
            logo.src="./media/blackRabbit.png"
            hamburger.classList.remove('text-w')
            hamburger.classList.add('text-b')
        })
    }
    else if(window.scrollY==0){
        navbar.classList.remove('bg-or')
        navbar.classList.add('bg-b')
        navbar.style.borderBottom = '5px solid var(--or)'
        navLink.forEach((link)=>{
            link.classList.remove('text-b')
            link.classList.add('text-w')
            link.addEventListener('mouseenter', ()=>{
                link.classList.remove('text-w')
                link.classList.add('text-or')
            })
            link.addEventListener('mouseleave',()=>{
                link.classList.remove('text-or')
                link.classList.add('text-w')
                link.classList.remove('text-b')
                
            })
        })
        logo.src="./media/whiteRabbit.png"
        hamburger.classList.remove('text-b')
        hamburger.classList.add('text-w')
    }
    else{
        navbar.classList.remove('bg-or')
        navbar.classList.add('bg-b')
        navbar.style.borderBottom = '5px solid var(--or)'
        navLink.forEach((link)=>{
            link.classList.remove('text-b')
            link.classList.add('text-w')
            link.addEventListener('mouseenter', ()=>{
                link.classList.remove('text-b')
                link.classList.add('text-or')
            })
            link.addEventListener('mouseleave',()=>{
                link.classList.remove('text-or')
                link.classList.add('text-w')
            })
        })
        logo.src="./media/whiteRabbit.png"
        hamburger.classList.remove('text-b')
        hamburger.classList.add('text-w')
    }
})

products.categories.forEach((el)=>{
    let divCard = document.createElement('div');
    divCard.innerHTML=`
                        <div class="carousel-item active data-bs-interval="2000"">
                            <div class="card cardCustom">
                                <div class="card-body imgCard" style="background-image: ${el.copertina}">
                                    <h5 class="card-title text-w">Sezione: ${el.categoria}</h5>
                                    <p class="card-text text-w">${el.descrizione}</p>
                                    <a href="" class="btn btn-primary">Vai alla pagina</a>
                                </div>
                            </div>
                        </div>`;
    pagCarosello.appendChild(divCard)
})
let confirm = false
addContactBtn.addEventListener('click', () => {
    
    
    if (inputTitoloArticolo.value != '' && inputCategoria.value != '' && inputPrezzo.value !='') {
        confirm = true;
        products.addProduct(inputTitoloArticolo.value, inputCategoria.value, inputPrezzo.value);
        inputTitoloArticolo=''
        inputCategoria=''
        inputPrezzo=''
        
    } else {
        alert('Compila tutti i campi')
    }
})


function createInterval(finalNumber, total, time) {
    let counter = 0;
    let interval = setInterval(() => {
        if (counter < total) {
            counter++;
            finalNumber.innerHTML = counter;
        } else {
            clearInterval(interval)
        }
        
    }, time)
}


let check = true;
let observer = new IntersectionObserver((entries) => {
    entries.forEach((el) => {
        if (el.isIntersecting && check == true) {
            createInterval(firstNumber, 600, 10);
            createInterval(secondNumber, 80, 70);
            createInterval(thirdNumber, 10, 600);
            check = false;
            
            setTimeout(() => {
                check = true;
            }, 6000)
            
        }
    })
})

observer.observe(thirdNumber);




let reviews = [
    { name: 'Gennaro', description: 'sito bellissimo', value: 5 },
    { name: 'Alessandro', description: 'sito pessimo', value: 1 },
    { name: 'Michele', description: 'sito incredibile e bravi tutti',  value: 5 },
    { name: 'Federica', description: 'non mi piacciono i colori',  value: 2 },
    { name: 'Francesca', description: 'si poteva fare di meglio',  value: 3 },
    { name: 'Andrea', description: 'Hanno riparato il mio telefono, ma non sono ancora riuscito a ottenere un appuntamento su Tinder.',  value: 5 },
    { name: 'Alessio', description: 'Personale molto gentile e qualificato, spiegano tutto nel dettaglio.',  value: 5},
    { name: 'Roberta', description: 'Ho acquistato un articolo che è arrivato rotto.',  value:  1},
    { name: 'Angelo', description: 'Nonostante un piccolo inconveniente (non risultava l\'ordine nella mia area personale) la gestione e la consegna sono stati super rapidi.',  value:  5},
    { name: 'Matteo', description: 'Dopo un anno di utilizzo le padelle hanno perso completamente l\'antiaderenza, nonostante oleatura, fiamma bassa e no lavastoviglie.',  value:  2},
    
]


reviews.forEach((review) => {
    let div = document.createElement('div');
    div.classList.add('swiper-slide', 'd-flex', 'justify-content-center');
    div.innerHTML = `
        <div class="reviewCard">
            <p class="lead">${review.name}</p>
            <p>${review.description}</p>
            <div id='starWrapper' class='d-flex'>
            ${createStar(review.value)}
        </div>
        
        `;
    swiperWrapper.appendChild(div);
})





function createStar(stars) {
    
    let finalstars = '';
    
    for (let i = 1; i <= stars ; i++) {
        finalstars += `<i class="bi bi-star-fill" style="color: #FFD43B;"></i>`
        
    }
    
    
    for (let i = 0; i < 5-stars ; i++) {
        finalstars += `<i class="bi bi-star" style="color: #FFD43B;"></i>`
    }
    
    return finalstars;
}




var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});