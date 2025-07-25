//capture
const form = document.getElementsByTagName("form")[0];

form.style.border = "1px solid black";
form.style.padding = "10px";
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.width = "300px";
form.style.margin = "auto";


const labels = document.getElementsByTagName("label");

for (let i = 0; i < labels.length; i++) {
    labels[i].style.textTransform = "capitalize"
}

const inps = document.getElementsByTagName("input");

for (let i = 0; i < inps.length; i++) {
    inps[i].style.marginBottom = "10px"
}


const btn = document.getElementsByTagName("button")[0];

btn.style.width = "120px";
btn.style.margin = "auto";
btn.style.border = "1px solid black";

btn.addEventListener("mouseenter", () => {
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
});

btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
});


function isNameValid(e) {
    for (let i = 0; i < e.value.length; i++) {
        let c = e.value[i];

        if (!(isAlpha(c) || c == " ")) {
            alert("Invalid name")
            return;
        }
    }
}



function isEmailValid(e) {
    let val = e.value;
    let atIndex = val.indexOf("@");

    //"@" is present or not it should at index 1 or more than 1
    if (atIndex < 1) {
        alert("Invalid")
        return;
    } else {
        //checking part of email before "@"
        for (let i = 0; i < atIndex; i++) {
            let c = val[i];
            if (!(isAlpha(c) || isDigit(c) || c == "." || c == "-")) {
                alert("invalid")
                return;
            }
        }

        //checking part of email after "@"
        
    }


}

// function isDigit(c) {
//     if (c >= '0' && c <= '9')
//         return true;
//     else
//         return false;
// }


// function isDigit(c){
//     return c >= '0' && c <= '9';
// }


const isDigit = c => c >= '0' && c <= '9';

const isSmallAlpha = c => c >= 'a' && c <= 'z';

const isCapAlpha = c => c >= 'A' && c <= 'Z';

const isAlpha = c => isCapAlpha(c) || isSmallAlpha(c);

const isSpecial = c => !(isAlpha(c) || isDigit(c));
