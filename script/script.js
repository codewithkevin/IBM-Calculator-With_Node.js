function BMI() {
    var h=document.getElementById('h').value;
    var w=document.getElementById('w').value;
    var bmi=w/(h/100*h/100);
    var bmio=(bmi.toFixed(2));


    if(bmio < 45){
        document.getElementById("result").innerHTML="Your BMI is " + bmio + " you are under weight";
    }

    else if(bmio > 45 && bmio < 75){
        document.getElementById("result").innerHTML="Your BMI is " + bmio + " you are on diet";
    }

    else if(bmio >= 75 && bmio < 90){
        document.getElementById("result").innerHTML="Your BMI is " + bmio + " you have weight";
    }

    else{
        document.getElementById("result").innerHTML="Your BMI is " + bmio + " you are over wight";
    }

    
}