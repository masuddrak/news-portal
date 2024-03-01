const loadCatagory = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await res.json()
    // console.log(data.data.news_category)
    displayCatagory(data.data.news_category)
}

// display Catagoy
const displayCatagory = (catagoys) => {
    // console.log(catagoys)
    const catagoyContainer = document.getElementById("catagory_container")
    catagoys.forEach(catagoy => {
        const catoryBtn = document.createElement("div")
        catoryBtn.innerHTML = `
        <button onclick="loadCatagoryData('${catagoy.category_id}')" >${catagoy.category_name}</button>
        `
        catagoyContainer.appendChild(catoryBtn)
    });
}
loadCatagory()

// load catagory data
const loadCatagoryData = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    const data = await res.json()
    displayShowCard(data.data)
}
// display catagory card
const displayShowCard = (cards) => {
    // console.log(cards)
    cards.forEach(card=>{
        console.log(card)
    })
}