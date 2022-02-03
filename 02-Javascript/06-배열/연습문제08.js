// 원본 배열
var arr = [5, 3, 2, 8, 9];
console.log("before --> " + arr);

// 역순 배치 공식
// 1) 배열길이/2 만큼만 반복
// 2) i번째와 길이-i-1 번째를 맞교환

/** 풀이방법(1) */
for (var i = 0; i < arr.length/2; i++) {
    // const j = arr.length-1-i;
    var tmp = arr[i];
    arr[i] = arr[arr.length-1-i];
    //arr[i] = arr[j];
    arr[arr.length-1-i] = tmp;
    //arr[j] = tmp;
}

/** 풀이방법(2) - parseInt */
/*
for (var i = 0; i < parseInt(arr.length/2); i++) {
    const j = arr.length-1-i;
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

console.log("after --> " + arr);
*/