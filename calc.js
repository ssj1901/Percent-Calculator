var numField1 = document.getElementById('numfield1');
var numField2 = document.getElementById('numfield2');
var resultField = document.getElementById('resultfield');
var form = document.getElementById('iswhatpercent');

form.addEventListener('submit', function(event){
   if(!numField1.value || !numField2.value){
       alert("Please enter values in the fields");
   } 
    else{
        var x = parseFloat(numField1.value);
        var y =parseFloat(numField2.value);
        var result = (x/y)*100;
        resultField.innerText = "Result: "+result+"%";
        event.preventDefault();
    }
})