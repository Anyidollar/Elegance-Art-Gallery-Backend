import express from "express";
import { CreateArt, artworksOnAuction, artworksOnSale, getAllArtworks, getArtByArtist, getOneArt } from "../controller/artController";
import { artistAuth } from "../middlewares/artistAuth";

const router = express.Router();

router.post("/create-art", artistAuth, CreateArt);
router.get("/getAll", getAllArtworks);
router.get("/getOne/:id", getOneArt);

// Get all sales
router.get("/sales", artworksOnSale);
router.get("/auction", artworksOnAuction);

// Get all artworks by a particular artist
router.get("/artist-artworks", artistAuth, getArtByArtist);

export default router;
