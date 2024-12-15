let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector(".lists");
let li=document.querySelector("li");


    btn.addEventListener("click",function(){
        let item=document.createElement("li");
        item.innerHTML=inp.value;
        ul.appendChild(item);
        inp.value=("");
        saveData();


        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        item.appendChild(span);
    
       
    
        
    });

    ul.addEventListener("click", (event)=>{
        if (event.target.tagName ==="ITEM"){
    event.target.classList.toggle("checked");
    saveData()
    
   }else if(event.target.tagName ==="SPAN"){
    event.target.parentElement.remove();
    saveData();
}

},false);


ul.addEventListener("click",(event)=>{
event.target.classList.toggle("checked");
});
saveData();


function saveData(){
    localStorage.setItem("data",ul.innerHTML);
}

function showTask(){
    ul.innerHTML=localStorage.getItem("data");
}
showTask();