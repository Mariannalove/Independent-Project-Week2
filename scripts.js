var daysOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
console.log(maleNames[3])
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
    var male=document.getElementById('male')
    console.log(male)
    var female=document.getElementById("female")
    console.log(female)
    
    var day =new Date (yearSection + "/" + monthsSection + "/"+ daysSection);
    //alert (day);
    var birthDay=day.getDay();
    console.log (birthDay+ " the day")

    if (monthsSection<1 || monthsSection>12){
        alert("Months Should be between 1 to 12!")
    }else if(daysSection<1 || daysSection>31){
        alert("Days should be between 1 -31")
    }else if(male.checked){
        alert("You were born on " +daysOfWeek[birthDay]+ " and your akan name is " + maleNames[birthDay]);
       
     } else if (female.checked){
        alert("You were born on " +daysOfWeek[birthDay]+ " and your akan name is " + femaleNames[birthDay]);

    }
}