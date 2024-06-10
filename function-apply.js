//재귀함수 예시 피보나치 수열 계산
function fibonacci(n) {
    if(n<=1){
      return n;
    }
   return fibonacci(n-1)+fibonacci(n-2)
  }

//filter함수와 callback함수 2의 배수만 남기기
let arr = [1,2,3,4,5]

let new_arr = arr.filter((value)=>value%2==0)

console.log(new_arr)