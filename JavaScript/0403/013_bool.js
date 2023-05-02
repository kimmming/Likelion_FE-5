
// ****
let x= 5;
let y = 10;
console.log(x > y)


// true, false 값을 and, or 연산했을 경우 반환값은 true, false
let a = true;
let b = false;
console.log(a && b);


// true, false 가 아닌 값을 and, or 연산 했을 경우 단락회로평가를 하게된다
let a2 = 'hello';
let b2 = '';
console.log(a2 && b2)

console.log(Boolean('hello'))
console.log(Boolean(''))
console.log(Boolean([1,2,3]))
console.log(Boolean([]))
console.log(Boolean({'one':10, 'two':20}));
console.log(Boolean({}))
console.log(Boolean(0))
console.log(Boolean(-1))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))

if(undefined){
    console.log('hello')
}

let aa;
if( aa> 100){
    console.log('hello')
}

// 답할 수 있어야 견고한 코드를 짤 수 있다
// 견고한 코드 : 어떠한 상황에도 기능이 무너지지 않는 코드
let aaa;
if( aaa> 100){
    console.log('hello')
}