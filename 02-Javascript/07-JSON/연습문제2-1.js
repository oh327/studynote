const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}

for (const key in exam) {
    
    let sum = 0;

    // 각 학생의 과목별 반복처리
    for (const p of exam[key]) {
        sum += p;
    }

    let avg = sum/exam[key].length;

    // student[i]가 학생 한명의 이름, grade[i]는 학생 한명의 점수
    console.log("%s의 총점은 %d점 이고, 평균은 %d점이다.", key, sum, avg);
}