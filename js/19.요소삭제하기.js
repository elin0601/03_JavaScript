
const addBtn = document.querySelector("#addBtn");
const calBtn = document.querySelector("#calBtn");
const area = document.querySelector(".area");

addBtn.addEventListener("click", ()=>{
  const container = document.createElement("div");

  container.classList.add("container");
  area.append(container);

  const input = document.createElement("input");
  input.type = "number";
  input.classList.add("input");

  container.append(input);   




    /* 1.로딩, 이벤트 발생 등 시점에 따라서 선택되는 요소가 달라진다
       2. x버튼 처럼 새롭게 만들어지는 요소(동적 추가 요소)한테 클릭 이벤트를
       추가해줘야 한다. */
    const span = document.createElement("span");
  
  
    span.classList.add("remove-row");
  
  
    span.innerHTML = "&times;";
  
  
    span.addEventListener("click", e => {
  
      
        const parent = e.target.parentElement;
      
      
        parent.remove();
    });

  container.append(span);


});



calBtn.addEventListener("click", ()=>{

  const numbers = document.querySelectorAll(".input");

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i].value);
  }

  alert("결과 : " + sum);
});