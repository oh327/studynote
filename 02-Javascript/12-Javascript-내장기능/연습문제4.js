/** 랜덤함수 */
function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

/** 0개의 원소를 갖는 배열 */
const lotto = [];

// 6회의 반복을 수행
for (var i=0; i<6; i++) {
    // 중복되지 않는 숫자가 몇 번째에 생성될지 알 수 없으므로 무한반복
    while (true) {
        // 랜덤한 숫자
        const rnd = random(1, 45);
        
        // rnd값이 lotto 배열안의 원소와 중복되지 않는다면?
        if (!lotto.includes(rnd)) {
            //console.log(" >>> %d는 중복되지 않음 :::", rnd);
            lotto.push(rnd);
            break;
        } else {
            //console.log(" >>> %d는 중복됨 :::", rnd);
        }
    }
}

console.log(lotto);