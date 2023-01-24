import { iProject } from "./projects.interfaces";

export interface iUserRequest {
  email: string;
  password: string;
  name: string;
  isAdm?: boolean;
}

export interface iUserUpdate {
  email?: string;
  password?: string;
  name?: string;
  bio?: string;
  image?: string;
}

export interface iUserUpdateReturn {
  email: string;
  id: string;
  name: string;
  bio: string;
  image?: string;
}

export interface iUserResponse {
  id: string;
  email: string;
  name: string;
  bio: string;
  image?: string;
  isAdm: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface iUserLogin {
  email: string;
  password: string;
}

export interface iUserLoginResponse {
  token: string;
  user: iUserResponse;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  image: string;
  isAdm?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface iProfileUserProjects {
  id: string;
  name: string;
  email: string;
  image: string;
  isAdm?: boolean;
  createdAt: Date;
  updatedAt: Date;
  projects: iProject;
}
