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
let bt6 = document.getElementById("btn6");
let txt6 = document.getElementById("txt6");
let bt7 = document.getElementById("btn7");
let txt7 = document.getElementById("txt7");
let bt8 = document.getElementById("btn8");
let txt8 = document.getElementById("txt8");
let bt9 = document.getElementById("btn9");
let txt9 = document.getElementById("txt9");
let bt10 = document.getElementById("btn10");
let txt10_a = document.getElementById("txt10_a");
let txt10_b = document.getElementById("txt10_b");

bt1.onclick = () => {
    let today1 = new Date();
    let date1 = (today1.getMonth()+1) +'-'+ today1.getDate() +'-'+today1.getFullYear();
    let time1 = today1.getHours() + ':' + today1.getMinutes() + ':' + today1.getSeconds();
    let dateTime = date1+' '+time1;
    l1.innerHTML = "";
    l1.innerHTML += '<li>' + "DateTime: " + dateTime + '</li>'
}

bt2_1.onclick = () => {
    var today21 = new Date();
    var date21 = (today21.getMonth()+1) +'-'+ today21.getDate() +'-'+today21.getFullYear();
    l2.innerHTML = "";
    l2.innerHTML += '<li>' + "DateTime: " + date21 + '</li>'
}

bt2_2.onclick = () => {
    var today22 = new Date();
    var date22 = (today22.getMonth()+1) +'/'+ today22.getDate() +'/'+today22.getFullYear();
    l2.innerHTML = "";
    l2.innerHTML += '<li>' + "DateTime: " + date22 + '</li>'
}

bt2_3.onclick = () => {
    var today23 = new Date();
    var date23 = today23.getDate()+'-'+(today23.getMonth()+1)+'-'+today23.getFullYear();
    l2.innerHTML = "";
    l2.innerHTML += '<li>' + "DateTime: " + date23 + '</li>'
}

bt2_4.onclick = () => {
    var today24 = new Date();
    var date24 = today24.getDate()+'/'+(today24.getMonth()+1)+'/'+today24.getFullYear();
    l2.innerHTML = "";
    l2.innerHTML += '<li>' + "DateTime: "+ date24 + '</li>'
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
    for(i = 0; i < number.length-1; i++){
        for(j = i + 1 ; j < number.length; j++){
            if(number[i] > number[j]) {
                check=false;
                break;
            }
        }
    }
    let promise=new Promise((resolve,reject)=>{
        if(check){
            resolve("Chuỗi số nguyên tăng")
        }
        else reject("Chuỗi số nguyên không tăng")
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

bt6.onclick = () => {
    if(txt6.value.trim() == "") alert("Vui lòng nhập vào");
    else {
    var words=txt6.value.trim().split(' ');
    var max=0;
    var curren=words[0]
    //dem so lan xuat hien cuar words[0]
    for(i=0;i<words.length;i++){
        var count=0;
        for(j=0;j<words.length;j++){
            console.log("Dang so sanh giua " +  words[i]+ "voi " +words[j])
             if(words[i]==words[j]) count++;
            
        }
        if(count>max) {
            max=count;
            curren=words[i]
        }
    }
    alert(curren + " xuất hiện" + max + " lần");
}
}

bt7.onclick = () => {
    if(txt7.value.trim() == "") alert("Vui lòng nhập vào");
    else {
    if(txt7.value.includes("java") == true)
        alert("Chuỗi có tồn tại 'java'");
        else 
        alert("Chuỗi không tồn tại 'java'"); 
    }      
}

bt8.onclick = () => {
    if(txt8.value.trim() == "") alert("Vui lòng nhập vào");
    else {
    switch(txt8.value){
        case "1":{
            alert("Tháng Một");
            break;
        }
        case "2":{
            alert("Tháng Hai");
            break;
        }
        case "3":{
            alert("Tháng Ba");
            break;
        }
        case "4":{
            alert("Tháng Bốn");
            break;
        }
        case "5":{
            alert("Tháng Năm");
            break;
        }
        case "6":{
            alert("Tháng Sáu");
            break;
        }
        case "7":{
            alert("Tháng Bảy");
            break;
        }
        case "8":{
            alert("Tháng Tám");
            break;
        }
        case "9":{
            alert("Tháng Chín");
            break;
        }
        case "10":{
            alert("Tháng Mười");
            break;
        }
        case "11":{
            alert("Tháng Mười Một");
            break;
        }
        case "12":{
            alert("Tháng Mười Hai");
            break;
        }
        default: {
            alert("Không hợp lệ");
            break;
        }
    }
}
}

bt9.onclick = () => {
    if(txt9.value != "")
    {
    var words=txt9.value.split(' ');
        maxLength=0;
        var textCurrent;
        for(i=0;i<words.length;i++){
            if(words[i].length>maxLength) {
                maxLength=words[i].length;
                textCurrent=words[i]
            }
        }
    alert("Chuỗi dài nhất là: " + textCurrent);
    }
    else alert("Vui lòng nhập chuỗi");
}

function isPrime(number) {
    if(number < 2) return false;
    for(let i = 2; i < number/2; i++) {
       if(number % i == 0) return false;
    } 
    return true;
 }
 
 function getPrimeNumberBetweenXY(x, y) {
    x = Number(x);
    y = Number(y);
    s='';
    for(let i = x; i <= y; i++) {
       if(isPrime(i)) {
           s += i + ' ';
       }
    }
    if(s != '') return s;
    else return -1;
 }

bt10.onclick = () => {
    if(txt10_a.value.trim() == "" || txt10_b.value.trim() == "") alert("Vui lòng nhập vào");
    alert(getPrimeNumberBetweenXY(txt10_a.value, txt10_b.value));
}














