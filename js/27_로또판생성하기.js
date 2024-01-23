const lottoBtn = document.querySelector("#lottoBtn");
const container = document.querySelector("#container");
const numContainer = document.querySelector(".numContainer");

/*  
    - 생성 버튼 클릭 시 이전 로또판 삭제 -> 새 로또판 생성
    - 최대 6개 선택
    - 선택 취소 가능
*/
function RandomNumber() {
    return Math.floor(Math.random() * 45) + 1;
}

lottoBtn.addEventListener("click", e=>{
    numContainer.innerHTML = "";
});

for (let i = 0; i < 6; i++) {
    const randomNumber = RandomNumber();

    // Create a new div element for each number
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('number');
    numberDiv.textContent = randomNumber;
}

