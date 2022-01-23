function blurry()
{
    document.getElementById("parentdiv").style.filter="blur(8px)";
    document.getElementById("noitems").style.display="none";
  
   
  
}





function adddiv()
{
  
    var jsdiv=document.createElement("div");
    var list=document.createElement("div");
    var formm=document.createElement("div");
    jsdiv.id="jsnew";
    list.id="l1";
    formm.id="l2";
    document.getElementById("addblock").appendChild(jsdiv);
    document.getElementById("jsnew").appendChild(list);
    document.getElementById("jsnew").appendChild(formm);
    
    document.getElementById("l1").innerHTML=" Add New List "+"<br><br>";
    document.getElementById("l2").innerHTML=' <form>'+
    '<input type="text" id="runtimetext" ><br><br>'+
    '</form>'+
    '<button type="button" onclick="helloworld()" id="btn">'+
    'ADD'+
    '<button type="button" onclick="closeall()" id="btn1">'+
    'CLOSE'+
    '</button>';

}






function helloworld()
{
    
    var divlist=document.createElement("div");
    var blockdamn=document.getElementById("blockdamn")
     divlist.id="divlist";
      blockdamn.appendChild(divlist);
    

// ANCHOR TAG WITH TEXT
 
    var runtimetext = document.getElementById("runtimetext");
    // aTag.setAttribute('href',"https://www.google.com/");
    var aTag = document.createElement("div");  
    aTag.id="tripto";
    aTag.innerHTML=runtimetext.value;
    // aTag.setAttribute("onclick", "paris()");
    divlist.appendChild(aTag);

    //HR LINE
    var elem = document.createElement("hr");
    elem.id="linetrip";
    divlist.appendChild(elem);

    //ADD ICON
    
    var newIconadd = document.createElement("i");
    newIconadd.id="ad"

    newIconadd.setAttribute("class", "fa-solid fa-circle-plus");
    newIconadd.setAttribute("onclick", "additem()");
    divlist.appendChild(newIconadd);

    //DELETE ICON
    
    var delicon = document.createElement("i");       
    delicon.id="dela"
    delicon.setAttribute("class","fa fa-trash-o");
    delicon.setAttribute("onclick", "delitem()");
    divlist.appendChild(delicon);


 //BLURING THE BACKGROUND
    document.getElementById("parentdiv").style.filter="blur(0px)";
    var myobj = document.getElementById("jsnew");
    myobj.remove();
  

}





function closeall()
{
    //JUST CLOSING OR REMOVING THE DIV
    document.getElementById("parentdiv").style.filter="blur(0px)";
    var myobj1 = document.getElementById("jsnew");
    myobj1.remove();
    
}





function additem()
{

     
    var oneitem=document.createElement("div");
    document.getElementById("parentdiv").style.filter="blur(8px)";
    

    var itemtwo=document.createElement("div");
    var itemthree=document.createElement("div");
    oneitem.id="oneitem";
    itemtwo.id="itemtwo";
    itemthree.id="itemthree";

    document.getElementById("itemadd").appendChild(oneitem);
    document.getElementById("oneitem").appendChild(itemtwo);
    document.getElementById("oneitem").appendChild(itemthree);
    
    document.getElementById("itemtwo").innerHTML=" Add New Item "+"<br><br>";
    document.getElementById("itemthree").innerHTML=' <form>'+
    '<input type="text" id="textrun" ><br><br>'+
    '</form>'+
    '<button type="button" onclick="atatime()" id="nb">'+
    'ADD'+
    '<button type="button" onclick="allclose()" id="tb">'+
    'CLOSE'+
    '</button>'; 

}





function allclose()
{
    document.getElementById("parentdiv").style.filter="blur(0px)";
    var myobj2 = document.getElementById("oneitem");
    myobj2.remove();
    
}





function atatime()

{
 //MAIN DIV and TRYING TO APPEND DIVLIST AGAIN INSIDE BLOACKDAMN TO GET THE TODO THINGS INSIDE
   var divlist=document.getElementById("divlist");
     var blockdamn=document.getElementById("blockdamn");//WRONG APPROACH TO ADD TODO IN ALL DIVLIST
         blockdamn.appendChild(divlist);
   

 
//add new item
   var textrun=document.getElementById("textrun"); 
  var checklist=document.createElement("div");
  checklist.id="checklist";
   checklist.innerHTML=textrun.value;
   checklist.innerHTML+='<span onclick="cut()" id="ext">'+
   "<span style='font-size:15px;position:relative;left:10px;background-color:#1abef0;padding:5px 5px 5px 5px;border-radius:20px; color:white;'>MarkDone</span>" +
   '</span>';

   divlist.appendChild(checklist);

  
   //removing add new item pop up
   var myobj3 = document.getElementById("oneitem");
    myobj3.remove();
   

    //BLURRING THE BACKGROUND WHEN CLICKED ON +
    document.getElementById("parentdiv").style.filter="blur(0px)";

}



function delitem()
{
    //deleting the the entire div containing the todo list
    var myobj4 = document.getElementById("divlist");
    myobj4.remove();
   
}



function cut()
{
  
  var divlist=document.getElementById("divlist");
      
    //REMOVING THE MARK DONE TEXT
    document.getElementById("ext").style.display="none";

    //adding the main todo things
     var checklist=document.getElementById("checklist");
     checklist.setAttribute("style","text-decoration-line: line-through; color:red;font-size:20px;");
     divlist.appendChild(checklist);//APPENDING AGAIN FOR THE FUNCTIONALITY TO WORK BUT WRONG APPROACH



}





// function paris()
// {
//   //for redirecting to trip to paris page
//  //setttrubute id to new id
//  //document.getlebyidfor new id
//  //and then hide everything except new id
// }









// SELECTED DIV