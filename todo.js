let inputElem = document.getElementById("if");
let divclass = document.querySelector(".output");
let button = document.querySelector("#btn");


button.addEventListener('click' , ()=>{
    addtodoo();
})

divclass.addEventListener('click' , (evennt)=>{
    let curelem = evennt.target;
    curelem.remove();
})

const addtodoo=()=>{
    
    let pelem=document.createElement("p");
    pelem.textContent=inputElem.value;
    divclass.append(pelem);
    inputElem.value="";
}
