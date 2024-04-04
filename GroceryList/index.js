
function addTo(str){
let addList = document.querySelector("input")
addList.innerHTML+=str;
let temp = addList.innerHTML;
}

function result(){
    let addList=document.querySelector("input")
    let uinput=addList.value
    let lis = document.getElementById("list")  

    console.log(uinput)
    // addList.value="";
    let re = document.querySelector("ul")
    // re.innerHTML+=uinput+'<br>';
    re.innerHTML += `<span><li class="buton" >${uinput}</li><div><button class="buton" id="edit" onclick="editData(this)">Edit</button><button class="buton" id="delete" onclick="deleteData(this)">Delete</button></div></span><br>`
    
    addList.value="";
    
}
function deleteData(element){
      let del = element.parentNode.parentNode;
    del.remove();
}

function editData(element){
    let lis=element.parentNode.parentNode.querySelector("li")
    // let item = ed
    
    let currentData = lis.textContent;
    let userInput = prompt("Edit data:",currentData)

    if(userInput!==null){
        lis.textContent=userInput
    }
}
function clearData(){
     let cl = document.querySelector("ul");
     cl.innerHTML=""
     
}
