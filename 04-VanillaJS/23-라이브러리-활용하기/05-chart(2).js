// 데이터 셋
const dataset = [
    { 이름: '철수', 학년: 1, 성별: '남자', 국어: 98, 영어: 82, 수학: 88, 과학: 64 },
    { 이름: '영희', 학년: 2, 성별: '여자', 국어: 88, 영어: 90, 수학: 62, 과학: 72 },
    { 이름: '민수', 학년: 1, 성별: '남자', 국어: 92, 영어: 70, 수학: 71, 과학: 87 },
    { 이름: '수현', 학년: 3, 성별: '여자', 국어: 63, 영어: 60, 수학: 31, 과학: 70 },
    { 이름: '호영', 학년: 4, 성별: '남자', 국어: 120, 영어: 50, 수학: 84, 과학: 88 },
];

// 각 항목을 분할하여 저장하기 위한 배열
const names = [];
const kor = [];
const eng = [];
const math = [];

// 항목 분할
for (let i=0; i < dataset.length; i++) {
    names[i] = dataset[i].이름;
    kor[i] = dataset[i].국어;
    eng[i] = dataset[i].영어;
    math[i] = dataset[i].수학;
}

// 로그 확인
console.log(names);
console.log(kor);
console.log(eng);
console.log(math);

// 그래프가 표시될 캔버스 영역
const mychart1 = document.getElementById("mychart1");
const mychart2 = document.getElementById("mychart2");
const mychart3 = document.getElementById("mychart3");
const mychart4 = document.getElementById("mychart4");
const mychart5 = document.getElementById("mychart5");
const mychart6 = document.getElementById("mychart6");
const mychart7 = document.getElementById("mychart7");

/** 선 그래프 그리기 */
new Chart(mychart1, {
    // 그래프 종류 (line, bar, pie, polarArea, doughnut, scatter)
    type: "line",

    // 데이터 영역
    data: {
        // x축 항목
        labels: names,
        // 데이터 구성
        datasets: [
            // 1번 데이터
            {
                label: "국어", // 데이터 이름
                data: kor, // 데이터 배열
                borderWidth: 1,
                borderColor: "#f60",
            },
            // 2번 데이터
            {
                label: "영어",
                data: eng,
                borderWidth: 1,
                borderColor: "#f0f",
            },
        ],
    },

    // 그래프 옵션
    options: {
        // 그래프의 가로, 세로 비율 유지(기본값=true) -> 부모 div의 넓이에만 맞추고 높이는 무시함
        // false로 설정할 경우 부모의 width, height에 크기를 맞춤
        maintainAspectRatio: false,
    },
});

/** 기본 막대 그래프 그리기 */
new Chart(mychart2, {
    type: "bar",
    data: {
        labels: names,
        datasets: [
            {
                label: "국어",
                data: kor,
                borderWidth: 0.5,

                // 색상 처리 팁: border와 background를 동일한 색상으로 처리하되, border는 불투명, background는 불투명
                // 단일 문자열인 경우 모든 막대가 같으 색상.
                // 데이터 수 만큼 배열로 색상을 나열할 경우 각 막대별로 다른색상
                borderColor: ["rgba(255,99,132,1)", "rgba(54,162,235,1)", "rgba(255,206,86,1)", "rgba(75,192,192,1)", "rgba(153,102,255,1)"],
                backgroundColor: ["rgba(255,99,132,0.2)", "rgba(54,162,235,0.2)", "rgba(255,206,86,0.2)", "rgba(75,192,192,0.2)", "rgba(153,102,255,0.2)"],
            }
        ],
    },
    options: {
        maintainAspectRatio: false,
        // 가로 막대 그래프로 전환(x | y). 막대그래프의 경우만 사용하는 옵션
        indexAxis: "y",
    },
});

/** 다중 막대 그래프 그리기 */
new Chart(mychart3, {
    type: "bar",
    data: {
        labels: names,
        datasets: [
            {
                label: "국어",
                data: kor,
                borderWidth: 0.5,
                borderColor: "rgba(54, 162, 235, 1)",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
            },
            {
                label: "영어",
                data: eng,
                borderWidth: 0.5,
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
            }
        ],
    },
    options: {
        maintainAspectRatio: false,
    },
});

/** 파이 그래프 그리기 */
new Chart(mychart4, {
    type: "pie",
    data: {
        labels: names,
        datasets: [
            {
                label: "국어",
                data: kor,
                borderWidth: 0.5,
                borderColor: ["rgba(255,99,132,1)", "rgba(54,162,235,1)", "rgba(255,206,86,1)", "rgba(75,192,192,1)", "rgba(153,102,255,1)"],
                backgroundColor: ["rgba(255,99,132,0.2)", "rgba(54,162,235,0.2)", "rgba(255,206,86,0.2)", "rgba(75,192,192,0.2)", "rgba(153,102,255,0.2)"],
            }
        ],
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            // 범주에 대한 설정
            legend: {
                position: "left",
            },
            title: {
                display: true,
                text: "학생별 점수 비율",
            },
        }
    },
});

/** Polar Area 그래프 그리기 */
new Chart(mychart5, {
    type: "polarArea",
    data: {
        labels: names,
        datasets: [
            {
                label: "국어",
                data: kor,
                borderWidth: 0.5,
                borderColor: ["rgba(255,99,132,1)", "rgba(54,162,235,1)", "rgba(255,206,86,1)", "rgba(75,192,192,1)", "rgba(153,102,255,1)"],
                backgroundColor: ["rgba(255,99,132,0.2)", "rgba(54,162,235,0.2)", "rgba(255,206,86,0.2)", "rgba(75,192,192,0.2)", "rgba(153,102,255,0.2)"],
            }
        ],
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "left",
            },
            title: {
                display: true,
                text: "학생별 점수 비율",
            },
        }
    },
});

/** 도넛 그래프 그리기 */
new Chart(mychart6, {
    type: "doughnut",
    data: {
        labels: names,
        datasets: [
            {
                data: kor,
                borderWidth: 0.5,
                borderColor: ["rgba(255,99,132,1)", "rgba(54,162,235,1)", "rgba(255,206,86,1)", "rgba(75,192,192,1)", "rgba(153,102,255,1)"],
                backgroundColor: ["rgba(255,99,132,0.2)", "rgba(54,162,235,0.2)", "rgba(255,206,86,0.2)", "rgba(75,192,192,0.2)", "rgba(153,102,255,0.2)"],
            }
        ],
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "left",
            },
            title: {
                display: true,
                text: "학생별 점수 비율",
            },
        }
    },
});

/** 산점도 그래프 그리기 */
new Chart(mychart7, {
    type: "scatter",
    data: {
        labels: kor,
        datasets: [
            {
                label: "국어점수에 따른 영어 점수",
                data: eng,
                borderWidth: 0.5,
                borderColor: "rgba(255,99,132,1)",
                backgroundColor: "rgba(255,99,132,0.2)",
            },
            {
                label: "국어점수에 따른 수학 점수",
                data: math,
                borderWidth: 0.5,
                borderColor: "rgba(54,162,235,1)",
                backgroundColor: "rgba(54,162,235,0.2)",
            },
        ],
    },
    options: {
        maintainAspectRatio: false,
    },
});