let name = document.getElementById("name");
let email = document.getElementById("email");

function isNameValid() {
    let val = name.value;

    console.log(val);

    for (let i = 0; i < val.length; i++) {
        if (isDigit(val[i]))
            alert("u cannot have digit in the name");
        else if (isSpecial(val[i]))
            alert("u cannot have special symbol in the name");

    }

}


function isEmailValid() {
    let val = email.value;

    let atIndex = val.indexOf("@");
    if (atIndex < 1) {
        alert("invalid email");
        return;
    }


    for (let i = 0; i < atIndex; i++) {
        if (isSpace(val[i]) || isSpecial(val[i])) {
            if (val[i] == '.')
                return;
            else
                alert("u cannot have special symbol in the name");
            return;
        }
    }


    let dotIndex = val.lastIndexOf(".");


    if ((dotIndex - atIndex) < 4 || (val.length - 1 - dotIndex) < 2) {
        alert("invalid");
        return;
    }

    for (let i = atIndex + 1; i < val.length; i++) {
        if (isSpace(val[i]) || (isSpecial(val[i]) && val[i] != ".") || isDigit(val[i])) {

            alert("u cannot have special symbol in the name");
            return;
        }
    }
}

function isPassValid(e) {
    let val = e.value;

    let p = document.createElement("p");
    p.style.color = "red";
    if (val.length < 8) {
        p.textContent = "invalid password";
        e.after(p);
        return;
    }

    let sm = 0;         //3
    let cap = 0;        //1
    let sp = 0;         //1
    let dg = 0;         //3

    //Pass@123
    for (let i = 0; i < val.length; i++) {
        let c = val[i];
        if (isDigit(c))
            dg++;
        else if (isCapAlpha(c))
            cap++;
        else if (isSmallAlpha(c))
            sm++;
        else
            sp++;

    }

    if (sm < 1 || cap < 1 || dg < 1 || sp < 1){
        alert("invalid password")
        return;
    }


}

function isPassMatching(e){
    if(e.value != document.getElementById("npass").value)
        alert("Both the password are not same")
}
// function isDigit(c) {
//     if (c >= '0' && c <= '9') {
//         return true;
//     } else {
//         return false;
//     }
// }


// function isDigit(c) {
//     return c >= '0' && c <= '9';
// }

const isDigit = c => c >= '0' && c <= '9';

const isAlpha = c => (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z');

const isSpace = c => c == " ";

const isSpecial = c => !(isSpace(c) || isDigit(c) || isAlpha(c));

const isCapAlpha = c => c >= 'A' && c <= 'Z';

const isSmallAlpha = c => c >= 'a' && c <= 'z';

//if the character is neither digit nor alphabet then its a special symbol.