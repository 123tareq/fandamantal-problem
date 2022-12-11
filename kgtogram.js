function weightConverter(valueNum){
    const kg=valueNum*1000;
    const fix =kg.toFixed(3);
    const mainGram= document.getElementById("outputGrams");
    mainGram.innerText=fix;
}