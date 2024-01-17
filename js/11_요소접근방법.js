/* 클래스 접근 테스트 */
function classTest() {
    const divs = document.getElementsByClassName("cls-test");

    console.log(divs);

    divs[0].style.backgroundColor = "rgb(114,203,80)";
    divs[1].style.backgroundColor = "rgb(80,13,140)";
    divs[2].style.backgroundColor = "rgb(150,46,94)";

    for (let i = 0; i<divs.length; i++){
        divs[i].innerText = `${i}번째 div 입니다.`
    }
}