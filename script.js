const row = document.querySelector('.row')
const searchInput = document.querySelector("#searchInput")
const all = document.querySelector("#all")
const searchBox = document.querySelector('.search-wrapper')
const searchBtn = document.querySelector("#searchBtn")
const input = document.querySelector('#inputBtn')
const nameText = document.querySelector("#nameText")
const category = document.querySelector("#categoryText")
const instruction = document.querySelector("#instructionText")
const imgText = document.querySelector("#imgText")
const test = document.querySelector("#test")
const test1=document.querySelector("#test1")

const handleFunction = () => {
    fetch('https://www.thecocktaildb.com/api/json/v2/1/popular.php')
        .then(res => res.json())
        .then(data => {
            data.drinks.forEach(drink => {
                row.innerHTML += `
<div class="col-4">
<div class="card">
<img src="${drink.strDrinkThumb}" alt="" class="card-img">
<div class="card-body">
<h5 class="title">${drink.strDrink}</h5>
<p class="text">${drink.strCategory}</p>
</div>
</div>
</div>

`
                console.log(data)
            })
        })
}
handleFunction()




searchBtn.addEventListener('click', () => {
    let value = input.value
    // console.log(value)
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
        .then(res => res.json())
        .then(json => {
            const drink = json.drinks[0]
            console.log(json.drinks)
            imgText.src=drink.strDrinkThumb
            nameText.innerText = drink.strDrink
            category.innerText = drink.strCategory
            instruction.innerHTML=drink.strInstructions


        })
})

all.addEventListener('change', () => {
    if (all.checked) {
        row.classList.remove('hidden')
        searchInput.classList.remove('hidden')
        searchBox.classList.add('hidden')

    }
})
searchInput.addEventListener('change', () => {
    if (searchInput.checked) {
        row.classList.add('hidden')
        searchBox.classList.remove('hidden')


    }
})

test1.addEventListener('click',()=>{
    if (test1.click) {
        row.classList.remove('hidden')
        searchInput.classList.remove('hidden')
        searchBox.classList.add('hidden')

    }
})

test.addEventListener('click',()=>{
    if (test.click) {
        row.classList.add('hidden')
        searchBox.classList.remove('hidden')


    }
})
