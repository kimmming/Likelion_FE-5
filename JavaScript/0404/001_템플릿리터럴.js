// 고급 템플릿 리터럴 (React)문법을 한 번 ㅓ더 합니다.

const x = 10;
const y = 20;
console.log(`x값은 ${x}이고 y값은 ${y}이고 두개를 곱 ${x*y}`)
// 템플릿 리터럴 중괄호 안에 연산 넣는 걸 권하지 않는다

// console.log('h
// e
// l
// l
// o');
// 엔더 쳤을 때 개행문자가 들어가 있는 것

console.log(`h
e
l
l
o
`);
//이건 된다


// 단점을 '굳이' 뽑자면..
if (true) {
    if (true) {
        if (true) {
            console.log(`h
            e
            l
            l
            o
            `)
        }
    }
}

// 가독성이 떨어집니다.
if (true) {
    if (true) {
        if (true) {
            console.log(`h
e
l
l
o
`)
        }
    }
}
