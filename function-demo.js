/*
1. 자바스크립트 함수는 실제 매개변수가 될 수 있다.
2. 자바스크립트 함수는 함수의 변환값이 될 수 있다.
3. 자바스크립트 함수는 할당명령문의 대상이 될 수 있다.
4. 자바스크립트 함수는 동일 비교의 대상이 될 수 있다.
*/
//1
function foo(arg) {
    arg();
}
function bar() {
    console.log('bar');
}
foo(bar);
//2
function foo1(arg1) {
    return arg1;
}
function bar1() {
    console.log('bar1');
}
foo1(bar)();
//3,4
let foo2 = function(arg2){
    return arg2;
};
foo2(2);

/*
1. 기본값 매개변수 default function parameter
2. 나머지 매개변수 Rest parameter
3. arguments 객체
*/
//1
function foo3(arg3=1){
    console.log(arg3);
}
foo3();
//2
function foo4(arg4, ...rest){
    console.log(rest);
}
foo4(1, 2, 3, 4);
//3
function foo5(arg5){
    console.log(arguments);
}
foo5(1, 2, 3, 4);

/* 
1. 함수 선언문
2. 함수 표현식
3. Function 생성자 함수
4. 화살표 함수 표현식
*/
//1
function foo6() {
    console.log('foo6');
}
foo6();
//2
const foo7 = function(){
    console.log('foo7')
};
foo7();
//3
const foo8 = new Function("console.log('foo8')");
foo8();
//4 
const foo9 = ()=>{
    console.log('foo9');
};
foo9();

/* 
1. IIFE (즉시 실행 함수)
2. 재귀함수
3. 중첩함수
4. 콜백함수
*/
//1
(function foo10() {
    console.log('foo');
})();
//2
function foo11(arg11) {
    if (arg11 === 3) return;

    console.log(arg11);
    foo11(arg11 + 1);
}
foo11(1);
//3
function foo12(arg) {
    function bar1() {
        console.log(arg)
    }
    bar1();
}
foo12(1);
//4
function foo13(arg) {
    arg();
}
foo13(() => {
    console.log(1);
})