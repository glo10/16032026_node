import express from "express";
const indexRouter = express.Router();
import { getDocumentation } from "../controllers/team-controller.mjs";
indexRouter.get("/", getDocumentation);
export default indexRouter;
