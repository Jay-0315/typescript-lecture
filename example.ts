// //TODO:devide라는 함수를 만들고
// //TODO:Item이라고 하는 커스텀 타입을 만들어서
// //TODO: item의 타입에 따라, 그리고 어떤 값인지에 따라
// //TODO:각각의 값을 구분하여 console.log()함수로 구분하여 출력하는 함수를 만들어보세요.
// //? 힌트 : enum 타입과 switch 문 활용

// enum Role {
//   ADMIN = 'ADMIN',
//   USER = 'USER',
//   GUEST = 'GUEST',
// }

// const devide = (role: Role) => {
//   //TODO: switch 문을 활용하여 각각의 role에 따라 다른 메세지를 출력하도록 작성해주세요.
//   switch (role) {
//     case Role.ADMIN:
//       console.log('관리자입니다.');
//       break;
//     case Role.USER:
//       console.log('사용자입니다.');
//       break;
//     case Role.GUEST:
//       console.log('게스트입니다.');
//       break;
//     default:
//       console.log('알 수 없는 역할입니다.');
//       break;
//   }
// };
// devide(Role.USER);

//TODO: SimpleUSer라고 하는 객체 타입을 만들고, 필드는 name(이름),age(나이)
//TODO:logUser라는 함수를 만들어서 simpleUser 타입의 인자를 받고
//TODO:name과 age를 console.log로 출력하는 함수를 만들어보세요
//TODO:최소 세명 이상의 simple 사용자를 만들어서 반복적으로 logUser 함수를 호출하도록 코드를 작성해보세요

// interface SimpleUser {
//   name: string;
//   age: number;
// }

// const users: SimpleUser[] = [
//   { name: 'Alice', age: 28 },
//   { name: 'Bob', age: 32 },
//   { name: 'Morgan', age: 30 },
// ];

// const logUser = (user: SimpleUser) => {
//   console.log(`이름: ${user.name}, 나이: ${user.age}`);
// };

// users.forEach(logUser);
// (element) => {};

// dayjs 를 활용한 날짜 포맷 함수를 만들어야 합니다.
// 함수 이름은 formatDate() 로 하고 Date 타입의 값을 받아와서
// ‘YYYY.MM.DD’ 형태로 날짜가 문자열로 포맷된 값으로 반환하게 되어야 합니다.
// (TS의 타입 부여가 잘 되어야 합니다.)
// 아래 someSchedule 객체의 각 날짜를 formatDate 함수로 포맷된 값으로
// 변경되도록 처리한 후 log로 띄어 확인해보세요.

// import dayjs from 'dayjs';

// const someSchedule = {
//   study: '2025-04-03',
//   election: '2025-06-03',
//   trip: '2025-08-01',
// };

// type Schedule = {
//   study: string;
//   election: string;
//   trip: string;
// };

// const formatDate = (date: Date): string => {
//   return dayjs(date).format('YYYY.MM.DD');
// };

// const formatSchedule = {
//   study: formatDate(someSchedule.study),
//   election: formatDate(someSchedule.election),
//   trip: formatDate(someSchedule.trip),
// };

// // TODO: 날짜 포맷..

// console.log('origin', someSchedule);
// console.log('formatted', formatSchedule);

// //----------------------------------------------------

// const formatDate = (date:Date) =>{
//   const day = dayjs(date); //dayjs 로 타입 변환
//   return day.format ('YYYY.MM.DD')

//   someSchedule.study = formatDAte{//문자열로 변환된 함수
//     new DAte(someSchedule.study),
//   };
// }

// calcTotal() 라는 장바구니에 있는 상품들의 총 가격을 계산하는 함수를 만들어야 합니다.
// 장바구니의 각 상품은 이름, 종류, 가격, 개수 4가지 값이 들어갈 수 있어야 합니다.
// 장바구니에 담긴 각 상품 타입을 정의하고, 장바구니를 인자로 받아서
// 총 상품 가격을 반환하는 calcTotal() 함수를 타입을 적절하게 적용해서 만들어보세요.

// TODO: 장바구니의 각 상품 타입정의하고, cart 배열에도 타입 부여하여 상품을 3개이상 추가
// TODO: calcTotal 함수를 만들고 실행하여 지불해야할 총 금액을 계산하여 total에 저장하여 확인

// enum Category {
//   FRUIT = 'fruit',
//   VEGETABLE = 'vegetable',
//   DAIRY = 'dairy',
//   TABACO = 'tabaco',
// }

// interface Item {
//   name: string;
//   category: string;
//   price: number;
//   counts: number;
// }

// const cart = [
//   {
//     name: 'apple',
//     category: Category.FRUIT,
//     price: 1000,
//     counts: 3,
//   },
//   {
//     name: 'mevuius',
//     category: Category.TABACO,
//     price: 4500,
//     counts: 2,
//   },
//   {
//     name: 'broccoli',
//     category: Category.VEGETABLE,
//     price: 1500,
//     counts: 4,
//   },
//   {
//     name: 'egg',
//     category: Category.DAIRY,
//     price: 3000,
//     counts: 1,
//   },
// ];

