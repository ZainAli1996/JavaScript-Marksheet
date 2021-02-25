//JavaScript Marksheet

var percent = +prompt("Enter You Percentage")
if (percent >= 80 && percent <= 100){
    alert("Your GRADE is A+, Excellent!")
}else if(percent >= 70 && percent <= 80){
    alert("Your GRADE is A, Very Good!")
}else if(percent >= 60 && percent <= 70){
    alert("Your GRADE is B, Good!")
}else if(percent >= 50 && percent <= 60){
    alert("Your GRADE is C, Nice")
}else if(percent >= 40 && percent <= 50){
    alert("Your GRADE is D, Fair")
}else if(percent >= 33 && percent <= 40){
    alert("Your GRADE is E, Do More Hardwork")
}else if(percent >= 0 && percent <= 33){
    alert("Your GRADE is F, and You are FAILED")
}else{
    alert("Please Enter Correct Percentage")
}