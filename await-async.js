/*
 * @Author: michaellee 
 * @Date: 2018-12-22 22:21:07 
 * @Last Modified by: michaellee
 * @Last Modified time: 2018-12-22 22:47:09
 */

 function sleep(second){
    return new Promise((resole,reject)=>{
        setTimeout((datas)=>{
            console.log(new Date().getSeconds());
            resole(new Date().getSeconds());
        },second,123);
    });
 };

 function normalFunc(){
     console.log('normalfun');
 }

 async function awaitDemo(){
     try {
        await normalFunc();
        console.log('something, ~~');
        let result = await sleep(2000);
        console.log(result);// 两秒之后会被打印出来
     } catch (error) {
        console.error('err:',error);
     }

 }
 //awaitDemo();

 async function awaitDemo2(){
     //同步执行
    //  await sleep(1000);
    //  await sleep(1000);
    //  await sleep(1000);
    //  await sleep(1000);
     //异步执行
    let a =  sleep(1000);
    let b =  sleep(1000);
    let c =  sleep(1000);
    await Promise.all([a,b,c]);
 };


 awaitDemo2();











 async function basicDemo(){
     return  result = await function random(resole,result){
         setTimeout(resole,2000,123);
     };
    //return '123'
 }
//  basicDemo().then((r)=>{
//     console.log(r)
//  });