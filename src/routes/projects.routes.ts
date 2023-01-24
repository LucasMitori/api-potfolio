import { Router } from "express";
import { ensureDataValidationMiddleware } from "../middlewares/ensure.dataValidation.middleware";
import { projectRequestSchema } from "../schemas/user.schemas";
import "dotenv/config";
import { ensureAuthorizationMiddleware } from "../middlewares/ensure.authorization.middleware";
import { ensureUserIsAdmin } from "../middlewares/ensure.userIsAdm.middleware";
import { ensureUserExistsMiddleware } from "../middlewares/ensure.userExists.middleware";
import {
  createProjectsController,
  deleteProjectController,
  listProjectsController,
  updateProjectController,
} from "../controllers/project.controllers";

export const projectsRoutes = Router();
projectsRoutes.post(
  "",
  ensureAuthorizationMiddleware,
  ensureDataValidationMiddleware(projectRequestSchema),
  createProjectsController
);

projectsRoutes.get(
  "",
  ensureAuthorizationMiddleware,
  ensureUserIsAdmin,
  listProjectsController
);

projectsRoutes.patch(
  "/:id",
  ensureAuthorizationMiddleware,
  updateProjectController
);

projectsRoutes.delete(
  "/:id",

  ensureUserExistsMiddleware,
  ensureAuthorizationMiddleware,
  deleteProjectController
);
