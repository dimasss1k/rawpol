let calculate = document.getElementById("calculation");
let count = document.getElementById("buttonCountNumber");
calculation = document.getElementById("calculation").value;

document.getElementById("buttonCountPlus").onclick = function() {
  let countPlus = count.value;
  if(+countPlus <= 100){
    count.value++;
    let countPlus = count.value;
    // calculate.innerHTML = calculations(countPlus) ;
  }
}

document.getElementById("buttonCountMinus").onclick = function() {
  let countMinus = count.value;
  if(+countMinus >= 2){
    count.value--;
    let countMinus = count.value;
    // calculate.innerHTML = calculations(countMinus) ;
  }
}

calculations = (count) => {
  return calculation+` * ${count} = ` + (+count)*(+calculation);
}

let calculate1 = document.getElementById("calculation1");
let count1 = document.getElementById("buttonCountNumber1");


document.getElementById("buttonCountPlus1").onclick = function() {
  let countPlus1 = count1.innerHTML;
  if(+countPlus1 <= 100){
    count1.innerHTML++;
    let countPlus1 = count1.innerHTML;
    // calculate.innerHTML = calculations(countPlus) ;
  }
}

document.getElementById("buttonCountMinus1").onclick = function() {
  let countMinus1 = count1.innerHTML;
  if(+countMinus1 >= 2){
    count1.innerHTML--;
    let countMinus1 = count1.innerHTML;
    // calculate1.innerHTML = calculations(countMinus1) ;
  }
}

calculations1 = (count1) => {
  return calculation1+` * ${count1} = ` + (+count1)*(+calculation1);
}

let calculate2 = document.getElementById("calculation2");
let count2 = document.getElementById("buttonCountNumber2");


document.getElementById("buttonCountPlus2").onclick = function() {
  let countPlus2 = count2.innerHTML;
  if(+countPlus2 <= 100){
    count2.innerHTML++;
    let countPlus2 = count2.innerHTML;
    // calculate.innerHTML = calculations(countPlus) ;
  }
}

document.getElementById("buttonCountMinus2").onclick = function() {
  let countMinus2 = count2.innerHTML;
  if(+countMinus2 >= 2){
    count2.innerHTML--;
    let countMinus2 = count2.innerHTML;
    // calculate1.innerHTML = calculations(countMinus1) ;
  }
}

calculations2 = (count1) => {
  return calculation2+` * ${count2} = ` + (+count2)*(+calculation2);
}


let calculate3 = document.getElementById("calculation3");
let count3 = document.getElementById("buttonCountNumber3");


document.getElementById("buttonCountPlus3").onclick = function() {
  let countPlus3 = count3.innerHTML;
  if(+countPlus3 <= 100){
    count3.innerHTML++;
    let countPlus3 = count1.innerHTML;
    // calculate.innerHTML = calculations(countPlus) ;
  }
}

document.getElementById("buttonCountMinus3").onclick = function() {
  let countMinus3 = count3.innerHTML;
  if(+countMinus3 >= 2){
    count3.innerHTML--;
    let countMinus3 = count3.innerHTML;
    // calculate1.innerHTML = calculations(countMinus1) ;
  }
}

calculations3 = (count3) => {
  return calculation3+` * ${count3} = ` + (+count3)*(+calculation3);
}
let calculate4 = document.getElementById("calculation4");
let count4 = document.getElementById("buttonCountNumber4");


document.getElementById("buttonCountPlus4").onclick = function() {
  let countPlus4 = count4.innerHTML;
  if(+countPlus4 <= 100){
    count4.innerHTML++;
    let countPlus4 = count4.innerHTML;
    // calculate.innerHTML = calculations(countPlus) ;
  }
}

document.getElementById("buttonCountMinus4").onclick = function() {
  let countMinus4 = count1.innerHTML;
  if(+countMinus4 >= 2){
    count4.innerHTML--;
    let countMinus4 = count4.innerHTML;
    // calculate1.innerHTML = calculations(countMinus1) ;
  }
}

calculations4 = (count4) => {
  return calculation4+` * ${count4} = ` + (+count4)*(+calculation4);
}

