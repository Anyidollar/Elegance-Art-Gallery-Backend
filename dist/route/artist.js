"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const artistController_1 = require("../controller/artistController");
const router = express_1.default.Router();
router.get("/get-artists", artistController_1.getAllArtists);
exports.default = router;
