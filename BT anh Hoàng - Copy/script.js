let inputFile = document.getElementById("inputFile");
let preview = document.getElementById("preview");

function submitForm() {
    let itemName = document.getElementById("nameitem").value;
    let category = document.getElementById("category").value;


}

document.getElementById("submit").addEventListener("click", function() {
    submitForm();
})
let fileTest;
inputFile.addEventListener("change", function(event1) {
    var selectedFile = event1.target.files[0];
    let x = URL.createObjectURL(selectedFile)
    console.log(x);
})