let bt1 = document.getElementById("btn1");
let l1 = document.getElementById("list1");
let bt2_1 = document.getElementById("btn2-1");
let bt2_2 = document.getElementById("btn2-2");
let bt2_3 = document.getElementById("btn2-3");
let bt2_4 = document.getElementById("btn2-4");
let l2 = document.getElementById("list2"); 
let bt3 = document.getElementById("btn3");
let txt3 = document.getElementById("txt3");
let bt4 = document.getElementById("btn4");
let txt4 = document.getElementById("txt4");
let bt5 = document.getElementById("btn5");
let txt5 = document.getElementById("txt5");


bt1.onclick = () => {
    let today1 = new Date();
    let date1 = (today1.getMonth()+1) +'-'+ today1.getDate() +'-'+today1.getFullYear();
    let time1 = today1.getHours() + ':' + today1.getMinutes() + ':' + today1.getSeconds();
    let dateTime = date1+' '+time1;
    l1.innerHTML += '<li>' + dateTime + '</li>'
}

bt2_1.onclick = () => {
    var today21 = new Date();
    var date21 = (today21.getMonth()+1) +'-'+ today21.getDate() +'-'+today21.getFullYear();
    l2.innerHTML += '<li>' + date21 + '</li>'
}

bt2_2.onclick = () => {
    var today22 = new Date();
    var date22 = (today22.getMonth()+1) +'/'+ today22.getDate() +'/'+today22.getFullYear();
    l2.innerHTML += '<li>' + date22 + '</li>'
}

bt2_3.onclick = () => {
    var today23 = new Date();
    var date23 = today23.getDate()+'-'+(today23.getMonth()+1)+'-'+today23.getFullYear();
    l2.innerHTML += '<li>' + date23 + '</li>'
}

bt2_4.onclick = () => {
    var today24 = new Date();
    var date24 = today24.getDate()+'/'+(today24.getMonth()+1)+'/'+today24.getFullYear();
    l2.innerHTML += '<li>' + date24 + '</li>'
}

bt3.onclick = () => {
    let number=txt3.value;
    check=true;
    if(txt3.value == "")
    {
        check = false; 
        alert("Vui lòng nhập vào!")
        return;
    } 
    for(i=0;i<number.length-1;i++){
        for(j=i+1;j<number.length;j++){
            if(number[i]>number[j]) {
                check=false;
                break;
            }
        }
    }
    let promise=new Promise((resolve,reject)=>{
        if(check){
            resolve("Correct")
        }
        else reject("Incorrect")
    })
    promise.then((message)=>{
        alert(message)
    }).catch((error)=>{
        alert(error)
    })
}

bt4.onclick = () => {
    if(txt4.value == "") {
        alert("Vui lòng nhập vào!");
        return;
    }
    var strArr=txt4.value.split("");
    for(var i = 0; i < txt4.value.length; i++){
        strArr[i]=String.fromCharCode(txt4.value.charCodeAt(i)+1);
    }
    alert(strArr.join(""));
}

bt5.onclick = () => {
    if(txt5.value.length < 3){
        alert("Độ dài của chuỗi phải >= 3")
    }
    else{
        if(txt5.value.length%2==0){
            alert("Độ dài của chuỗi phải là số lẻ!")
        }
        else {
            let position = txt5.value.length / 2 + 0.5;
            let s = txt5.value.slice(position - 2,position + 1)
            alert("Chuỗi mới được tạo là: " + s);
        }
    }
}







