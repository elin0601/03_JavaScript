// const box = document.getElementsByClassName("box");
// const input = document.getElementsByClassName("input");

// const btn = document.getElementById("btn");

// // console.log(input);
// function colorButton() {
//     for (let i = 0; i<input.length; i++) {
//         box[i].style.backgroundColor = input[i].value;
//     }
// }

// !!!!!! 요소를 한 번에 여러개 얻어오면 배열 형태로 저장됨 !!!!!!!
// 얻어온 요소를 사용허려면 배열의 index별 요소를 하나씩 꺼내서 사용해야 한다

// ex) boxList.style.color = "red";  // 배열의 글자색을 red 변경 (X)
//    boxList[0].style.color = "blue"; // 0번 인덱스 요소 글자색 blue (O)


const boxList = document.querySelectorAll(".box");
const inputList = document.querySelectorAll(".input");

document.querySelector("#btn").addEventListener("click", function(){

    for (let i =0; i<boxList.length; i++) {
        boxList[i].style.backgroundColor = inputList[i].value;
    }
});

