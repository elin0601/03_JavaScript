const inputNumber = document.querySelector("#inputNumber");
const numberContainer = document.querySelectorAll(".number");

const resetBtn = document.querySelector("#resetBtn");
const addBtn = document.querySelector("#addBtn");

const numberList = document.querySelector("#numberList");

const record = document.querySelector("#record");

for (let item of numberContainer) {

    item.addEventListener("click", e => {

        if (inputNumber.textContent.length == 10) {
            return;
        }
        inputNumber.textContent += e.target.textContent
    });
}

resetBtn.addEventListener("click", () => {
    inputNumber.textContent = "";
});

addBtn.addEventListener("click", () => {

    const li = document.createElement("li");
    record.append(li);
    
    const textSpan = document.createElement("span");
    textSpan.textContent = inputNumber.textContent;
    inputNumber.textContent = "";
    li.append(textSpan);

    addBtn.addEventListener("click", () => {

        const li = document.createElement("li");

        li.textContent = inputNumber.textContent;
        record.append(li);
        inputNumber.textContent = "";
    });

    const star = document.createElement("button");
    star.classList.add("star");
    star.textContent = "☆"
    li.append(star);
    record.append(li);

    const span = document.createElement("span")
    span.classList.add("remove-row");
    span.innerHTML = "&times;";
    span.addEventListener("click", e => {

        const parent = e.target.parentElement;
        parent.remove();
    });

    li.append(span);
    record.append(li);

    star.addEventListener("click", e => {
        const isFilled = star.classList.contains("filled");

        if (!isFilled) {
            star.textContent="★";
            star.style.color = "orange";

            li.style.color = "red";
            span.style.color = "black";
            star.classList.add("filled");
            
        } else {
            star.textContent="☆";
            star.style.color = "";

            li.style.color="black";
            star.classList.remove("filled");
        }
    });
});



