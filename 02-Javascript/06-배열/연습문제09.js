// 학생 이름 배열
var student = ["둘리", "도우너", "또치", "희동"];

// 성적표 배열
var grade = [
    [78, 89, 96],   // 0
    [62, 77, 67],   // 1
    [54, 90, 80],   // 2
    [100, 99, 98]   // 3
];

//총점과 평균점수를 저장할 변수
var sum = 0, avg = 0;

/** 총점과 평균 구하기 */
// 학생별 반복 처리
for (let i = 0; i < grade.length; i++) {
    // 학생별 총점은 이 위치에서 변수가 초기화 되어야 한다.
    // 합계를 위한 변수가 이미 선언되어 있으므로 중복선언을 피하기 위해서
    // 기존의 변수를 0 으로 리셋만 한다.
    sum = 0;

    // 각 학생의 과목별 반복처리
    for (let j = 0; j < grade[i].length; j++) {
        sum += grade[i][j];
    }

    // 평균은 학생 한명의 총점을 한명이 응시한 과목수(=배열의 길이)로 나눈다
    avg = sum/grade[i].length;
    // 소수점 둘째자리까지 표현하기
    avg = avg.toFixed(2);

    // student[i]가 학생 한명의 이름, grade[i]는 학생 한명의 점수
    console.log(student[i] + "총점 : " + sum + "점, 평균 : " + avg + "점");
}