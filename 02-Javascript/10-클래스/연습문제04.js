class Account {

    /** 생성자 */
    constructor(owner, balance) {
        // 문자열 owner; (이름)
        this._owner = owner;
        // 숫자형 balance; (금액)
        this._balance = balance;
    }

    get owner() {
        return this._owner;
    }

    set owner(param) {
        this._owner = param;
    }

    get balance() {
        return this._balance;
    }

    set balance(param) {
        this._balance = param;
    }

    // 인자인 금액을 저축하는 메소드
    deposit(amount) {
        this.balance += amount;
    }

    // 인자인 금액을 인출(리턴)하는 메소드
    withdraw(amount) {
        // 인출 상한 금액은 잔액까지로 하며, 이 경우 이러한 상황을 출력
        if (this.balance < amount) { 
            console.log("잔액이 부족합니다.");
            return;
        }
        this.balance -= amount;
        return amount;
    }
}

const acc = new Account("Hello", 15000);

//Hello의 잔액은 15000원
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);

// ( 저축 ) Hello의 잔액은 20000원
acc.deposit(5000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);

// ( 인출 ) Hello의 잔액은 5000원
acc.withdraw(15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);

// ( 저축 ) Hello의 잔액은 10000원
acc.deposit(5000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);

// ( 인출 ) Hello의 잔액은 10000원
// 잔액이 부족합니다.
acc.withdraw(15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);