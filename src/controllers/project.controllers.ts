import { Request, Response } from "express";
import "dotenv/config";
import { createProjectService } from "../services/projects/createProject.service";
import { iProjectRequest } from "../interfaces/projects.interfaces";
import { listProjectsService } from "../services/projects/listProjects.service";
import { updateProjectService } from "../services/projects/updateProject.service";
import { deleteProjectService } from "../services/projects/deleteProject.service";

export const createProjectsController = async (req: Request, res: Response) => {
  const projectData: iProjectRequest = req.body;
  const userId: string = req.user.id;
  const newProject = await createProjectService(projectData, userId);
  return res.status(201).json(newProject);
};

export const listProjectsController = async (req: Request, res: Response) => {
  const allUsers = await listProjectsService();
  return res.json(allUsers);
};

export const updateProjectController = async (req: Request, res: Response) => {
  const projectata: iProjectRequest = req.body;
  const updatedProject = await updateProjectService(req.params.id, projectata);
  return res.json(updatedProject);
};

export const deleteProjectController = async (req: Request, res: Response) => {
  const response = await deleteProjectService(req.params.id);
  return res.status(204).json(response);
};
