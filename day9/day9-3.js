function solution(rsp) {
  const rspArray = rsp.split('');
  return rspArray.map((key) => ANSWER[key]).join('');
}

const ANSWER = {
  2: 0,
  0: 5,
  5: 2,
};

console.log(solution('205'));
