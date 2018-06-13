//根据select选项获取数据
function getData(node1,node2,key1,key2,box1,box2) {
    var list = [];
    var renderList = []
    var checkBoxCol1 = node1.querySelectorAll('input')
    for(let i in checkBoxCol1){
        if(checkBoxCol1[i].checked){
            if(!checkBoxCol1[i].attributes["checkbox-type"]){
                var checkText = box1[checkBoxCol1[i].value-1]['text'];                    
                var selectValue = checkText;
                //遍历数据 
                for(let i in data){
                    //向要返回的数据list中添加符合表单所选项的数据
                    if(data[i][key1]==selectValue){  
                        var arr = Object.values(data[i])
                        list.push(arr) 
                    }
                }    
            }
        }
    }
    var checkBoxCol2 = node2.querySelectorAll('input')
    for(let i in checkBoxCol2){
        if(checkBoxCol2[i].checked){
            if(!checkBoxCol2[i].attributes["checkbox-type"]){
                var checkText = box2[checkBoxCol2[i].value-1]['text'];                    
                var selectValue = checkText;
                //遍历数据 
                for(let i in list){
                    //向要返回的数据list中添加符合表单所选项的数据
                    if(list[i][0]==selectValue){  
                        var arr = list[i]
                        renderList.push(arr) 
                    }
                }    
            }
        }
    }
    return renderList
}