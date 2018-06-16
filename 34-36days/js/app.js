window.onload = function(){
        
            check(regionArr,regionRadioWrapper)
            check(productArr,productRadioWrapper)

            !function(){
                regionRadioWrapper.querySelectorAll('input')[0].checked = true
                productRadioWrapper.querySelectorAll('input')[0].checked = true
                drawTalbe(regionRadioWrapper,productRadioWrapper,'region','product',regionArr,productArr)
                getTableData()
            }()

         //region-select的change事件
         regionRadioWrapper.onchange = function() {
            //渲染新的表格()
            drawTalbe(regionRadioWrapper,productRadioWrapper,'region','product',regionArr,productArr)    
            exchange()
            combine(0);  
            getTableData()         
        }

        productRadioWrapper.onchange = function() {
            //渲染新的表格()
            drawTalbe(regionRadioWrapper,productRadioWrapper,'region','product',regionArr,productArr)
            exchange()
            combine(0);   
            getTableData() 
        }



        // function getTableData(){   
        //     // var tbody = document.querySelector('tbody')
        //     var arry = []
        //     tbody.onmouseover = function(e){   
        //         e = e||window.event
        //         var target = e.target
        //         if (target.parentNode.tagName == 'TR'){
        //             var tds = target.parentNode.querySelectorAll('td')
        //             for(let i=0;i<tds.length;i++){
        //                 if(Number(tds[i].innerHTML)==tds[i].innerHTML){
        //                     arry.push(tds[i].innerHTML)
        //                 }
        //             }
        //         }
        //         console.log(arry);  
        //     }
            
        // }





        }