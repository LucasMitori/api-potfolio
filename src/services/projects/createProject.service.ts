import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import {
  iProject,
  iProjectRequest,
} from "../../interfaces/projects.interfaces";
import { Project } from "../../entities/projects.entity";
import { User } from "../../entities/user.entity";

export const createProjectService = async (
  projectData: iProjectRequest,
  userId: string
) => {
  const projectRepository = AppDataSource.getRepository(Project);
  const userRepository = AppDataSource.getRepository(User);

  const verifyIfProjectExists = await projectRepository.findOneBy({
    github: projectData.github,
  });

  if (verifyIfProjectExists) {
    throw new AppError("Project already exists", 409);
  }

  const user = await userRepository.findOneBy({
    id: userId,
  });

  const newProject: iProject = projectRepository.create({
    ...projectData,
    user,
  });

  await projectRepository.save(newProject);

  console.log(newProject);

  return newProject;
};
