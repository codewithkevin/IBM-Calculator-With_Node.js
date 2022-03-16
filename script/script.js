function BMI() {
    var h=document.getElementById('h').value;
    var w=document.getElementById('w').value;
    var bmi=w/(h/100*h/100);
    var bmio=(bmi.toFixed(2));


    if(bmio < 45){
        document.getElementById("result").innerHTML="Your BMI is " + bmio + " you are under weight";
    }

    else if(bmio > 45  )

    document.getElementById("result").innerHTML="Your BMI is " + bmio;
}