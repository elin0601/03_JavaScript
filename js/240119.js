const input = document.querySelector("#input1");

const addBtn = document.querySelector("#addBtn");
const calBtn = document.querySelector("#calBtn");
const area = document.querySelector(".area");

addBtn.addEventListener("click", ()=>{
    const container = document.createElement("div");

    container.classList.add("container");
    area.append(container);

    const input = document.createElement("input");
    input.type = "number";

    container.append(input);   

});

calBtn.addEventListener("click", ()=>{

    // 2) 모든 .input-number 얻어오기
    // const numbers = document.getElementsByClassName("input-number");
    const numbers = document.querySelectorAll(".input");
  
    // 3) for문으로 모든 요소 접근하여
    //  작성된 값(value)을 얻어와
    //  숫자로 변경(Number())한 후
    //  합계 저장 변수 sum에 누적
    let sum = 0;
  
    for(let i=0 ; i<numbers.length ; i++){
      sum += Number(numbers[i].value);
    }
  
    //4) for문 끝나면 alert로 결과 출력
    alert("결과 : " + sum); 
  });