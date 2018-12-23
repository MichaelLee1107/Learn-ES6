/*
 * @Author: michaellee 
 * @Date: 2018-12-22 21:22:03 
 * @Last Modified by: michaellee
 * @Last Modified time: 2018-12-22 23:01:27
 */

// new Promise (function(resolve,reject){
//     console.log('start new promise');
//     let timeout = Math.random()*10;
//     console.log('set timer to: ',timeout);
//     setTimeout(function(){
//         if(timeout < 1){
//             resolve('ok');
//         }else{
//             reject('timeout in '+timeout);
//         }
//     },timeout*1000);
// }).then(function(r){
//     console.log('done',r);
// }).catch(function(reason){
//     console.log('Failed',reason);
// })


function multiply(value) {
    let timeout = Math.random() * 10
    console.log('multiply1')
    return new Promise(function (resolve, reject) {
        console.log('timeout: '+timeout*1000);
        setTimeout(resolve, timeout * 1000, value * value);
    });
};


function add(value) {
    let timeout = Math.random() * 10
    return new Promise(function (resolve, reject) {
        console.log('timeout: '+timeout*1000);
        setTimeout(resolve, timeout * 1000, value + value);
    });
};

const p = new Promise(function (resolve, reject) {
    console.log('start new Promise...');
    resolve(10);
});

p.then(multiply)
    .then(add)
    .then(()=>{
        return('rese');
    })
    .then(function (result) {
        console.log('result:' + result);
    })
    .catch(function (r) {
        console.log('done.', r);
    });
