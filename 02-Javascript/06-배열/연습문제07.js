// 상품 가격 배열
const price = [209000, 109000, 119000, 109000, 94000];
console.log("상품가격 --> " + price);

// 낮은 가격순으로 정렬 수행
// (공식) 부모 반복문 --> i가 0부터 길이-1보다 작은 동안
//        자식 반복문 --> j가 i+1부터 길이보다 작은 동안
//        i번째와 j번째의 크기를 비교하여 맞교환 처리 수정
for (var i = 0; i < price.length-1; i++) {      // 부모 반복문
    for (var j = i+1; j < price.length; j++) {  // 자식 반복문
        if (price[i] > price[j]) {
            var tmp = price[i];
            price[i] = price[j];
            price[j] = tmp;
        }
    }
}

console.log("낮은 가격 순 --> " + price);