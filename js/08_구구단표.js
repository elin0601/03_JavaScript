function createTable() {
    const start = Number(document.getElementById("start").value);
    const end = Number(document.getElementById("end").value);

    const theadRow = document.getElementById("thead-row");
    const tBody = document.getElementById("tbody");

    theadRow.innerHTML="";
    tBody.innerHTML="";

    for(let dan = start ; dan <= end ; dan++){
        theadRow.innerHTML += `<th>${dan} 단</th>`;
      }

      tBody.innerHTML="";
    
    for( let num= 1; num <=9;  num++){
        let str ="<tr>";
        for(let dan = start ; dan <= end ; dan++) {
        str.innerHTML += `<td>${dan} x ${num} = ${dan * num}</td>`;

        }
        str += "</tr>";
        tBody.innerHTML += str;
    }
}