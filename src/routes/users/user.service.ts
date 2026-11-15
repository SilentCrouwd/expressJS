import type {
  createUserDTO,
  putUserDTO,
  updateUserDTO,
  user,
} from "./user.types.js";
export const USER_DATABASE: user[] = [
  {
    id: 1,
    name: "John Doe",
    age: "25",
    comments: [{ id: 1, userId: 1, text: "This is a comment." }],
  },
  {
    id: 2,
    name: "Jane Smith",
    age: "30",
    comments: [
      { id: 2, userId: 2, text: "This is another comment." },
      { id: 3, userId: 2, text: "This is a third comment." },
      { id: 4, userId: 2, text: "This is another comment." },
      { id: 5, userId: 2, text: "This is a third comment." },
    ],
  },
  { id: 3, name: "Bob Johnson", age: "45", comments: [] },
];

export function getUserById(id: number): user {
  const user = USER_DATABASE.find((user) => user.id === id);
  if (!user) {
    throw new Error(`User with id ${id} not found`);
  }
  return user;
}

export function getUserCommentsById(id: number, skip = 0, take = 20) {
  const user = USER_DATABASE.find((user) => user.id === id);
  const comment = user?.comments.slice(skip, skip + take);
  if (!comment) {
    throw new Error(`No Comment for${user?.name}`);
  }
  return comment;
}

export function postUser(user: createUserDTO): user {
  const id = Math.floor(Math.random() * 5);
  if (!user.name) {
    throw new Error("There is no Name");
  }
  if (!user.age) {
    throw new Error("Ther is no Age");
  }
  const newUser = {
    id: Number(id),
    name: user.name,
    age: user.age ?? "0",
    comments: [],
  };
  USER_DATABASE.push(newUser);
  return newUser;
}

export function delUser(id: number) {
  const index = USER_DATABASE.findIndex((user) => user.id === id);
  if (index === -1) {
    throw new Error("Id Not found");
  }
  USER_DATABASE.splice(index, 1);
}

export function putUser(id: number, user: putUserDTO) {
  const newUser = getUserById(id);
  if (!user.name || !user.age) {
    throw new Error("Parameter Fehlt ");
  }
  newUser.name = user.name;
  newUser.age = user.age;
  // console.log(newUser);
  return newUser;
}

export function updateUserById(id: number, user: updateUserDTO) {
  const newUser = getUserById(id);
  if (user.name) {
    newUser.name = user.name;
  }
  if (user.age) {
    newUser.age = user.age;
  }
  // console.log(newUser);
  return newUser;
}
