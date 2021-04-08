let list = document.getElementById('list');
let fullname = document.getElementById("fullname");
let age = document.getElementById("age");
let button = document.getElementById("submit");
let bk = document.getElementById("bk-blur");
let close = document.getElementById("close");
let saveChange = document.getElementById("save");
let text = document.getElementById("text");

async function loadUser(){
    let users = await axios.get("https://6065d36cb8fbbd00175677e7.mockapi.io/s-group/users");
    console.log(users);
    users.data.forEach(user => {
        list.innerHTML += '<li>' + "ID: " + user.id +" Name: " + user.name ;'</li>';
    });
}
loadUser();

async function postUser(n){
    let data = {
        "name": n,
    };
    let b = await axios.post("https://6065d36cb8fbbd00175677e7.mockapi.io/s-group/users", data);
    loadUser();
}

function myFunction(e) {
    // ngăn chặn load trang khi bấm submit
    e.preventDefault();
    
    if(fullname.value != "")
    {
        for(i = 0; i < fullname.value.length; i++)
        {
            if(fullname.value[i] >= '0' && fullname.value[i] <= '9')
            {
                text.innerText += "Nhập tên không được chứa chữ số!";
                bk.classList.remove("bk-blur");
                bk.classList.add("bk-blur1");
                return;
            }
        }
        text.innerText += "Bạn đã nhập thành công!";
        bk.classList.remove("bk-blur");
        bk.classList.add("bk-blur1");
        postUser(fullname.value);
    }
}

close.onclick = () => {
    bk.classList.remove("bk-blur1");
    bk.classList.add("bk-blur");
    text.innerText = "";
}



