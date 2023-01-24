import { AppDataSource } from "../../data-source";
import { Project } from "../../entities/projects.entity";
import { iProject } from "../../interfaces/projects.interfaces";

export const listProjectsService = async (): Promise<iProject[]> => {
  const projectRepository = AppDataSource.getRepository(Project);

  const Allprojects = await projectRepository.find();

  return Allprojects;
};
