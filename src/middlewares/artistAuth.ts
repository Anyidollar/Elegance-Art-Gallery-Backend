import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ArtistInstance } from "../model/artistModel";

const jwtsecret = process.env.JWT_SECRET as string;

export async function artistAuth(req: Request | any, res: Response, next: NextFunction) {
	const authorization = req.headers.authorization;
	
	if (!authorization) {
		return res.status(401).json({error:"Not authorized"});
	}

	const token = authorization.slice(7, authorization.length);
	if (!token) {
		return res.status(401).json({ error: "Kindly login or sign up" });
	}
	console.log(token)
	let verified = jwt.verify(token, jwtsecret);

	if (!verified) {
		return res.status(401).json({ error: "Invalid token. You cannot access this route" });
	}
	console.log(verified);

	const { id } = verified as { [key: string]: string };

	//Check if the artist exist
	const artist = await ArtistInstance.findOne({ where: { id: id } });

	if (!artist) {
		return res.status(401).json({ error: "Kindly sign-up as an artist" });
	}

	req.user = verified;
	next();
}
