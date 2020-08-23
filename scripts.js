var daysOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

console.log("Scripts is working")

function submitdetails(){
    var yearSection=document.getElementById("yearSection").value
    console.log( "years number: " + yearSection)
    var monthsSection=document.getElementById("monthsSection").value
    console.log("Months number: " + monthsSection)
    var daysSection=document.getElementById("daysSection").value
    console.log("Days number: " + daysSection)
  
    // var gender=document.getElementById("gender")
    // console.log(gender)
    var male=document.getElementById('male').value
    console.log(male)
    var female=document.getElementById("female").value
    console.log(female)
}