



function getTableData(){       
    document.querySelector('tbody').onmouseover = function(e){  
        var arry = []
        e = e||window.event
        var target = e.target
        if (target.parentNode.tagName == 'TR'){
            var tds = target.parentNode.querySelectorAll('td')
            for(let i=0;i<tds.length;i++){
                if(Number(tds[i].innerHTML)==tds[i].innerHTML){
                    arry.push(tds[i].innerHTML)
                }
            }

            dataChart = arry
        }     
        
        // console.log(dataChart);
        

        renderBarGraph()

       

        //画折线图
        excertLine()
       
    } 
}