var data=[
    {
        title:'huy',
        seen:123
    },
    {
        title:'huy dai ca',
        seen:456
    },
    {
        title:'duc huy',
        seen:789
    },
    {
        title:'huy vayne',
        seen:100
    }
];
var result=[
];
var input=document.querySelector('input');
var button=document.querySelector('button');
var ul=document.querySelector('ul');
function formatData(data) {
    return `<h1>${data.title}</h1>
            <p> Seen <strong> ${data.seen}</strong></p>
    `;
}
function printResult(arr,container) {
    var listResult = arr.map(text=>{
             return `<li >${formatData(text)}</li>`;
     }).join("\n");
     container.innerHTML=listResult;
}
function isResult(search,data) {
    return data.includes(search);
}
function checkData() {
    var search=input.value;
    for(element of data) {
        if(isResult(search,element.title)) {
            result.push(element);
        }
    }
}
function checkDataMore() {
    var search=input.value;
    var chars=search.split(' ');
    for(element of data) {
        for(char of chars) {
            if(isResult(char,element.title) && !result.includes(element)){
                result.push(element);
            }
        }
    }
}
button.addEventListener('click',event=> {
    checkData();
    checkDataMore();
    printResult(result,ul);
    result=[];
});