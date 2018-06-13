//置换
function exchange(){
    var CheckeBox1 = document.querySelector('#region-radio-wrapper').querySelectorAll('input');
    var CheckeBox2 = document.querySelector('#product-radio-wrapper').querySelectorAll('input')
    var count = 0;
    var step = 0;
    for(let i in CheckeBox1){
        if(CheckeBox1[i].checked){
            count++
        }
    }
    for(let j in CheckeBox2){
        if(CheckeBox2[j].checked){
            step++
        }
    }
    if(count == 1 && step >1){
        var tr = document.querySelector('thead').querySelector('tr')  
        var ths = tr.querySelectorAll('th')
        var node1 = tr.removeChild(ths[1])
        tr.insertBefore(node1,ths[0])
        var tbody =  document.querySelector('tbody')
        var trs = tbody.querySelectorAll('tr')
        for(let k=0;k<trs.length;k++){
            var tds = trs[k].querySelectorAll('td')
            var node2 = trs[k].removeChild(tds[1])
            trs[k].insertBefore(node2,tds[0])
        }        
    }
}