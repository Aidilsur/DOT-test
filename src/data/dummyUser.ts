export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
}

export const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "admin@example.com",
    password: "password123",
    role: "admin",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "user@example.com",
    password: "password123",
    role: "user",
  },
];
