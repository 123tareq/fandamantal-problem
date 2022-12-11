function MilesToKilomiter(value){
    const mile= value/0.621;
    const fixKilo=mile.toFixed(3);
    const fixkiloMeter= document.getElementById("kiloMetersOutput");
    fixkiloMeter.innerText=fixKilo;

}