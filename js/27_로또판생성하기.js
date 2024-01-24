const createBtn = document.querySelector("#createBtn");
const lottoBoard = document.querySelector("#lottoBoard");

// #createBtn 버튼 클릭 시
// #lottoBoard에 div.number 요소 45개 생성해서 추가하기
createBtn.addEventListener("click", () => {

    // #iottoBoard 이전 내용 삭제
    lottoBoard.innerHTML="";

    // div.number 만들어서 추가
  for(let i=0 ; i<45 ; i++){
    const number = document.createElement("div");

    number.classList.add("number");  // 클래스 추가
   
    number.addEventListener("click", e=>{
        
        // active 클래스 없으면 -> 추가
        // active 클래스 있으면 -> 제거

        /* 요소.classList.contains(클래스명) : 요소에(클래스명)이 존재하면 true, 아님 false */

        /* if(e.target.classList.contains("active")){
            e.target.classList.remove("active");
        } else {
            e.target.classList.add("active");
        } */

        //  클릭 전에 화면에 선택된 요소가 5개 이하일 경우
        // 또는
        // 클릭한 요소에 active 클래스가 있을 경우
        const count = document.querySelectorAll(".active").length;

        if(count <= 5 || e.target.classList.contains("active")) {

        
        // console.log(count);

        /* 요소.classList.toggle(클래스명) : 요소에 (클래스명)이 있으면 제거, 없으면 추가*/
        e.target.classList.toggle("active");
        } 
        else{
            alert("6개 까지만 선택할 수 있습니다");
        }
    });



    number.textContent = i +1;

    lottoBoard.append(number);
  }




});