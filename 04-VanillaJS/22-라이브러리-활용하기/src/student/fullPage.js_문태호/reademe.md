# FullPage.js

### fullPage 링크
- [fullPage-홈페이지](https://alvarotrigo.com/fullPage/ko/)

- [fullPage-github](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs)


## 실습파일
### fullPage.js.html
ver 2.9.7
적용 사례. (javascript.fullpage.js)

jquery 버전 적용시에 비해 바닐라JS는 기능이 많이 제한되있는것 같음.

sectionColor, 네비게이션 클릭 이벤트 등 동작이 실행되지 않음.

### fullpage2.js.html
최신 버전 적용 사례.(fullpage.js)

상업용 배포시 라이센스 구매야하 함.


## 사용방법
#### 1) css, js 적용
```html
<link rel="stylesheet" href="fullPage.css">
<script type="text/javascript" src="fullPage.js"></script>
```

#### 2) 아래의 코드를 추가로 입력
```html
<script type="text/javascript">
        new fullpage('#fullpage', {
            autoScrolling: true,
            scrollHorizontally: true,
        })
```
제이슨 형식으로 옵션을 추가한다.

#### 3) HTML 작성
```html
<div id="fullpage">
        <div class="section" id="section1">
            <h1>FullPage.js</h1>
            <br>
            <h2><a
                    href="https://github.com/alvarotrigo/fullPage.js/blob/master/lang/korean/README.md">https://github.com/alvarotrigo/fullPage.js/blob/master/lang/korean/README.md</a>
            </h2>
        </div>
        <div class="section" id="section2">
            <div class="slide" data-anchor="slide1">
                <img src="./img/001.png" alt="">
                <h2>Slide 1</h2>
            </div>
            <div class="slide" data-anchor="slide2">
                <h2>Slide 2</h2>
            </div>
            <div class="slide" data-anchor="slide3">
                <h2>Slide 3</h2>
            </div>
            <div class="slide" data-anchor="slide4">
                <h2>Slide 4</h2>
            </div>
        </div>
        <div class="section" id="section3">
            <h1>Some section3</h1>
        </div>
        <div class="section" id="section4">
            <h1>Some section4</h1>
        </div>
    </div>
```
id="fullpage" 부터 영역이 설정되며
section 클래스로 세로 배열이 먼저 설정 되고

slide 클래스로 가로배열을 추가할 수 있다.

추가 옵션은 실습파일을 참조하거나 홈페이지 메뉴얼을 참고하면 된다.