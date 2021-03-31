let list = document.getElementById('list');
let fullname = document.getElementById("fullname");
let age = document.getElementById("age");
let button = document.getElementById("submit");
let bk = document.getElementById("bk-blur");
let close = document.getElementById("close");
let saveChange = document.getElementById("save");
let text = document.getElementById("text");
// let text = document.getElementById("notice-text");
// var test = $(#notice-text);

function myFunction(e) {
    // ngăn chặn load trang khi bấm submit
    e.preventDefault();
    // console.log(fullname);
    // alert(fullname.innerText);
    if(fullname.value != "" && age.value != "")
    {
        for(i = 0; i < fullname.value.length; i++)
        {
            if(fullname.value[i] >= '0' && fullname.value[i] <= '9')
            {
                // alert("Nhập tên không chứa chữ số"); 
                // text.innerHTML += '<span class="text">' + "Không nhập tên có chứa chữ số" ;'</span>';
                text.innerText += "Hello";
                bk.classList.remove("bk-blur");
                bk.classList.add("bk-blur1");
                return;
            }
        }
        list.innerHTML += '<li>' + "Name: " + fullname.value + " Age: " + age.value ;'</li>';
    }
}

close.onclick = () => {
    bk.classList.remove("bk-blur1");
    bk.classList.add("bk-blur");
    // text.innerHTML -= ('<span class="text">' + "Không nhập tên có chứa chữ số" + '</span>');
    text.innerText = "";
}

saveChange.onclick = () => {
    // list.innerHTML += '<li>' + fullname.value + '</li>';
    bk.classList.remove("bk-blur1");
    bk.classList.add("bk-blur");
}



