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
let btnLoginNav = document.querySelector('.btnLoginNav')



var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

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






fetch('./annunci.json').then((response)=> response.json()).then((data)=>{
    let radioWrapper = document.querySelector('#radioWrapper')
    let cardsWrapper = document.querySelector('#cardsWrapper')
    let numberPrice = document.querySelector('#numberPrice')
    let inputRange = document.querySelector('#inputRange')
    let wordInput = document.querySelector('#wordInput')
    
    function setRadios() {
        let categories = data.map((annuncio)=>annuncio.category)
        // let uniqueCategories = []
        // categories.forEach((category)=>{
        //     if(!uniqueCategories.includes(category)){
        //         uniqueCategories.push(category)
        //     }
        // })
        let uniqueCategories = Array.from(new Set(categories)).sort()

        uniqueCategories.forEach((el)=>{
            let div = document.createElement('div')
            div.classList.add('form-check')
            div.innerHTML=`
                                <input class="form-check-input" type="radio" name="categories" id="${el}">
                                <label class="form-check-label" for="${el}">
                                ${el}
                                </label>
            `
            radioWrapper.appendChild(div)
        })
    }
    function showCards(array) {
        cardsWrapper.innerHTML=''
        array.forEach((el)=>{
            let div = document.createElement('div')
            div.classList.add('ann-card','text-center')
            div.innerHTML=`
                    <p class="h3">${el.name}</p>
                    <p>${el.category}</p>
                    <p>${el.price} €</p>
            `
            cardsWrapper.appendChild(div)
        })
    }
    setRadios()
    let radios = document.querySelectorAll('.form-check-input')
    showCards(data)
    function filterByCategory() {
        let checked = Array.from(radios).find((el)=>el.checked)
        let categoria = checked.id
        let filtered = data.filter((el)=>el.category==categoria)
        
        if(categoria=='All'){
            showCards(data)
        }else{
            showCards(filtered)
        }
    }
    radios.forEach((el)=>{
        el.addEventListener('click',()=>{filterByCategory()})
    })
    function setInputPrice() {
        let prices = data.map((el)=> +el.price) //per cambiare da str a num basta mettere un + davanti
        let maxPrice = Math.ceil( Math.max(...prices))
        inputRange.max = maxPrice
        inputRange.value = maxPrice
        numberPrice.innerHTML=`${maxPrice} €`
    }
    setInputPrice()
    function filterByPrice(){
        let filtered = data.filter((el)=>+el.price <= +inputRange.value)
        showCards(filtered)
    }
    inputRange.addEventListener('input',()=>{
        filterByPrice()
        numberPrice.innerHTML =`${inputRange.value}€` 
    })
    function filterByWord(word) {
        let filtered = data.filter((el)=> el.name.toLowerCase().includes(word.toLowerCase()))
        showCards(filtered)
    }
    
    wordInput.addEventListener('input',()=>{
        filterByWord(wordInput.value)
    })
})