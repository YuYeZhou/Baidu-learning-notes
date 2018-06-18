function addClick(){
    document.querySelector('tbody').onclick = addType
    // document.querySelector('tbody').onmouseout = removeTyep
    var flag = false

    function addType(e){  
        var arry = []
        e = e||window.event
        var target = e.target
        if (target.tagName == 'TD'&&!flag){
            window.localStorage['history'] = target.innerHTML
            target.innerHTML = `<input id='blank' type = "text" value = ${target.innerHTML}><button id='comfirm'>确认</button><button id = 'cancel'>取消</button>`
            flag = true
            handlerBtn()
        }     
    }

    function handlerBtn (){
        var body = document.querySelector('body')
        var comfirm = document.querySelector('#comfirm')
        var cancel = document.querySelector('#cancel')
        var input = document.querySelector('#blank')
        var parent = comfirm.parentNode
        comfirm.onclick = function(){
            // alert(input.value)
            parent.innerHTML = input.value
            flag = false
        }
        cancel.onclick = function(e){
                parent.innerHTML = window.localStorage['history']               
                flag = false
            }
        body.onclick = function(e){
            // alert(e.target.tagName)
            if (e.target.tagName !== 'TD' && e.target.id !== "blank" && e.target.tagName !== "BUTTON"){
                parent.innerHTML = window.localStorage['history']
                flag = false
            }
        }
        input.onkeydown = function (e) {
            code = e.keyCode
            if(code == 13){
                parent.innerHTML = input.value
                flag = false
            }
            if(code == 27){
                 parent.innerHTML = window.localStorage['history']               
                flag = false
            }
        }
    }
}