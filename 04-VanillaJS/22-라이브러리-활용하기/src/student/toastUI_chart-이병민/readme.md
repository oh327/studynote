# 📈 ToastUI - Chart

[(toastUI-Chart)](http://nhn.github.io/tui.chart/latest/)

[(toastUI-Chart-github)](https://github.com/nhn/tui.chart)

#### 실습용 파일

-   barchart.png
    -> 바 차트 그리기

    [파일보기](실습용/barchart.png)

-   boxplotchart.png
    -> 박스플롯 차트 그리기 (주식차트 그릴때 차트)

    [파일보기](실습용/boxplotchart.png)

-   chart_list.png
    data.js.md, options.js.md 파일을 포함해야합니다.

    [파일보기](실습용/chart_list.png)

    <br>
    <hr>
    <br>

### 차트 종류

-   모든 차트 종류를 실행해 볼 수 있습니다.

[**Live**](https://byeongminlee.github.io/study_toastUI/page/chart/chart_list.html)

## 💾 설치 하기

### npm

```sh
$ npm install --save @toast-ui/chart # 최신 버전
$ npm install --save @toast-ui/chart@<version> # 특정 버전
```

### CDN

```html
<link rel="stylesheet" href="https://uicdn.toast.com/chart/latest/toastui-chart.min.css" />
<script src="https://uicdn.toast.com/chart/latest/toastui-chart.min.js"></script>
```

### 소스 파일 다운로드

-   [(https://github.com/nhn/tui.chart/releases)](https://github.com/nhn/tui.chart/releases)

<br>

## 📊 차트 생성

-   el: 차트를 자식요소로 갖는 HTML 요소
-   data: 차트의 기반이 되는 숫자 데이터
-   options: 범례, 정렬, 툴팁 포맷 등 여러 기능을 나타내는 옵션

```javascript
const el = document.getElementById("chart-area");
const data = {
    // 카테고리 -> Y축
    categories: ["서울", "경기", "인천", "세종", "부산", "대구", "광주"],
    // 시리즈 -> name,data 필수 값
    series: [
        {
            name: "1월",
            data: [5000, 3000, 5000, 7000, 6000, 4000, 1000],
        },
        {
            name: "2월",
            data: [3000, 2000, 4000, 5000, 5000, 6000, 2000],
        },
        {
            name: "3월",
            data: [3000, 4000, 3000, 1000, 2000, 4000, 3000],
        },
    ],
    // 서울이 1월에 5000, 2월에 3000, 3월에 3000
};

const options = {
    chart: { title: "코로나 확진자", width: 900, height: 400 },
};

const chart = toastui.Chart.barChart({ el, data, options });
```

<br>

![barChart1 결과](readme_img/barChart1.png)

[**barChart1 Live**](https://byeongminlee.github.io/study_toastUI/page/chart/barChart1.html)

<br>

## 🛠️ 옵션 설정

## stack 옵션

```javascript
const options = {
    chart: { title: "코로나 확진자", width: 900, height: 400 },
    series: {
        stack: true,
    },
};
```

![barChart2 결과](readme_img/barChart2.png)

[**barChart2 Live**](https://byeongminlee.github.io/study_toastUI/page/chart/barChart2.html)

<br>

<br>

### stack 옵션에서 세부 옵션 설정

series.stack을 true == stack.type = 'normal'

```javascript
const options = {
    chart: { title: "코로나 확진자", width: 900, height: 400 },
    series: {
        stack: {
            type: "normal",
        },
    },
};
```

<br>

### stack - 연결선

```javascript
const options = {
    chart: { title: "코로나 확진자", width: 900, height: 400 },
    series: {
        stack: {
            type: "normal",
            connector: true,
        },
    },
};
```

![barChart3 결과](readme_img/barChart3.png)

[**barChart3 Live**](https://byeongminlee.github.io/study_toastUI/page/chart/barChart3.html)

## selectable 옵션

해당 series (데이터) 선택가능

```javascript
const options = {
    series: {
        selectable: true,
    },
};
```

### selectable - eventDetectType

| 타입      | 설명                                                                                                       |
| --------- | ---------------------------------------------------------------------------------------------------------- |
| `point`   | 개별 시리즈 영역에 마우스가 다가가야 탐지. 현재 마우스가 가리키고 있는 포인트를 기준으로 단 한 개만 탐지됨 |
| `grouped` | Y축을 기준으로 값이 같은 모든 데이터가 탐지됨                                                              |

```javascript
const options = {
    chart: { title: "코로나 확진자", width: 900, height: 400 },
    series: {
        selectable: {
            eventDetectType: "grouped", // point
        },
    },
};
```

![barChart4 결과](readme_img/barChart4.png)

[**barChart4 Live**](https://byeongminlee.github.io/study_toastUI/page/chart/barChart4.html)
