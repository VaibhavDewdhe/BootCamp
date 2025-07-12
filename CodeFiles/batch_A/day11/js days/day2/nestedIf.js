const age = prompt("Age: ")

if (age >= 18) {
    const height = prompt("height: ")
    if (height >= 6) {
        const weight = prompt("weight: ")
        if (weight >= 60)
            alert("Welcome to Indian army")
        else {
            alert("You are not eligible for joining Indian army.")
        }
    }
    else {
        const isJoiningForNonSolderPost = confirm("Are you willing to serve Indian army with a non-soldier post: ")
        if(isJoiningForNonSolderPost){
            alert("Welcome to Indian army")
        }else{

            alert("You are not eligible for joining Indian army.")
        }
    }
}
else {
    alert("You are not eligible for joining Indian army.")
}