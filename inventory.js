let n=0;
window.onload=function(){
    let  buttonclick=document.getElementById("button");
    buttonclick.style.color="blue";
    
    buttonclick.onclick=change;
}



function change(){
    let name =document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let quantity = document.getElementById("quantity").value;

 document.getElementsByClassName("name1")[n].innerHTML=name;
 document.getElementsByClassName("category1")[n].innerHTML=category;
 document.getElementsByClassName("quantity1")[n].innerHTML=quantity;
    
 n++;
 }