// max는 출력해야 할 최대 라인 수
function printStar(max) {

    // 반복문이 중첩되었을 때 바깥의 반복문은 행을 의미.
    // max는 행의 수를 의미하므로 바깥 반복문의 조건식에서 활용해야한다.
    for (let i=0; i<max; i++) {
        let star = "*";
        
        // 별을 역순으로 출력하기 위한 j값의 조건식을 구성해야 한다.
        for (let j=0; j<max-i; j++) {
            star += "*";
        }

        console.log(star);
    }
}

printStar(5);