let t=document.getElementById('title')
let n=document.getElementById('note')
let b=document.getElementById('btn')
let right=document.getElementById('right')

btn.addEventListener('click',(e)=>
{
    e.preventDefault()
    console.log(title.value)
    console.log(note.value);
    right.innerHTML+=`<div>
        <h2>${title.value}</h2>
        <p>${note.value.slice(0,50)} ...</p>
        <i class=" fa-solid fa-pen"></i>
        <i class="fa-solid fa-trash"></i> 

    </div>`

    title.value="";
    note.value="";
    let dbtns=document.getElementsByClassName('fa-trash')
    for(let i=0;i<dbtns.length;i++){
        dbtns[i].addEventListener('click',()=>{

       
        dbtns[i].parentElement.style.display="none";
     })
    }
    let ebtns=document.getElementsByClassName('fa-pen')
    for(let i=0;i<ebtns.length;i++){
        ebtns[i].addEventListener('click',()=>{
        title.value=ebtns[i].parentElement.childNodes[1].innerText;
        note.value=ebtns[i].parentElement.childNodes[3].innerText;
        ebtns[i].parentElement.style.display='none';
        })  
    }
}
)