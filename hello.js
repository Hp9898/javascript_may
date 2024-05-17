const desbtn = document.getElementById("desbtn")
const resetbtn = document.getElementById("resetbtn")
const increasebtn = document.getElementById("increasebtn")
const countlabel = document.getElementById("countlabel")


let count = 1;

increasebtn.onclick  = function(){

        count++;
        countlabel.textContent = count
}

desbtn.onclick = function(){
        count--;
        countlabel.textContent = count
}

resetbtn.onclick = function()
{
        count=1;
        countlabel.textContent = count
}