// const calcTotal = (cart: Item[]): number => {
//   let total = 0;
//   for (const Item of cart) {
//     total += Item.price * Item.counts;
//     if (Item.category == Category.FRUIT) {
//       total -= Item.price * Item.counts;
//       console.log('쿠다모노와 무료-데스! (果物は無料です！！)');
//     } // -+ 는 좌항에 우항을 더해서 처리한다는 뜻
//   }
//   return total;
// };

// const Total = calcTotal(cart);
// console.log('Total:', Total);

//아이템들을 정형화해서 타입 지정
//키밸류 형성하기
//가격과 갯수는 넘버 타입으로해야 토탈 낼수있음
//사칙연산 이용 해야함
// cart:item [아이템]
//calc total 은 카트 안에 담긴 아이템을 인자로 받아야함

//3. enum 을 사용해서 카테고리 정리
//enum이기에 카테고리 타입
//로직 지정

// fs 모듈과 JSON 데이터 활용에 대한 문제입니다.
// User 인터페이스를 만들고, 인자로 전달되는 user를 JSON 데이터인 users 배열에 추가하여
// users.json 파일로 저장하도록 하세요. fs 모듈은 프로미스 형태의 것을 사용하면 됩니다.
// 한가지 규칙은 user의 id 값이 중복되면 안된다는 것입니다.
// (중복되는 경우 에러 발생하도록 처리)
// 2명 이상의 user 데이터를 추가하고 users.json에 데이터가 추가되어 저장되었는지 확인해보세요.
// 그리고 중복된 id를 가진 user 데이터를 추가 시도해보고 에러가 발생하는지 확인해보세요.

import fs from 'fs/promises';

interface User {
  id: string; // 중복 되면 안됨
  name: string;
  age: string;
  isAdmin: boolean;
}

const saveUser = async (user: User) => {
  // users 초기화
  let jsonString: string;

  try {
    jsonString = await fs.readFile('users.json', 'utf-8');
    console.log(jsonString);
  } catch (error) {
    console.error('error', error);
    jsonString = JSON.stringify({ users: [] });
  }

  const data = JSON.parse(jsonString) as { users: User[] };
  console.log('data', data);

  const userExists = data.users.some((item: User) => item.id === user.id);
  if (userExists) {
    throw new Error('User already exists');
  }

  data.users.push(user);
  console.log('data', data);
  await fs.writeFile('users.json', JSON.stringify(data));
};

const main = async () => {
  const users = [
    {
      id: 'Jeon',
      name: 'Jeon',
      age: '30',
      isAdmin: false,
    },
    {
      id: 'Jinsu',
      name: 'Jinsu',
      age: '34',
      isAdmin: false,
    },
    {
      id: 'Song',
      name: 'Song',
      age: '24',
      isAdmin: true,
    },
    {
      id: 'kim',
      name: 'kim',
      age: '30',
      isAdmin: false,
    },
  ];
  for (let i = 0; i < users.length; i++) {
    await saveUser(users[i]);
  }
};

// 	for (/* 반복문 */) {
// 		await saveUser(/* 유저 저장 */);
// 	}
// };

main();
//   fetch() 함수 사용에 대한 실습 문제입니다.
// jsonplaceholder의 Todo 리스트 API를 사용해서,
// title 값이 velit soluta adipisci molestias reiciendis harum 인
// 데이터의 id 값을 찾고 그 id 값을 console.log로 출력 해보세요.
// API URL: https://jsonplaceholder.typicode.com/todos

// API에서 반환하는 결과 데이터의 JSON 구조를 살펴보고,
// 배열에 포함된 각 Todo 아이템의 interface 타입을 정의하세요.
// 그리고 정의된 Todo의 title 값을 비교해서
// velit soluta adipisci molestias reiciendis harum 와 title이 일치하는 Todo의 id 값을 찾습니다.

// interface Todo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
//   // TODO: API 응답 결과를 확인하여 타입 작성해보기
// }

// const fetchTodos = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const todos = await response.json();
//   // TODO: todos를 fetch() 함수로 받아와서 타입 주입하여 반환
//   return todos as Todo[];
// };
// const todos = await fetchTodos();
// // console.log('todos:', todos);
// const id = todos.find(
//   (item) => item.title === 'velit soluta adipisci molestias reiciendis harum',
// );

// console.log('id', id);
//! console.log('fetchTodos:', fetchTodos);
// const main = async () => {
//   const TODO.title.some()=> item.title ==
//   'velit soluta adipisci molestias reiciendis harum');
//   console.log(item.id)

// TODO: fetchTodos를 통해 반환받은 데이터에서 배열의 todo 중 title 일치 확인하여 id 출력
// console.log('id:', id);
// };

// main();
//
