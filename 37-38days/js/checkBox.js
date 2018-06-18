//生成一组CheckBox( CheckBox容器, CheckBox选项的参数对象或者数组 )        
function check(data,node) {
    //生成全选checkbox的html，给一个自定义属性表示为全选checkbox，比如checkbox-type="all"
    var checkboxAll = document.createElement('input')
    checkboxAll.type = 'checkbox'
    var textAll = document.createTextNode('全选')
    checkboxAll.setAttribute('checkbox-type','all')  
    checkboxAll.value = '全选'
    for(let i in data){
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.value = data[i]['value'];
        var text = document.createTextNode(data[i]['text'])                               
        node.appendChild(checkbox)
        node.appendChild(text)
    }
    node.appendChild(checkboxAll)
    node.appendChild(textAll)
    // 给容器做一个事件委托 
    var checkBoxCol = node.querySelectorAll('input')
    var checkArr = Array.prototype.slice.call(checkBoxCol)
    node.onclick = function(e) {
        e = e||window.event
        var target = e.target               
        if (target.type == 'checkbox'){
            //读取自定义属性
            //全选
            if (target.attributes["checkbox-type"]){
                //做全选对应的逻辑                        
                    target.checked = true
                    for(let i=0; i<checkArr.length-1; i++){
                        if(!checkArr[i].checked){
                            checkArr[i].checked = true;
                        }
                }
            }else{
                //做子选项对应的逻辑
                var count = 0;
                for(let i=0; i<checkArr.length-1; i++){
                    if(checkArr[i].checked){
                        count++
                    }
                }
                switch(count){
                    case 0:
                        target.checked = true;
                        break;
                    case checkArr.length-1:
                        checkboxAll.checked = true;
                        break;
                    default:
                        checkboxAll.checked = false;
                        break;
                }
            }                        
        }
    }
}