export type user = {
  id: number;
  name: string;
  age: string;
  comments: comment[];
};

export type comment = {
  id: number;
  userId: number;
  text: string;
};

export type createUserDTO = Omit<user, "comments" | "id">;
export type putUserDTO = createUserDTO;
export type updateUserDTO = Partial<createUserDTO>;
