window.onload = function(){
        
            check(regionArr,regionRadioWrapper)
            check(productArr,productRadioWrapper)

            !function(){
                regionRadioWrapper.querySelectorAll('input')[0].checked = true
                productRadioWrapper.querySelectorAll('input')[0].checked = true
                drawTalbe(regionRadioWrapper,productRadioWrapper,'region','product',regionArr,productArr)
            }()

         //region-select的change事件
         regionRadioWrapper.onchange = function() {
            //渲染新的表格()
            drawTalbe(regionRadioWrapper,productRadioWrapper,'region','product',regionArr,productArr)    
            exchange()
            combine(0);           
        }

        productRadioWrapper.onchange = function() {
            //渲染新的表格()
            drawTalbe(regionRadioWrapper,productRadioWrapper,'region','product',regionArr,productArr)
            exchange()
            combine(0);    
        }
        }