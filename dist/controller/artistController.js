"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllArtists = void 0;
const express_1 = __importDefault(require("express"));
const artistModel_1 = require("../model/artistModel");
const router = express_1.default.Router();
const getAllArtists = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch all artists
        const artists = yield artistModel_1.ArtistInstance.findAll();
        // Send the response
        res.json({
            message: "All artists retrieved successfully",
            artists,
        });
    }
    catch (error) {
        console.error(error);
        // Handle other errors
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
});
exports.getAllArtists = getAllArtists;
