/** 객체를 모듈화 하기 --> 가장 일반적인 방법 */
class helloWorld {
    constructor() {
        console.log("---- HelloWorld의 객체가 생성되었습니다. ----");
    }

    say() {
        console.log("Hello Worold");
    }
}

// 클래스에 대학 객체를 모듈에 추가
module.exports = new helloWorld();