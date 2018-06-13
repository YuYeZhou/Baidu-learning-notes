window.onload = function(){
        
            check(regionArr,regionRadioWrapper)
            check(productArr,productRadioWrapper)

         //region-select的change事件
         regionRadioWrapper.onchange = function() {
            //渲染新的表格()
            drawTalbe(regionRadioWrapper,'region',regionArr)    
            if(exchange()){
                combine(0);
            }else{
                combine(1);
            }
           
        }

        productRadioWrapper.onchange = function() {
            //渲染新的表格()
            drawTalbe(productRadioWrapper,'product',productArr)
            if(exchange()){
                combine(1);
            }else{
                combine(0);
            }
        }



        }