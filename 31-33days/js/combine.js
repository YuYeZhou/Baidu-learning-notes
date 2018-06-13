 //合并单元格
 function combine(goat){
    var tbody = document.querySelector('tbody')
    var rowsNum = tbody.rows.length
    var count = 0;
    var cols = tbody.rows[0].cells.length
    for(let i=0; i<rowsNum-1; i++){
        if(tbody.rows[i].cells[goat].innerHTML==tbody.rows[i+1].cells[goat].innerHTML){
            count++
        }else{
            if(count>0){
                for(let j=i-count+1;j<=i; j++){
                    tbody.rows[j].removeChild(tbody.rows[j].cells[goat]);
                    tbody.rows[i-count].cells[goat].rowSpan += 1
                }
                var count = 0;
            }
        }
    }
    if(count>0){
        for(let j=rowsNum-count;j<=rowsNum-1; j++){
            tbody.rows[j].removeChild(tbody.rows[j].cells[goat]);
            tbody.rows[rowsNum-1-count].cells[goat].rowSpan += 1
        }
    }
}