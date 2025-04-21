// const string: string = 'Hello, world!';
// const number: number = 42;
// // const bigInt: bigint = 9007122737482771;
// const boolean: boolean = true;
// const nullType: null = null; //?? 앞쪽 좌항이 널이거나 언디파인인 경우에 우항을 사용
// const undefinedType: undefined = undefined;
// const anyType: any = 'anyType';

// type StringType = string | number; //파스칼 케이스?
// //타입은 파스칼케이스로 작성하고

// const constant: string = 'constant';
// //자바 스크립트 코드는 카멜케이스로 작성하니다.
// console.log(constant);
// enum Role {
//   ADMIN = 'admin',
//   USER = 'user',
//   GUEST = 'guest',
// } //이 자체가 밸류값도 가지게 됌

// const someUserRole: Role = Role.ADMIN;
// console.log(someUserRole);

// const array : [1, 2, 3, 4, 5];
// const object :{[key in string]: string} {
//     name: 'John Doe',
//     age: 30,
//     isEmployed: true,
//     hobbies: ['reading', 'gaming'],
//     address: {
//         street: '123 Main St'
//     },

// };

const func = (arg: string): string => {
  console.log(arg);
  return 'Hello,TypeScript';
};

const result = func('Hello, World!');

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  email?: string;
};

interface User {
  nmae: string;
  age: number;
  isAdmin: boolean;
  email?: string;
}

const userA: User = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  email: 'huny000315@gmail.com',
};

const userB: User = {
  name: 'Emily',
  age: 25,
  isAdmin: false,
  email: undefined,
};
