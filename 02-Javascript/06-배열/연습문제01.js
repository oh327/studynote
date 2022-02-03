const check_list = [true, false, false, true, false]; // 1, 0, 0, 1, 0
console.log("before -->" + check_list);

// true를 false로, false를 true로 저장하기
// boolean값을 반전하기 위해서는 NOT 연산자 "!"를 사용해야 한다.
// ex) !true --> false, !false --> true
for (let i=0; i < check_list.length; i++) {
    check_list[i] = !check_list[i];
}

console.log("after -->" + check_list);  // 0, 1, 1, 0, 1