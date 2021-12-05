import { Router } from "express";

import { HTMLToMarkDownController } from "./controllers/HTMLToMarkDownController";

const router = Router();

const htmlToMarkDownController = new HTMLToMarkDownController();

router.post("/", htmlToMarkDownController.handle);

export { router };
