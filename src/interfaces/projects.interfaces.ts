import { iUser } from "./users.interfaces";

export interface iProjectRequest {
  title: string;
  author: string;
  description: string;
  github: string;
  vercel: string;
}

export interface iProject {
  title: string;
  author: string;
  description: string;
  github: string;
  vercel: string;
  createdAt: Date;
  updatedAt: Date;
  user: iUser;
}

export interface iProjectUpdate {
  title: string;
  author: string;
  description: string;
  github: string;
  vercel: string;
  createdAt?: Date;
  updatedAt?: Date;
}
