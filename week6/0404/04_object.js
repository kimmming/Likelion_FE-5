const babaYaga = {
    name: "John Wick",
    age: 53,
    from: "벨라루스",
    askingHim: function(){
        console.log("Yeah, I'm thinking I'm back!");
    },
    0: '0102002',
};

console.log(babaYaga.name)
console.log(babaYaga.age)
console.log(babaYaga['name'])
console.log(babaYaga['age'])
// console.log(babaYaga.0) 에러
console.log(babaYaga[0])
console.log(babaYaga['0'])

// 유사배열객체는 실무에서도 사용하지 않기 때문에 잊어도 된다
const arr = {
    0: 10,
    1: 20,
    2: 30,
    length: 3
}

arr[0]
// 10
arr[1]
// 20
arr[2]
// 30
arr.length
// 3
// 배열이 아니라 유사 배열 객체
// 똑같은 요소로 만들어도 arr가 순회할 때 더 빠르다



const human = {
    name: "hojun",
    age: 53,
    from: "korea",
    askingHim: function () {
        console.log("hello world!");
    },
    0: '01050442903'
};

human.name = 'jun'
human.name
human.askingHim()
delete human.job;

// 다른 언어와 동작방식이 달라 주의해주세요.
console.log('age' in human);
// console.log(20 in [10, 20, 30, 40]);
// console.log('length' in [10, 20, 30, 40]);


const aespa = {
    members: ['카리나', '윈터', '지젤', '닝닝'],
    from: '광야',
    sing: function () {
        return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!"
    }
};

// 별표(**)
console.log(aespa.hasOwnProperty('itzy'));
console.log(aespa.hasOwnProperty('sing'));

// 별표(***)
// 다른 언어는 aespa.keys()와 같은 방식으로 사용합니다.
console.log(Object.keys(aespa)) // 불편한 코드입니다.
console.log(Object.values(aespa)) // 불편한 코드입니다.