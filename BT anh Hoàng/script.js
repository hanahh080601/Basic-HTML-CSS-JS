let input_files = document.getElementsByClassName("files");
let nameitems = document.getElementsByClassName("nameitems");
let images = document.getElementsByClassName("img");
let btn_submit = document.getElementsByClassName("submit");
let categories = document.getElementsByClassName("listselect");
let form = document.getElementsByClassName("form");
let table = document.getElementById("table");
let name_REQUIRED = document.getElementsByClassName("nameCheck");
let select_REQUIRED = document.getElementsByClassName("categoryCheck");
let image_REQUIRED = document.getElementsByClassName("imageCheck");
let btn_choose = document.getElementsByClassName("btn-choosefile");
let header = '<tr>'
    +'<th>#</th>'
    +'<th>Item Name</th>'
    +'<th>Category</th>'
    +'<th>Image</th>'
    +'<th>Action</th>'
    +'</tr>'
const checkNumber= /^[^0-9]{0,20}$/i;
let str;

Showdata();
change_image();


function choosefilebtn(index) {
    input_files[index].click();
}

function change_image() {

    for (let i = 0; i < input_files.length; i++) {
        input_files[i].addEventListener("change", () => {
            const filename = input_files[i].files[0];
            if (filename) {
                const reader = new FileReader();
                reader.onload = function () {
                    const result = reader.result;
                    str = result;
                    images[i].src = str;
                    input_files[i].value = 'exist';
                }
                reader.readAsDataURL(filename);
            }
        })
    }
}

function validateName(value, index) {
    if(value == "")
    {
        name_REQUIRED[index].innerHTML = 'Item name is required!';
        return false;
    }
    else if (value.length >= 10){
        name_REQUIRED[index].innerHTML = 'Item name has less than 10 characters!'
        return false;
    }
    else if (!checkNumber.test(value)) {
        name_REQUIRED[index].innerHTML = 'Item name must not start with number!'
        return false;
    }
    else {
        name_REQUIRED[index].innerHTML = '';
        return true;
    }
}


function validateSelect(value, index) {
    if (value == "No selected") 
    {
        select_REQUIRED[index].innerHTML = 'Catogory is required';
        return false;
    }
    else
    {
        select_REQUIRED[index].innerHTML = '';
        return true;
    }
    
}

function validateImage(value, index){
    if(value.src != "")
    {
        image_REQUIRED[index].innerHTML = '';
        return true;
    }
    else 
    {
        image_REQUIRED[index].innerHTML = 'Image is required';
        input_files[index].value = 'not exist';
        return false;
    }
}



function validateForm(index) {

    if (validateName(nameitems[index].value, index) 
    && validateSelect(categories[index].value, index) 
    && validateImage(images[index], index)) {
        return true;
    }
    else 
    {
        return false;
    }
}

function onclickSubmit(i) {
    if (validateForm(i)) {
        let listArray;
        let data = {};
        data.name = nameitems[i].value;
        data.src = images[i].src;
        data.select = categories[i].value;
        let getLocalstore = localStorage.getItem("ListInfo");
        if (getLocalstore == null) {
            listArray = [];
        }
        else {
            listArray = JSON.parse(getLocalstore);
        }
        if (i == 0) {
            listArray.push(data);
        }
        else {
            listArray[i - 1] = data;
            document.getElementsByClassName("btn-edit")[i-1].classList.remove("submit");
            categories[i].style['pointer-events'] = 'none';
            nameitems[i].style['pointer-events'] = 'none';
        }
        localStorage.setItem("ListInfo", JSON.stringify(listArray));
        Showdata();
    }
}

// add event submit for btn submit
btn_submit[0].addEventListener("click", function() {
    onclickSubmit(0);
    if(validateForm(0))
    {
        nameitems[0].value="";
        categories[0].value = "No selected";
        images[0].removeAttribute("src");
    }
})



function Showdata() {
    let listArray;
    let getLocalstore = localStorage.getItem("ListInfo");
    if (getLocalstore == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalstore);
    }
    let newtrtag = header;
    listArray.forEach((element, index) => {
        newtrtag += `<tr>
        <td>${index + 1}</td>
        <td>
            <input class="nameitems" type="text" value = "${element.name}" onchange="validateName(nameitems[${index + 1}].value,${index + 1})">
            <span class="nameCheck"></span>
        </td>
        <td >
            <select class= "listselect" disabled onchange="validateSelect(categories[${index + 1}].value, ${index + 1})">
                <option value="No selected" selected>No selected</option>
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
                <option value="Category 3">Category 3</option>
            </select>
            <span class="categoryCheck"></span>
        </td>  
        <td>
            <input type="button" onclick="choosefilebtn(${index + 1})" class="btn-choosefile" value="Choose file"></input>
            <img class="img" src=${element.src} alt="">
            <input class="files" type="file" hidden onchange="validateImage(images[index], index)">
            <span class="imageCheck"></span>
        </td>
        <td>
            <input type="button" class="btn-edit" value="Edit" onclick="Edit(${index + 1})"></input>
            <input type="button" class="btn-delete" value="Delete" onclick="Delete(${index})"></input>
        </td>    
    </tr>`
    });
    table.innerHTML = newtrtag;
    for (let i = 0; i < listArray.length; i++) {
        document.getElementsByClassName("listselect")[i + 1].value = listArray[i].select;
    }
}

function Edit(index) {
    let btn_delete = document.getElementsByClassName("btn-delete")[index - 1];
    let btn_edit = document.getElementsByClassName("btn-edit")[index - 1];
    if (btn_edit.classList.item(0) == "btn-edit" && !btn_edit.classList.item(1)) {
        btn_edit.classList.add("submit");
        btn_delete.classList.add("Cancel");
        btn_delete.value = "Cancel";
        btn_edit.value = "Save";
        document.getElementsByClassName("nameitems")[index].style['pointer-events'] = 'auto';
        document.getElementsByClassName("listselect")[index].disabled = false;
        btn_choose[index-1].style.display = "block";
        change_image();
    }
    else {
        onclickSubmit(index);
    }
}

function Delete(index) {
    let btn_delete = document.getElementsByClassName("btn-delete")[index];
    if(btn_delete.classList.item(1))
    {
        Showdata();
    }
    else{  
        let getLocalStorageData = localStorage.getItem("ListInfo");
        listArray = JSON.parse(getLocalStorageData);
        listArray.splice(index, 1);
        localStorage.setItem("ListInfo", JSON.stringify(listArray));
        Showdata()
    }
}
