import { Response } from "express";

export default function createAccessTokenCookie(res: Response, token: string) {
    if(!res || !token) return null;
    const cookie = res.cookie("access_token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        maxAge: 60 * 60 * 250
    });
    return cookie;
}