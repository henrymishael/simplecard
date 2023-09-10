 //Function to get current day
 function getCurrentDay() {
    const day = new Date().getDay();
    if(day === 1){
        return 'Monday'
    }
    else if(day === 2){
        return 'Tuesday';
    }
    else if(day === 3){
        return 'wednesday'
    }
    else if(day === 4){
        return 'Thursday'
    }
    else if (day === 5){
        return 'Friday'
    }
    else if (day === 6){
        return 'Saturday'
    }
    else if(day === 0){
        return 'Sunday'
    }
    else{
        return 'Not a number'
    }
 }

 //Function to get current UTC time
 function getCurrentTime(){
    const time = new Date().getUTCMilliseconds()
    return time
    



 }
//Target an HTML element to display the current day
const dayDisplay = document.getElementById("date_holder")

//Target an HTML element to display the current time
const timeDisplay = document.getElementById("time_holder")

//set the innerHTML of the element to the current date and time
dayDisplay.innerHTML = getCurrentDay();

//set the innerHTML of the element to the current time
timeDisplay.innerHTML = getCurrentTime();



