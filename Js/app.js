let addItembtn = document.querySelector(".addItembtn");
let itemList = document.querySelector(".list");
let itemValue = document.querySelector(".addItemInp");
let htmlContent = document.createElement("div");

addItembtn.addEventListener("click",()=>{
    let userval = itemValue.value; 
    if(userval.length > 0){
        addItemInList(itemValue.value)
    }
});

itemList.addEventListener("click",(e)=>{
    let classlist = e.target.classList;
    if (classlist.length == 1) {
        e.target.classList.add("done");
    }else{
        e.target.classList.remove("done");
    }

    
    
   
    console.log(e.target)
});
function addItemInList(uservalue){
    let htmlContent = document.createElement("div");
    htmlContent.className="ItemList";
    htmlContent.id=Math.floor(Math.random()*3);
    htmlContent.innerHTML = `<label class="item">`+uservalue+`</label><button class="clsItem">X</button></div></Div>`;
    itemList.append(htmlContent);
}