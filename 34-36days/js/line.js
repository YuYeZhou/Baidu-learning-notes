function excertLine(){ 


 var maxValue = Math.max.apply(null,dataChart)

 var height = Math.ceil(maxValue/100)*100
 var body = document.querySelector('body')
 
 var myCanvas = document.querySelector('#mycanvas')
 myCanvas.height = 550
 myCanvas.width = 800
 
 var ctx = myCanvas.getContext("2d")
 var dotsArr = []
 for(let j in dataChart) {
     var obj = {};
     obj['x'] = 50+30+60*j
     obj['y'] = 50 + height - dataChart[j]
     dotsArr.push(obj)
 }
 
 // console.log(dataChart);
 
 
 function drawBorder() {  
     ctx.beginPath();  
     ctx.moveTo(50,50);  
     ctx.lineTo(50,50+height);  
     ctx.lineTo(50+720,50+height);  
     ctx.strokeStyle = '#565656'
     ctx.stroke(); 
 }  
 
 
 function drawDivide() { 
     for(let i=0; i<height; i+=100){
         ctx.beginPath();
         ctx.moveTo(50,50+i);
         ctx.lineTo(50+720,50+i);
         ctx.strokeStyle = '#d4d4d4'
         ctx.stroke(); 
     }  
 }  
 
 
 
 function drawDot() {    
     for(let i in dotsArr){
         ctx.beginPath();
         ctx.arc(dotsArr[i]['x'],dotsArr[i]['y'],5,0,2*Math.PI)
         ctx.fillStyle = '#37a2da';
         ctx.fill(); 
     }
 }
 
 
 function drawLine() {
     ctx.beginPath();  
     ctx.moveTo(dotsArr[0]['x'],dotsArr[0]['y']);  
     for(let i =1; i<dotsArr.length; i++){
         ctx.lineTo(dotsArr[i]['x'],dotsArr[i]['y'])
     }       
         ctx.strokeStyle = '#37a2da';
         ctx.stroke(); 
    
     ctx.strokeStyle = '#37a2da'
     ctx.stroke(); 
 }


   
     
    console.log(dataChart);
    console.log(dotsArr);
    
    drawBorder()
    drawDivide()
    drawDot()
    drawLine()
 }