function LengthConverter(valuNum) {
    const meter= valuNum/3.28; 
     const fixValu=  meter.toFixed(3)
     const fixMeter= document.getElementById('outputMeters');
     fixMeter.innerText=fixValu;
  }





