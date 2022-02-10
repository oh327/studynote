/**
 * 다음 문제를 만족하는 Student 클래스를 작성하시오.
 * 
 * 1) String형의 학과와 정수형의 학번을 프로퍼티로 선언 후 생성자를 통해 주입
 * 2) getter, setter 를 정의
 * 3) sayHello() 메서드를 통해 "나는 OOOO학과 OO학번입니다."를 출력하는 기능을 구현
 */

class Student {
    /** 생성자 */
    constructor(departName, departNumber) {
        // 학과이름
        this._departName = departName;
        // 학번
        this._departNumber = departNumber;
    }

    /** departName에 대한 getter */
    get departName() {
        return this._departName;
    }

    /** departName에 대한 setter */
    set departName(departName) {
        this._departName = departName;
    }

    /** departNumber에 대한 getter */
    get departNumber() {
        return this._departNumber;
    }

    /** departNumber에 대한 setter */
    set departNumber(departNumber) {
        this._departNumber = departNumber;
    }
    
    /** 메세지 출력 메서드 */
    sayHello() {
        console.log("나는 %s 학과 %s학번 입니다.", this.departName, this.departNumber);
    }
}


const stud = new Student("컴퓨터", 202004123);
stud.sayHello();