const lottoBtn = document.querySelector("#lottoBtn");
const container = document.querySelector("#container");
const numContainer = document.querySelector(".numContainer");

/*  
    - 생성 버튼 클릭 시 이전 로또판 삭제 -> 새 로또판 생성
    - 최대 6개 선택
    - 선택 취소 가능
*/

lottoBtn.addEventListener("click", e=>{
    numContainer.innerHTML = "";
}); 
