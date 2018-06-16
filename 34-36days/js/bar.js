



//绘制一个柱状图(柱状图数据)

function  renderBarGraph(){
    var data = {
        sale: []
    }
     data['sale'] = dataChart

     console.log(data['sale']);
     
    
    var body = document.querySelector('#svg')
    body.innerHTML = null;
    //定义好柱状图绘制区域的高度，宽度，轴的高度，宽度
    var svg = document.createElementNS('http://www.w3.org/2000/svg','svg')
    svg.setAttribute('height','550')
    svg.setAttribute('width','800')
    body.appendChild(svg)
   
    
   

    //拿到柱状图中的最大值Max
    var numMax = Math.max.apply(null, data['sale'])
    //根据Max和你用来绘制柱状图图像区域的高度，进行一个数据和像素的折算比例
    var colHeight = Math.ceil(numMax/100)*100
    console.log(colHeight);
    

    // 纵轴     
    var vAxis = document.createElementNS('http://www.w3.org/2000/svg','line')
    vAxis.setAttribute('x1','50')
    vAxis.setAttribute('y1','50')
    vAxis.setAttribute('stroke','#565656')
    vAxis.setAttribute('stroke-width','1')
    vAxis.setAttribute('x2','50')
    vAxis.setAttribute('y2', 50+colHeight)
    svg.appendChild(vAxis)

    // 横轴
    var heAxis = document.createElementNS('http://www.w3.org/2000/svg','line')
    heAxis.setAttribute('x1','50')
    heAxis.setAttribute('y1',50+colHeight)
    heAxis.setAttribute('stroke','#565656')
    heAxis.setAttribute('stroke-width','1')
    heAxis.setAttribute('x2',50+720)
    heAxis.setAttribute('y2', 50+colHeight)
    svg.appendChild(heAxis)


    //浅横轴
    for(var j = 0; j<colHeight ;j+=100){
        var xAxis = document.createElementNS('http://www.w3.org/2000/svg','line')
        xAxis.setAttribute('x1','50')
        xAxis.setAttribute('y1',50+j)
        xAxis.setAttribute('stroke','#d4d4d4')
        xAxis.setAttribute('stroke-width','1')
        xAxis.setAttribute('x2',50+720)
        xAxis.setAttribute('y2', 50+j)
        svg.appendChild(xAxis)
    }   
   
    //定义好每一个柱子的宽度及柱子的间隔宽度
    
    for(let i in data['sale']){
        bar = document.createElementNS('http://www.w3.org/2000/svg','rect');
        var left = 63+i*60
        var top = colHeight - data['sale'][i]+50
        bar.setAttribute('width','34')
        bar.setAttribute('fill','#37a2da')
        bar.setAttribute('height',data['sale'][i])
        bar.setAttribute('y',top)
        bar.setAttribute('x',left)
        svg.appendChild(bar)
    }
}
