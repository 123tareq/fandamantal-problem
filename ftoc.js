function temperatureToCelsius(value){
    const fahenhite= (value-32)/1.8;
    const Celcious= fahenhite.toFixed(2);
    const fixValue= document.getElementById("temptoCel");
    fixValue.innerText=Celcious;
}