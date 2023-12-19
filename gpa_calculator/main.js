function calculate(){
   var m1= parseInt(document.getElementById("bookone").value);
   var m2= parseInt(document.getElementById("bookTwo").value);
   var m3= parseInt(document.getElementById("bookthree").value);
   var m4= parseInt(document.getElementById("bookfour").value);
   var m5= parseInt(document.getElementById("bookfive").value);
   if(m1>100 || m2>100 || m3>100 || m4>100 || m5>100){
    alert("Please enter the correct marks");
   }
   else{
    var obtain = m1+m2+m3+m4+m5;
    document.getElementById('obtain').innerHTML= obtain;
    var per = obtain/500*100;
    document.getElementById("percent").innerHTML= per;
    if(m1>40 && m2>40 && m3>40 && m4>40 && m5>40){
        document.getElementById('Remarks').innerHTML= "Pass";
    }
    else{
        document.getElementById('Remarks').innerHTML= "Fail";
    }
   if (per>=80){
    document.getElementById("grade").textContent= "A";
   }
   else if (per>=70){
    document.getElementById("grade").textContent= "B";
   }
   else if (per>=60){
    document.getElementById("grade").textContent= "c";
   }
   else if (per>=50){
    document.getElementById("grade").textContent= "D";
   }
   else if (per>=40){
    document.getElementById("grade").textContent= "E";
   }
   else{
    document.getElementById("grade").textContent= "F";
   }
   }
 
}