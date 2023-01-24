import * as yup from "yup";
import { SchemaOf } from "yup";
import { iProjectRequest } from "../interfaces/projects.interfaces";
import {
  iUserRequest,
  iUserLogin,
  iUserUpdate,
  iUserResponse,
  iUserUpdateReturn,
} from "../interfaces/users.interfaces";

const userRequestSchema: SchemaOf<iUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  isAdm: yup.boolean().notRequired(),
});

const userWithoutPasswordSchema: SchemaOf<iUserResponse> = yup.object().shape({
  id: yup.string().notRequired(),
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  isAdm: yup.boolean().notRequired(),
  bio: yup.string().notRequired().nullable(),
  image: yup.string().notRequired().nullable(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
});

const userLoginSchema: SchemaOf<iUserLogin> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const userUpdateSchema: SchemaOf<iUserUpdate> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  password: yup.string().notRequired(),
  bio: yup.string().notRequired(),
  isAdm: yup.boolean().notRequired(),
  image: yup.string().notRequired(),
});

const userUpdateReturnSchema: SchemaOf<iUserUpdateReturn> = yup.object().shape({
  email: yup.string(),
  id: yup.string(),
  name: yup.string(),
  password: yup.string(),
  bio: yup.string().nullable(),
  image: yup.string().nullable(),
});

const listAllUsersSchema: SchemaOf<iUserResponse[]> = yup.array(
  userWithoutPasswordSchema
);

const projectRequestSchema: SchemaOf<iProjectRequest> = yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
  description: yup.string().required(),
  github: yup.string().required(),
  vercel: yup.string().required(),
});

const projectUpdateSchema: SchemaOf<iProjectRequest> = yup.object().shape({
  title: yup.string(),
  author: yup.string(),
  description: yup.string(),
  github: yup.string().required(),
  vercel: yup.string().required(),
});

export {
  userRequestSchema,
  userWithoutPasswordSchema,
  userLoginSchema,
  userUpdateSchema,
  listAllUsersSchema,
  userUpdateReturnSchema,
  projectRequestSchema,
  projectUpdateSchema,
};
