//渲染新的表格
function drawTalbe(node,key,box) {
    tableWarpper.innerHTML = null;
    //根据表单选项获取数据
    var list = getData(node,key,box)
    list = list.map(item => item.join(',').split(','))
    //渲染表格
    var thead = document.createElement('thead');           
    var tr = document.createElement('tr')
    for(let i in theadData){
        var th = document.createElement('th');
        th.innerHTML = `${theadData[i]}`;
        tr.appendChild(th);
    }  
    thead.appendChild(tr); 
    tableWarpper.appendChild(thead);   
    //渲染tbody
    var tbody = document.createElement('tbody'); 
    for(let i in list){
        var tr = document.createElement('tr');
        list[i].forEach(item => {
            var td = document.createElement('td');
                td.innerHTML = `${item}`;
                tr.appendChild(td);
        });
        tbody.appendChild(tr)
    }
    tableWarpper.appendChild(tbody);
}