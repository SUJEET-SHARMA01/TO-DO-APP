const input=document.getElementById("input-box");
const list=document.getElementById("ItemsList");


function Add(){
    if(input.value===''){
        alert('you must write something')
    }else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)

    }
    input.value="";
    savedata()
}

list.addEventListener('click', function(e) {
     if (e.target.tagName === 'LI') {
         e.target.classList.toggle('checked');
         savedata()

         } 
         else if (e.target.tagName === 'SPAN')
        { 
        e.target.parentElement.remove();
        savedata()
} }, false);

function savedata(){
    localStorage.setItem("data",list.innerHTML)
}

function viewdata(){
    list.innerHTML=localStorage.getItem("data")
}
viewdata()
