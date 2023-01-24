import { AppDataSource } from "../../data-source";

import { AppError } from "../../errors";
import { projectUpdateSchema } from "../../schemas/user.schemas";
import { Project } from "../../entities/projects.entity";
import { iProjectUpdate } from "../../interfaces/projects.interfaces";

export const updateProjectService = async (
  paramsUserId: string,
  userData: iProjectUpdate
): Promise<iProjectUpdate> => {
  const projectRepository = AppDataSource.getRepository(Project);
  const projectToUpdate = await projectRepository
    .findOneByOrFail({
      id: paramsUserId,
    })
    .catch(() => {
      throw new AppError("Project not found", 404);
    });

  const updatedProject = projectRepository.create({
    ...projectToUpdate,
    ...userData,
  });

  await projectRepository.save(updatedProject);

  const projectUpdatedReturn = await projectUpdateSchema.validate(
    updatedProject,
    {
      stripUnknown: true,
    }
  );

  return projectUpdatedReturn;
};
