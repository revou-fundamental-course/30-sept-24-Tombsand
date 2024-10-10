function ResetC(){
    document.getElementById("inputC").value = "";
    document.getElementById("prosesC").value = "";
    document.getElementById("outputC").value = "";
}

function ResetF(){
    document.getElementById("inputF").value = "";
    document.getElementById("prosesF").value = "";
    document.getElementById("outputF").value = "";
}

function KonversiCelcius(){
    var suhu = document.getElementById("inputC").value;
    var suhuFloat = parseFloat(suhu);
    if(isNaN(suhuFloat)){
        alert("Input a valid number");
        return;
    }
    var suhuAkhir = (suhu * (9/5)) + 32;
    document.getElementById("outputC").value = suhuAkhir;
    document.getElementById("prosesC").value = suhu+"°C * (9/5) + 32 = "+suhuAkhir+"°F";
}

function KonversiFarenheit(){
    var suhu = document.getElementById("inputF").value;
    var suhuFloat = parseFloat(suhu);
    if(isNaN(suhuFloat)){
        alert("Input a valid number");
        return;
    }
    var suhuAkhir = (suhu - 32) * (5/9);
    document.getElementById("outputF").value = suhuAkhir;
    document.getElementById("prosesF").value = "("+suhu+"°F - 32) * (5/9) = "+suhuAkhir+"°C";
}