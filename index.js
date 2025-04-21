// const date = new Date('2025-03-15');
// const timestamp = date.getTime();
// console.log(timestamp);
//TODO: 2025-03-15 ~ 2025-04-16 사이의 날짜가 며칠 차이인지 계산해서 출력하는 코드 작성
//힌트: 1초 =1000ms =>1000, 1분=60초=>60*1000, 1시간=60분=>60*60*1000, 1일=24시간=>24*60*60*1000
//힌트 타임스탬프를 구하는 메소드는 getTime()이다.
const startdate = new Date('2025-03-15');
const enddate = new Date('2025-04-16');
const sTimestamp = startdate.getTime();
const eTimestamp = enddate.getTime();
const result = eTimestamp - sTimestamp;
const resultday = result / (1000 * 60 * 60 * 24);



console.log(
  '\uB450 \uB0A0\uC9DC\uC758 \uCC28\uC774\uB294 '.concat(
    resultday,
    '\uC77C\uC785\uB2C8\uB2E4.',
  ),
);
