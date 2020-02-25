// var offset = new Date().getTimezoneOffset();
// console.log("Offset")
// console.log(offset)
// console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
// keeping the clock running, starts clock 
setInterval(function(){
    var currentTime= new Date (); // object includes date and time
    var hours= currentTime.getHours() // gets hours from currentTime
    var minutes= currentTime.getMinutes() // gets minutes from currentTime
    var seconds= currentTime.getSeconds() // gets seconds 
    var period = "AM"

    if (hours >=12){
        period="PM";
    }
    if (hours >12){
        hours=hou
        r-12;
    }
    if (seconds <10){
        seconds="0"+seconds;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
    var clockTime= hours + ":"+minutes+":"+ seconds
    var clock = document.getElementById('clock');
    clock.innerText=clockTime;
})