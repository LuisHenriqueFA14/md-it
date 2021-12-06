"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const HTMLToMarkDownController_1 = require("./controllers/HTMLToMarkDownController");
const router = (0, express_1.Router)();
exports.router = router;
const htmlToMarkDownController = new HTMLToMarkDownController_1.HTMLToMarkDownController();
router.post("/", htmlToMarkDownController.handle);
