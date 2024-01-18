// 화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll(".key");


// 특정 요소 X
// 문서(화면 전체)에서 키가 눌러지는걸 감지했을 때
document.addEventListener("keydown", function(e){
    // e.key : 입력된 키

    console.log(e.key);

    let idx;  // 인덱스 값을 저장할 변수

    // 문자열.toLowerCase() : 영어를 모두 소문자로 변경
    // 문자열.toUpperCase() : 영어를 모두 대문자로 변경

    // 입력된 키를 소문자로 바꿔서 일치하는 case 실행ㅂ
    switch(e.key.toLowerCase()){
        case 'q' : idx = 0; break;
        case 'w' : idx = 1; break;
        case 'e' : idx = 2; break;
        case 'r' : idx = 3; break;
        default : return;  // 함수 종료
    }

    // idx 번호와 일치하는 keys 배열의 요소의 배경색을 변경
    keys[idx].style.backgroundColor = "#e76f51"
});

document.addEventListener("keyup", function(e){
    // e.key : 입력된 키

    console.log(e.key);

    let idx;  // 인덱스 값을 저장할 변수

    // 문자열.toLowerCase() : 영어를 모두 소문자로 변경
    // 문자열.toUpperCase() : 영어를 모두 대문자로 변경

    // 입력된 키를 소문자로 바꿔서 일치하는 case 실행ㅂ
    switch(e.key.toLowerCase()){
        case 'q' : idx = 0; break;
        case 'w' : idx = 1; break;
        case 'e' : idx = 2; break;
        case 'r' : idx = 3; break;qwer
        default : return;  // 함수 종료
    }

    // idx 번호와 일치하는 keys 배열의 요소의 배경색을 변경
    keys[idx].style.backgroundColor = "#ffffff"
});

