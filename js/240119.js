const input = document.querySelector("#input1");

const addBtn = document.querySelector("#addBtn");
const calBtn = document.querySelector("#calBtn");
const area = document.querySelector(".area");

addBtn.addEventListener("click", ()=>{
    const container = document.createElement("div");

    container.classList.add("container");
    area.append(container);

    const input = document.createElement("input");
    input.type = "number";

    container.append(input);   

});