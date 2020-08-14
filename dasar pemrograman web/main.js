
// const initName = document.getElementById("nameAuthor").value;
const btnChangeName = document.getElementById("btnChange");
const name = document.getElementById("nameAuthor");
const btnReset = document.getElementById("resetName");

function changeUserName(){
    const input = document.getElementById("change").value;
    if (input.length == 0) {
        alert('Isi input terlebih dahulu!')
    }

    name.innerText = input;

}

function reset(){
    name.innerText = 'Achmad Fadhil Pratama';
}