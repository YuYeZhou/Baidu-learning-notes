const tableWarpper = document.querySelector('#table-wrapper')
const theadData = ['商品','地区','1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
var data = sourceData
const regionRadioWrapper = document.querySelector('#region-radio-wrapper');
const productRadioWrapper = document.querySelector('#product-radio-wrapper')

const regionArr =  [{
    value: 1,
    text: "华东"
}, {
    value: 2,
    text: "华南"
},{
    value: 3,
    text: "华北"
}];

const productArr =  [{
    value: 1,
    text: "手机"
}, {
    value: 2,
    text: "笔记本"
},{
    value: 3,
    text: "智能音箱"
}];
