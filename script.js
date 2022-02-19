const arraycards=[];//creating an array outside a function will only work


function HideContainerMain()
{

//   document.getElementById("main").style.filter="blur(5px)";
//   document.getElementById("main-right").style.filter="blur(5px)";
//  const wel= document.getElementsByClassName("fa-plus-circle");
//  wel[0].style.filter="blur(5px)";
// document.getElementById("hello").style.filter="blur(5px)";
  document.getElementById("container-main").style.filter="blur(8px)";
  document.getElementById("main-bottom").style.visibility="hidden";
  document.getElementById("container-card").style.visibility="visible";
  document.getElementById("allcards").style.filter="blur(8px)";



}


function closingcard()
{
 document.getElementById("container-card").style.visibility="hidden";
 document.getElementById("container-main").style.filter="blur(0px)";
 document.getElementById("allcards").style.filter="blur(0px)";
}

function addingcard()
{
  document.getElementById("container-card").style.visibility="hidden";
  document.getElementById("container-main").style.filter="blur(0px)";
  document.getElementById("allcards").style.filter="blur(0px)";
  


//Creating a div which consists of title of card or todo,then items inside it along with add and delete button
 const allcards= document.getElementById("allcards");
  const childcards=document.createElement("div");
  childcards.setAttribute("id","childcards")
  allcards.appendChild(childcards);
 
//
const titlecard=document.createElement("div");
const hline=document.createElement("hr");
const plusicon=document.createElement("i");
const deleteicon=document.createElement("i");


//
titlecard.setAttribute("id","titlecard");
hline.setAttribute("id","hline");

plusicon.setAttribute("class","fas fa-plus-circle");
plusicon.setAttribute("id","plusicon");
plusicon.setAttribute("onclick","itempopup()") //EXAMPLE FOR ONCLICK USING SET ATTRIBUTE
deleteicon.setAttribute("class","fas fa-trash-alt");
deleteicon.setAttribute("id","deleteicon");
deleteicon.setAttribute("onclick","itemclose()");////EXAMPLE FOR ONCLICK USING SET ATTRIBUTE

  //now adding the title with the help OF ARRAY OF OBJECTS:
  const inputtext=document.getElementById("inputtext").value
  
  //creating a object with id and allocating each card with  a unique id
  const objcards={
    id:Date.now(),
    cardname:inputtext
  }
arraycards.push(objcards);


// console.log(arraycards);//CHECKING WHETHER ALL OBJECTS ARE BEING INSERTED INSIDE ARRAY OR NOT
titlecard.innerText=arraycards[arraycards.length-1].cardname;
//
childcards.appendChild(titlecard);
childcards.appendChild(hline);
childcards.appendChild(plusicon);
childcards.appendChild(deleteicon);



// // EVENT LISTENER INSTEAD OF SET ATTRIBUTE ONCLICK
plusicon.addEventListener('click', ()=>{
 document.getElementById("item-inside").style.visibility="visible";
 document.getElementById("allcards").style.filter="blur(8px)";
})
// EVENT LISTENER INSTEAD OF SET ATTRIBUTE ONCLICK
deleteicon.addEventListener('click', ()=>{
childcards.remove();
 })


 // EVENT LISTENER TO ADD TODO ITEMS
let addingitem=document.getElementById("itemadd");
addingitem.addEventListener('click',()=>{
 
  const inputitem=document.getElementById("inputitem").value


  let todoitems=document.createElement("div");// LIST OF TODOITEMS ALONGWITH MARKDONE SYMBOL
  todoitems.setAttribute("id","todoitems");
  //
   let apenditem=document.createElement("span");
   let apendmark=document.createElement("span");


   apenditem.setAttribute("id","apenditem");
   apendmark.setAttribute("id","apendmark");
  

   //
  let first = document.createTextNode(inputitem);
  let second = document.createTextNode("Mark Done");

    
  todoitems.appendChild(apenditem);
    todoitems.appendChild(apendmark);
  apenditem.appendChild(first);
  apendmark.appendChild(second);
    childcards.appendChild(todoitems);
    
 
   document.getElementById("item-inside").style.visibility="hidden";
   document.getElementById("container-main").style.filter="blur(0px)";
   document.getElementById("allcards").style.filter="blur(0px)";


   apendmark.addEventListener('click',()=>{
   apendmark.remove();
    apenditem.style.textDecoration = "line-through";
    apenditem.style.color = "red";
   
   });
   
    
});

// BACK DISPLAY CODE

  //  titlecard.addEventListener('click',()=>{
   
  //    let backcontainer=document.getElementById("back-container")
  //    backcontainer.style.visibility="visible";
  //    let main=document.getElementById("main")
  //    main.style.visibility="hidden";
  //    let mainright=document.getElementById("main-right");
  //    mainright.style.visibility="hidden"
     
  //    let holddynamic=document.getElementById("holddynamic");
   
  //   holddynamic.innerHTML=arraycards[arraycards.length-1].cardname;
     
  //   let begin=document.getElementById("begin");
  //   begin.style.float="right";
     

  //  });


}


function closingitem()
{
  document.getElementById("item-inside").style.visibility="hidden";
  document.getElementById("container-main").style.filter="blur(0px)";
  document.getElementById("allcards").style.filter="blur(0px)";
}

