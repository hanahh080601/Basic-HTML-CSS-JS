let bt1 = document.getElementById("btn1");
let bt2_1 = document.getElementById("btn2-1");
let bt2_2 = document.getElementById("btn2-2");
let bt2_3 = document.getElementById("btn2-3");
let bt2_4 = document.getElementById("btn2-4"); 
let bt3 = document.getElementById("btn3");
let txt3 = document.getElementById("txt3");


var date=new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
console.log(date)
document.getElementById("time").innerHTML=date
console.log(date)


function myFunction(e){
    e.preventDefault();
    let re="";
  let mess=document.getElementById("text")
  for(i=0;i<mess.value.length;i++){
    // console.log(mess.value[i])
    //  mess.value[i]=(String.fromCharCode("a".charCodeAt()+1))
    if(mess.value[i].charCodeAt()==32) {
        re+=" ";
        continue;
    }
    re+=(String.fromCharCode(mess.value[i].charCodeAt()+1))
  }
  document.getElementById("text-resolve").innerText=re
}

