let box = document.getElementById("box");
const boxStyle = box.style;
boxStyle.border = "2px solid red";
boxStyle.width = "300px"
boxStyle.margin = "auto";


const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    const inp = document.getElementById("in");
    const val = inp.value;

    let itm = document.createElement("li");

    itm.textContent = val;

    const list = document.getElementById("list");

    list.append(itm);
})


