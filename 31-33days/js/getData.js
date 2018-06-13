//根据select选项获取数据
function getData(node,key,box) {
    var list = [];
    var temp = [];
    var checkBoxCol = node.querySelectorAll('input')
    for(let i in checkBoxCol){
        if(checkBoxCol[i].checked){
            if(!checkBoxCol[i].attributes["checkbox-type"]){
                var checkText = box[checkBoxCol[i].value-1]['text'];                    
                var selectValue = checkText;
                //遍历数据 
                for(let i in data){
                    //向要返回的数据list中添加符合表单所选项的数据
                    if(data[i][key]==selectValue){     
                        temp.push(data[i])
                        var arr = Object.values(data[i])
                        list.push(arr) 
                    }
                }    
            }
        }
    }
    return list
}