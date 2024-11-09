function solution(spell, dic) {
  //마지막 예제 X
  // spell = spell.sort().join('');
  // return dic
  //   .map((a) => a.split('').sort().join(''))
  //   .find((a) => a === spell) !== undefined
  //   ? 1
  //   : 2;

  //spell의 문자들이 dic의 각 단어에 포함되는 지 확인하고
  //모든 문자가 spell에 있는지를 검사
  //=spell의 각 알파벳이 dic 배열의 요소(word)에 포함되는지 확인
  return dic.some((word) => spell.every((char) => word.includes(char))) ? 1 : 2;
}
console.log(solution(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo']));
console.log(solution(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw']));
console.log(
  solution(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som'])
);
console.log(solution(['a', 'f', 'z'], ['acfz']));
