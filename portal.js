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
// initioal load news
loadCatagoryData("01")
// display catagory card
const displayShowCard = (cards) => {
    // console.log(cards)
    const card_container=document.getElementById("card_container")
     card_container.innerHTML=""
    cards.forEach(card=>{
        const div=document.createElement('div')
        div.innerHTML=`
        <div class="card card-side bg-base-100 shadow-xl">
                <figure><img src="${card.thumbnail_url
                }" alt="Movie"/></figure>
                <div class="card-body">
                  <h2 class="card-title">New movie is released!</h2>
                  <p>Click the button to watch on Jetflix app.</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Watch</button>
                  </div>
                </div>
              </div>
        `
        card_container.appendChild(div)
        // console.log(card)
    })
   
}
// search handel
const searchHandel=()=>{
    const searchText=document.getElementById("search_text").value
    if(searchText){
        loadCatagoryData(searchText)
    }else{
        alert("please enter a id")
    }
}