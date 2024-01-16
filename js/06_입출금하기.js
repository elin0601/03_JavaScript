/* prompt 사용 연습 */

const amount = [""];                  // 사용자로부터 금액 입력 받음
let balance = 10000;                         // 잔액 기록 변수 (초기값 10000)
const password = '1234';                      // 비밀번호 저장 변수 (초기 비밀번호 1234)

const resultIn = document.getElementById("resultIn");
const resultOut = document.getElementById("resultOut");

// function deposit() {
//     let amount = document.getElementById("amount");
//     if ( amount >=0 ) {
//         const amount = prompt("입금되었습니다");
//     } else {
//         alert("금액을 다시 확인해주세요");
//     }
// }

function deposit() {
    const depositAmount = Number(document.getElementById('amount').value);

    if (!(depositAmount) || depositAmount <= 0) {
        alert("올바른 금액을 입력하세요.");
    }

    balance += depositAmount;
    alert(`${depositAmount}원이 입금 되었습니다. 현재 잔액: ${balance}원`);


}

function withdrawal() {

    const withdrawalAmount = Number(document.getElementById('amount').value);
    const password = prompt("비밀번호를 입력하세요");

    const amount = document.getElementById("amount");

    // 확인 -> 입력한 문자열
    // 취소 -> null

    if(password == null) {
        alert("취소");
    } else {

        // 입력한 비밀번호가 '1234'가 맞는지 확인
        if (password == '1234') {
             alert("비밀번호가 일치");
         
             if (withdrawalAmount > balance) {
                alert("출금 금액이 잔액보다 클 수 없습니다.");
            } else {
                balance -= withdrawalAmount;
                alert(`${withdrawalAmount}원이 출금 되었습니다. 남은 잔액: ${balance}원`);
            }
        }else {
            alert("비밀번호가 일치하지 않습니다.");
        }
    }
    
}



