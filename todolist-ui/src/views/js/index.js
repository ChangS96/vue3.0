//防抖
function AAA(fn,delay = 200){
    let timer= 0;
    return function () {
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=> {
            fn.apply(this,arguments);
            timer = 0
        },delay)
    }
}

//节流
 function BBB(fn,delay = 200) {
     let timer = 0;
     return function () {
         if(timer) {
             return 
         }
         timer = setTimeout(()=>{
             fn.apply(this,arguments);
             timer = 0
         },delay)
     }
 }

 var fun = function(){

 };
