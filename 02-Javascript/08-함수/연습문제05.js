function printRevStar(max, current=1) {
    
    // max는 최대 행의 수, current는 현재 행의 수를 의미하므로,
    // 현재 행의 수가 최대 행보다 크다면 처리 중단을 위해 return 함.
    if (current > max) {
        return;
    } else {
        /** 한 줄을 출력하기 위한 코드 구성 */
        let star = "";

        for (let j=0; j<max-current+1; j++) {
            star += "*";
        }

        console.log(star);
        printRevStar(max, current+1);
    }

}

printRevStar(5);