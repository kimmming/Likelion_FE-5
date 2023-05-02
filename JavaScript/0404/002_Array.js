// *****
// array 에서도 const를 사용한다
const array = [10,20,30]
arr[0] = 100
console.log(array)
// array가 가르키고 있는 메모리 주소 a1, 값은 a1 
// array의 값이 변하지 않았다. 메모리 주소가 변하지 않으면 된다
// const는 값의 변화가 안된다고 하지 않았나? // 변경가능, mutable
console.dir(array)

// 문자열(string)
const s = 'hello world'
console.log(s[0])
s[0] = 'i' // 불변, immutable


// arr(*****)
const arr = [10, 20, 30]
arr[0] = 100 // const는 값의 변화가 안된다고 하지 않았나? // 변경가능, mutable
// arr = 100
// arr = [10, 20, 30]
console.log(arr)
console.dir(arr) // 프러퍼티와 메서를 볼 수 있습니다.

// 문자열(string)
const s = 'hello world'
console.log(s[0])
s[0] = 'i' // 불변, immutable


// arr.1 // error
// 숫자로 들어간 값은 대괄호로 호출할 수 있고
// length는 문자입니다. 문자로 입력된 값은 .을찍어서 호출할 수 있습니다.
array[1]
array.length
array['length']

// 배열의 특징
// 1. 배열은 순서가 있다. 배열의 순서를 index, 이 순서로 호출하는 것을 indexing,
//  배열 안의 값을 원소 elements라고 합니다
// Array(100).fill(10)

// 2. 배열에 다른 원시타입과 객체타입을 객체를 포함할 수 있습니다.
const array2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

array2[1][2];

