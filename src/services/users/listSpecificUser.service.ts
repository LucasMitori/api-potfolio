import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

export const listProfileUserService = async (paramsUserId: string) => {
  const profileUser = await AppDataSource.getRepository(User).findOne({
    where: {
      id: paramsUserId,
    },
    relations: { project: true },
  });

  return profileUser;
};
