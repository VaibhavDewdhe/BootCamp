let age = prompt("Enter the age")


if(isNaN(age))
    alert("Invalid input")
else if(age < 0)
    alert("you are not born yet")
else if(age<14)
    alert("you are a child")
else if(age<18)
    alert("you are a teenager")
else if(age<60)
    alert("you are an adult")
else
    alert("You are a senior citizen")