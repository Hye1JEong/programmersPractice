function getGcd(a, b) {
  return b > 0 ? getGcd(b, a % b) : a;
}
function solution(numer1, denom1, numer2, denom2) {
  const numer = numer1 * denom2 + numer2 * denom1;
  const denom = denom1 * denom2;

  //     let minNum = numer>denom ? denom : numer; // 분자, 분모 중 작은 수 찾기
  //     while(true){
  //         if(numer%minNum === 0 && denom%minNum===0){
  //         //minNum은 최대공약수
  //         return [numer/minNum, denom/minNum];
  //     }
  //     minNum = minNum -1;
  // }

  const gcd = getGcd(numer, denom);

  return [numer / gcd, denom / gcd];
}
console.log(solution(1, 2, 3, 4));
