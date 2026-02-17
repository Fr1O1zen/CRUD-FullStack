import  createAccessTokenCookie  from "../services/createAccessTokenCookie";
describe("createAccessTokenCookie", () => {
    it("should create a valid access token", () => {  
        const validToken = "token";
        const res = {
            cookie: jest.fn().mockReturnThis(),
        };
        const cookie = createAccessTokenCookie(res as any, validToken);
        expect(res.cookie).toHaveBeenCalledWith(
            "access_token",
            validToken,
            {
                httpOnly: true,
                sameSite: "lax",
                secure: false,
                maxAge: 60 * 60 * 250
            }
        );
        expect(cookie).toBe(res);
    });
    it("should not create a cookie with an invalid token", () => {
        const invalidToken = "";
        const res = {
            cookie: jest.fn()
        };
        const cookie = createAccessTokenCookie(res as any, invalidToken);
        expect(res.cookie).not.toHaveBeenCalled();  
        expect(cookie).toBe(null);
    });

});