// 0차원, 1차원, 2차원, 3차원, 다차월
const a = 10 // 스칼라
const b = [10,20,30] //벡터
const c= [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
// 메트릭스

const d = [
    [[1,2],[1,2],[1,2]],
    [[1,2],[1,2],[1,2]]
]
// 텐서

const arr1 = [1,2,3];
arr.push(4)
arr.push(5)


// pop
const arr3 = [1, 2, 3, 4, 5]
let lastValue = arr.pop()
arr

// unshift
const myArray1 = ["사과", "바나나", "수박"];
myArray1.unshift("오이", "배");
console.log(myArray1);

// shift
// 1. 앞에서 값을 꺼내고 
// 2. 꺼낸 값을 반환(return) 합니다.
const myArray2 = ["사과", "바나나", "수박"];
// myArray2.shift();
// console.log(myArray2); 

let firstValue = myArray2.shift();
firstValue
// 사과

// pop, shift, unshift, push 에 대해 설명해주세요.

// ||pop은 배열의 마지막 요소를 제거합니다, shift는 배열 첫번째 요소를 꺼내고 꺼낸 값을 리턴합니다. unshift는 배열의 첫번째 요소 앞에 값을 추가합니다. push 배열의 마지막 요소 뒤에 값을 추가합니다||

// method) Array<number>.splice(start: number, deleteCount: number, ...items: number[]): number[] (+1 overload)
// arr.splice(start, deleteCount, items)
const arr4 = [1, 2, 3];
arr.splice(1, 0, 4); // arr에 1번째에, 아무것도 삭제하지 않고, 4를 넣겠다.

const arr5 = [1, 2, 3];
arr5.splice(1, 0, [10, 20, 30]); // arr에 1번째에, 아무것도 삭제하지 않고, [10, 20, 30]를 넣겠다.

const arr6 = [1, 2, 3];
arr6.splice(1, 0, ...[10, 20, 30]); // arr에 1번째에, 아무것도 삭제하지 않고, 10, 20, 30를 넣겠다.

const arr7 = [1, 2, 3];
arr7.splice(1, 0, 10, 20, 30); // arr에 1번째에, 아무것도 삭제하지 않고, 10, 20, 30를 넣겠다.

const arr = [10,20,30,40,50]
const x = [1,2,3]
// 만들고 싶은 값 == [10,1,2,3,20,30,1,2,3,50]

arr.splice(1,0,...x)
arr.splice(6,1,...x)


const arr8 = [10,20,30,40,50]
arr8.splice(2,1,5); //두번째 arr에 1개를 삭제하고 5를 추가
console.log(arr8) // [10,20,5,40,50]

// arr.splice().splice() 메서드 체이닝이 안되는 이유는 splice는 삭제된 값을 반환하기에

const arr9 = [10,20,30,40,50]
arr9.splice(2,2)
// 2번째 인덱스에서 값 2개를 삭제합니다. 삽입되는 값은 없습니다.


const arr10 = [10,20,30,40,50]
arr.splice(1)

const myArray3 = ["apple","banana","cherry","durian"]
console.log(myArray3.slice(1,4))
console.log(myArray3)
myArray3.slice(1)
myArray3.slice(0,100)

/////////////

const arr12 = [1,2,3,4,5]
// arr.forEach(함수)

arr12.forEach(function(item, index){
    console.log(item)
})
// 하나씩 순회를 돌겠다
arr12.forEach(function(item, index){
    console.log(item)
    console.log('hello')
    console.log('world')
})
// 같은 코드1
// arr.forEach(function(item, index){
//     arr2.push(index+1)
// })

// 같은 코드2
// arr.forEach((item, index) => {
//     arr2.push(index+1)
// })

// 같은 코드3(주로 이렇게 실무에서 사용합니다.)
// arr.forEach((item, index) => arr2.push(index+1))

// 같은 코드4(이렇게는 사용하지 않습니다.)
const arr = Array(100).fill(0)
const arr2 = []

function hojun(item, index){
    arr2.push(index+1)
}

arr.forEach(hojun)

arr.forEach(function(item, index){
    arr2.push(index)
})


// 어제 진행했었던 코드
fetch('http://test.api.weniv.co.kr/mall')
    .then(data => data.json())
    .then(data => {
        data.forEach(item => {
            console.log(item.thumbnailImg)
            console.log(item.productName)
            console.log(item.price)
        })
    })

// https://caniuse.com/?search=forEach
// nodeList에서 forEach와 Array에서 forEach는 다릅니다.
// nodeList에서 forEach는 익스플로러를 지원하지 않습니다.


const avengers = ['spiderman', 'ironman', 'hulk', 'thor'];

const newAvengers = [];
avengers.forEach(function (item) {
    newAvengers.push('💖' + item + '💖');
});
console.log(newAvengers)

// map - 데이터를 뽑는 용도 ( 면접 질문에서도 나옴)

const arr13 = [1,2,3,4]
arr13.map(function(x){
    return x ** 2
})
arr13.map(function(item, index){
    return item ** 2
})
arr13.map(x => x **2)

const arr14 = Array(100).fill(0)
//같은 코드
arr14.map((v, i)=> i)
arr14.map(function(v,i){
    return i;
})

// 문자열





// 실무 팁 ***
let tip1 = [1,2,3,4,5]
// console.log(tip1[tip1.length-1])
// 원본 수정 없이[1,2,3,4] 값과 [5]라는 값을 얻어내고 싶을 때
console.log([...tip1].pop())

let tip2 = [...tip2]
console.log(tip2.pop())
console.log(tip2)

let tip3 = [1,2,3,4,5]
let tip4 = [10,20,30,40,50]

console.log([...tip3, 1000, ...tip4])
const tip5 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

tip5 = new Array(10).fill(0)

Math.max(tip5.flat())
// 1차원 배열로 ? 쭉 펴짐
Math.max(...tip5.flat())

const tip6 = [
    [[1,2],[1,2],[1,2],
    [1,2],[1,2],[1,2],
    [1,2],[1,2],[1,2]]
]
tip6.flat()
tip6.flat(1)
tip6.flat(2)
tip6.flat(Infinity) // 다 펼쳐지면 스톱

const tip7 = new Array(10).fill(0)
const tip8 = Array.from('hello world')

'.'.repeat(100).split('.') //권하진 않는다

let tip10 = [1, 2, 3, 4, 5]
console.log([tip10.slice(0, 2), 1000, tip10.slice(2, 5)])
console.log([...tip10.slice(0, 2), 1000, ...tip10.slice(2, 5)])

let tip11 = [1, 2, 3, 4, 5]
tip11.splice(2, 0, 1000)
tip11

// map 하고 다시 
const tip9 = Array(100).fill(0).map((v,i)=> i+1)



const tip12 = [
    {
    "_id": "642ba3980785cecff3f39a8d",
    "index": 0,
    "age": 28,
    "eyeColor": "green",
    "name": "Annette Middleton",
    "gender": "female",
    "company": "KINETICA"
    },
    {
        "_id": "642ba398d0fed6e17f2f50c9",
        "index": 1,
        "age": 37,
        "eyeColor": "green",
        "name": "Kidd Roman",
        "gender": "male",
        "company": "AUSTECH"
    },
    {
        "_id": "642ba39827d809511d00dd8d",
        "index": 2,
        "age": 39,
        "eyeColor": "brown",
        "name": "Best Ratliff",
        "gender": "male",
        "company": "PRISMATIC"
    }
]

// askup
const ages = tip12.map((item)=> item.age)
console.log(ages)
const ages2 = tip12.map((item) => {
    return item.age
});
console.log(ages1, ages2);
// item이 array 하나 













// 마틴이 클린코드에서 주장한 원칙 5개(solid)
// SRP : 단일 책임 원칙(각 클래스(또는 모듈, 오브젝트)는 하나의 정보만 가지게 만들어야 한다)
// OCP : 개방 폐쇠 원칙(확장에는 열려 있으며, 변경에는 닫혀 있어야 한다)
// LSP : 리스코프 치환 원칙(인터페이스의 서브타이핑은 인터페이스에 정의된 형태를 최대한 유지)
// ISP : 인터페이스 분리 원칙(인터페이스는 최소한으로 유지)
// DIP : 의존 관계 역전 원칙(상위 레벨의 모듈이나 인터페이스가 서브 클래스나 타이핑에 영향을 받아서는 안된다)

// ---

// 개발자들이 가장 많이 사용하는 개발 원칙
// KISS : 최대한 단순함을 유지하라
// DRY : 똑같은 기능, 코드를 반복하지 마라
// YAGNI : 그 기능이 필요하기 전까지는 미리 만들지 마라

// ---

// 클린소프트웨어 - 악취
// 경직성 : 프로그램 변경이 어렵다. 원하는 곳만 변경하면 장애가 난다.
// 취약성 : 프로그램 변경시 아무런 연관이 없는 부분에서 장애 발생
// 부동성 : 재사용할 수 있는 컴포넌트로 구분이 어려움
// 점착성 : 개발 환경이 비효율적
// 불필요한 복잡성 : 직접 효용이 없는 구조가 디자인에 포함
// 불필요한 반복 : 단일 추상 개념으로 통합할 수 있는 반복구조 포함
// 불투명성 : 직접 만든 사람이 아닌 다른 사람이 코드를 읽고 이해하기 힘들다

// 작은 효율성에 대해서는, 말하자면 97% 정도에 대해서는 잊어버려라. 섣부른 최적화는 모든 악의 근원이다. - 도널드 커누스

// 패스트캠퍼스 CTO님
// 1. 일단 동작하게 만든 다음 더 좋게 만들어라
// 2. 언제나 발견했을 때보다 깨끗하게 해놓고 캠핑장을 떠나라
// 3. 바퀴를 새로 발명하는 일의 좋은 점은 둥근 바퀴를 얻을 수 있다는 점입니다.