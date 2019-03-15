let i=0
function a(){
    while(i<10){
        i+=1;

    }
}
function b(){
    a();

}
b();
console.log(i);

/**
 * 客户端附加上才运行
 * node --inspect-brk cmd.js
 * 
 * 
 *help
 */