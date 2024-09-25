let navbar = document.querySelector('.navbar');
let navLink = document.querySelectorAll('.nav-link')
let logo = document.querySelector('.logo')
let hamburger = document.querySelector('#hamburger')
let pagCarosello = document.querySelector('.pagCarosello')
let carosello = document.querySelector('.carosello')
let annunciTarget=document.querySelector('#annunciTarget')

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
    ]
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
    