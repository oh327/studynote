// React 기본 패키지 참조 (필수)
import React from "react";

import MySubComponent from './MysubComponent';

const MyComponent2 = () => {
    // 리턴은 항상 HTML구조를 의미하는 JSX문법이어야 하고,
    // JSX구조는 무조건 단 하나의 태그요소만 반환 해야 함.
    // --> 복잡한 구조는 부모 요소 하나에 모두 포함되어야 한다는 의미
    return (
        <div>
            <h2>Virtual DOM</h2>
            <p>This is React Component</p>

            <MySubComponent />
            <MySubComponent />
            <MySubComponent />
        </div>
    );
};
export default MyComponent2;