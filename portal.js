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
const loadCatagoryData = async (id,isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    const data = await res.json()

    displayShowCard(data.data,isShowAll)

}
// initioal load news
loadCatagoryData("01")
// display catagory card
const displayShowCard = (cards,isShowAll) => {

    if(cards.length>5 && !isShowAll){
        document.getElementById("show_all_ontainer").classList.remove("hidden")
    }else{
        document.getElementById("show_all_ontainer").classList.add("hidden")
    }
    if(!isShowAll){
     cards=cards.slice(0,5)
    }
    console.log("click",isShowAll)
    // console.log(cards)
    const card_container = document.getElementById("card_container")
    card_container.innerHTML = ""
    cards.forEach(card => {
        const { title, details, _id } = card
        const sliceTitel = title.slice(0, 30)
        const sliceDetails = details.slice(0, 30)
        // console.log(card._id)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl">
                <figure><img  src="${card.thumbnail_url
            }" alt="Movie"/></figure>
                <div class="card-body">
                  <h2 class="card-title">${sliceTitel}</h2>
                  <p>${sliceDetails}</p>
                  <div class="card-actions justify-end">
                    <button onclick="handelModal();loadDetailsData('${_id}')" class="btn btn-primary">Watch</button>
                  </div>
                </div>
              </div>
        `
        card_container.appendChild(div)
        // console.log(card)
    })
    loadDisplay(false)
}
// search handel
const searchHandel = (isShowAll) => {

    const searchText = document.getElementById("search_text").value
    if (searchText) {
        loadDisplay(true)
        loadCatagoryData(searchText,isShowAll)
    } else {
        alert("please enter a id")
    }
}
// display handelar
const loadDisplay = (isLoading) => {
    const sppiner = document.getElementById("sppiner")
    if (isLoading) {
        sppiner.classList.remove("hidden")
    }
    else {
        sppiner.classList.add("hidden")
    }
}

// modal
const handelModal = () => {
    my_modal_5.showModal()
}

// load details data modal
const loadDetailsData = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`)
    const data = await res.json()
    displayDetailsData(data.data[0])
}
// display details data
const displayDetailsData = (card_info) => {
    const { thumbnail_url,title,details} = card_info
    document.getElementById("card_title").innerText=title
    document.getElementById("card_description").innerText=details
    console.log(card_info)
}
// show all handel

const showAllHandel=(isShowAll)=>{
    // console.log("hello")
    searchHandel(isShowAll)
}