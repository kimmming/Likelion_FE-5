const path = require('path')
// 운영체제별로 상이한 경로 문법을 해결해 절대 경로로 반환하는 역할

module.exports={
    mode:development,
    entry:{
        main:path.resolve('./src/app.js')
    },
    output:{
        filename: '[name].js',
        path: path.resolve('./dist')
    }
}