import { AppDataSource } from "../../data-source";
import { Project } from "../../entities/projects.entity";
import { AppError } from "../../errors";

export const deleteProjectService = async (
  paramsUserId: string
): Promise<Object> => {
  const projectRepository = AppDataSource.getRepository(Project);
  const userToDelete = await projectRepository
    .findOneByOrFail({
      id: paramsUserId,
    })
    .catch(() => {
      throw new AppError("Project not found", 404);
    });

  await projectRepository.softRemove(userToDelete);

  return {};
};
