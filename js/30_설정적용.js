const applyBtn = document.querySelector("#apply-btn");


/* 적용하기 버튼 클릭 시 */
applyBtn.addEventListener("click", ()=>{
  
  /* 특정 시점에 요소/값을 얻어와야 되는데
    전역, 지역 변수 어떤걸로 선언할지 모르겠으면
    일단 다 지역 변수로 선언해라!!
  */

  const box     = document.querySelector("#box");
  const content = document.querySelector("#content");
  const boxWidth = document.querySelector("#box-width");
  const boxHeight = document.querySelector("#box-height");
  const fontColor = document.querySelector("#box-font-color");
  const bgColor = document.querySelector("#box-bg-color");
  const fw = document.querySelector("[name='fw']:checked");
  const row = document.querySelector("[name='align-row']:checked");
  const col = document.querySelector("[name='align-col']:checked");

  // 너비에 작성된 값 #box의 너비로 대입
  box.style.width = boxWidth.value + "px";

  box.style.height = boxHeight.value + "px";

  box.style.fontSize = fs.value + "px";

  box.style.color = fontColor.value;

  box.style.backgroundColor = bgColor.value;


  if(fw !=null) {
    
    box.style.fontWeight = fw.value;
  }
  
  if(row !=null) {

    box.style.justifyContent = row.value;
  }
  
  if(col !=null) {

    box.style.justifyContent = col.value;
  }




  // 출력 문자열에 작성된 값 #box에 내용으로 대입
  box.textContent = content.value;

});

