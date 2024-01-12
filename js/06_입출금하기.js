/* prompt 사용 연습 */

const amount = [""];                  // 사용자로부터 금액 입력 받음
let balance = 10000;                         // 잔액 기록 변수 (초기값 10000)
const password = '1234';                      // 비밀번호 저장 변수 (초기 비밀번호 1234)

function deposit() {
    
}






function withdrawal() {
    const password = prompt("비밀번호를 입력하세요");

    const amount = document.getElementById("amount")
    let balance = document.getElementById("balance")

    // 확인 -> 입력한 문자열
    // 취소 -> null

    if(password == null) {
        alert("취소");
    } else {

        // 입력한 비밀번호가 '1234'가 맞는지 확인
        if (password == '1234') {
             alert("비밀번호가 일치");
         
        if (balance > resultIn ){
            alert("출금 금액이 잔액보다 클 수 없습니다");

        } else {
            alert(" _원이 출금 되었습니다.  남은 잔액 _원");
        }
        }else {
            alert("비밀번호가 일치하지 않습니다.");
        }
    }
    
}


