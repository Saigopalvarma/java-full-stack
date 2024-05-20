

// const addBtn = document.getElementsByClassName("add-item-btn")[0]
// const overlay = document.getElementsByClassName("overlay")[0]
// const closeBtn = document.getElementById("close-icon")
// const itemForm = document.getElementsByClassName("item-form")[0]
// const itemCtn = document.getElementsByClassName("item-ctn")[0]
// const discardButton = document.getElementsByClassName("discard-btn")[0]
// const completeButton = document.getElementsByClassName("complete-btn")[0]

// let activeItemsArray = []
// let discardedItemsArray = []
// let completedItemsArray = []
// var itemCount = 2


// function openFormHandler(){
//     overlay.classList.remove("hidden")
// }

// function closeFormHandler(){
//     overlay.classList.add("hidden")
// }


// function discardHandler(event){
//     console.log(event)
//     console.log(event.target.classList[0])
// }

// function formSubmitHandler(event){
//     event.preventDefault()
//     overlay.classList.add("hidden")
//     const itemValues = {
//         itemTitle: event.target[0].value,
//         itemDescription: event.target[1].value,
//         startDate: event.target[2].value,
//         endDate: event.target[3].value
//     }


//     const item = document.createElement("div")
//     item.classList.add(String(itemCount))
//     item.classList.add("item")
    
    

//     const itemTitle = document.createElement("h1")
//     itemTitle.classList.add("title")
//     itemTitle.innerText = itemValues.itemTitle

//     const itemDesc = document.createElement("p")
//     itemDesc.classList.add("desc")
//     itemDesc.innerText = itemValues.itemDescription

//     const dateCtn = document.createElement("div")
//     dateCtn.classList.add("date-ctn")

//     const startDate = document.createElement("h2")
//     startDate.classList.add("date")
//     startDate.classList.add("start-date")
//     startDate.innerText = itemValues.startDate

//     const endDate = document.createElement("h2")
//     endDate.classList.add("date")
//     endDate.classList.add("end-date")
//     endDate.innerText = itemValues.endDate

//     dateCtn.appendChild(startDate)
//     dateCtn.appendChild(endDate)

//     const utilityBtnCtn = document.createElement("div")
//     utilityBtnCtn.classList.add("utility-btn-ctn")

//     const discardBtn = document.createElement("button")
//     discardBtn.classList.add(String(itemCount))
//     discardBtn.classList.add("btn")
//     discardBtn.innerText = "Discard"
//     discardBtn.classList.add("discard-btn")
//     discardBtn.addEventListener("click",discardHandler)

//     const completeBtn = document.createElement("button")
//     completeBtn.classList.add("btn")
//     completeBtn.innerText = "Mark As Complete"
//     completeBtn.classList.add("complete-btn")
//     utilityBtnCtn.appendChild(discardBtn)
//     utilityBtnCtn.appendChild(completeBtn)

//     item.appendChild(itemTitle)
//     item.appendChild(itemDesc)
//     item.appendChild(dateCtn)
//     item.appendChild(utilityBtnCtn)

//     activeItemsArray.push(item)
//     console.log(activeItemsArray)
//     itemCtn.appendChild(item)


//     itemCount+=1

//     console.log(itemTitle)



//     console.log(itemValues)
//     itemForm.reset()
// }




// closeBtn.addEventListener("click",closeFormHandler)
// addBtn.addEventListener("click",openFormHandler)
// itemForm.addEventListener("submit",formSubmitHandler)
// discardButton.addEventListener("click",discardHandler)
const addBtn = document.getElementsByClassName("add-item-btn")[0];
const overlay = document.getElementsByClassName("overlay")[0];
const closeBtn = document.getElementById("close-icon");
const itemForm = document.getElementsByClassName("item-form")[0];
const itemCtn = document.getElementsByClassName("item-ctn")[0];
const discardButton = document.getElementsByClassName("discard-btn")[0];
const completeButton = document.getElementsByClassName("complete-btn")[0];
const activeBtn = document.getElementsByClassName("active-btn")[0];
const discardedBtn = document.getElementsByClassName("discarded-btn")[0];
const completedBtn = document.getElementsByClassName("completed-btn")[0];

let activeItemsArray = [];
let discardedItemsArray = [];
let completedItemsArray = [];
var itemCount = 2;

function openFormHandler() {
    overlay.classList.remove("hidden");
}

function closeFormHandler() {
    overlay.classList.add("hidden");
}

function discardHandler(event) {
    const itemIndex = event.target.classList[0];
    const item = activeItemsArray.find(item => item.classList.contains(itemIndex));
    if (item) {
        discardedItemsArray.push(item);
        activeItemsArray = activeItemsArray.filter(item => !item.classList.contains(itemIndex));
        renderItems(activeItemsArray);
    }
}

function completeHandler(event) {
    const itemIndex = event.target.classList[0];
    const item = activeItemsArray.find(item => item.classList.contains(itemIndex));
    if (item) {
        completedItemsArray.push(item);
        activeItemsArray = activeItemsArray.filter(item => !item.classList.contains(itemIndex));
        renderItems(activeItemsArray);
    }
}

function formSubmitHandler(event) {
    event.preventDefault();
    overlay.classList.add("hidden");
    const itemValues = {
        itemTitle: event.target[0].value,
        itemDescription: event.target[1].value,
        startDate: event.target[2].value,
        endDate: event.target[3].value
    };

    const item = document.createElement("div");
    item.classList.add(String(itemCount));
    item.classList.add("item");

    const itemTitle = document.createElement("h1");
    itemTitle.classList.add("title");
    itemTitle.innerText = itemValues.itemTitle;

    const itemDesc = document.createElement("p");
    itemDesc.classList.add("desc");
    itemDesc.innerText = itemValues.itemDescription;

    const dateCtn = document.createElement("div");
    dateCtn.classList.add("date-ctn");

    const startDate = document.createElement("h2");
    startDate.classList.add("date");
    startDate.classList.add("start-date");
    startDate.innerText = itemValues.startDate;

    const endDate = document.createElement("h2");
    endDate.classList.add("date");
    endDate.classList.add("end-date");
    endDate.innerText = itemValues.endDate;

    dateCtn.appendChild(startDate);
    dateCtn.appendChild(endDate);

    const utilityBtnCtn = document.createElement("div");
    utilityBtnCtn.classList.add("utility-btn-ctn");

    const discardBtn = document.createElement("button");
    discardBtn.classList.add(String(itemCount));
    discardBtn.classList.add("btn");
    discardBtn.innerText = "Discard";
    discardBtn.classList.add("discard-btn");
    discardBtn.addEventListener("click", discardHandler);

    const completeBtn = document.createElement("button");
    completeBtn.classList.add(String(itemCount));
    completeBtn.classList.add("btn");
    completeBtn.innerText = "Mark As Complete";
    completeBtn.classList.add("complete-btn");
    completeBtn.addEventListener("click", completeHandler);

    utilityBtnCtn.appendChild(discardBtn);
    utilityBtnCtn.appendChild(completeBtn);

    item.appendChild(itemTitle);
    item.appendChild(itemDesc);
    item.appendChild(dateCtn);
    item.appendChild(utilityBtnCtn);

    activeItemsArray.push(item);
    renderItems(activeItemsArray);

    itemCount += 1;
    itemForm.reset();
}

function renderItems(items) {
    itemCtn.innerHTML = '';
    items.forEach(item => {
        itemCtn.appendChild(item);
    });
}

function showActiveItems() {
    renderItems(activeItemsArray);
}

function showDiscardedItems() {
    renderItems(discardedItemsArray);
}

function showCompletedItems() {
    renderItems(completedItemsArray);
}

closeBtn.addEventListener("click", closeFormHandler);
addBtn.addEventListener("click", openFormHandler);
itemForm.addEventListener("submit", formSubmitHandler);
activeBtn.addEventListener("click", showActiveItems);
discardedBtn.addEventListener("click", showDiscardedItems);
completedBtn.addEventListener("click", showCompletedItems);
discardButton.addEventListener("click", discardHandler);
completeButton.addEventListener("click", completeHandler);
