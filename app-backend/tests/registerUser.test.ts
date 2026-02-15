import supertest from "supertest";
import app from "../app";
import { registerUser } from "../services/registerUser";
jest.mock("../services/registerUser");
const mockedRegisterUser  = registerUser as jest.MockedFunction<typeof registerUser>;
describe("POST /register", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        });
    it("should register a new user and return 201", async ()=>{
        mockedRegisterUser.mockResolvedValue({ isRegstered: true, message: "User registered successfully" });
        const fakeUser = {
            email: "random@mail.com",
            password: "password123",
            nickname: "randomuser"
        };
        const res = await supertest(app)
            .post("/register")
            .send({email:fakeUser.email, password: fakeUser.password, nickname: fakeUser.nickname});
        expect(res.status).toBe(201);
    })
    it("should return 400 if email is missing", async ()=>{
        const res = await supertest(app)
            .post("/register")
            .send({email: "", password: "password123", nickname: "randomuser"});
        expect(res.status).toBe(400);
        expect(mockedRegisterUser).not.toHaveBeenCalled();
    })
    it("should return 400 if password is missing", async ()=>{
        const res = await supertest(app)
            .post("/register")
            .send({email: "random@mail.com", password: "", nickname: "randomuser"});
        expect(res.status).toBe(400);
        expect(mockedRegisterUser).not.toHaveBeenCalled();
    })
    it("should return 400 if nickname is missing", async ()=>{
        const res = await supertest(app)
            .post("/register")
            .send({email: "random@mail.com", password: "password123", nickname: ""});
        expect(res.status).toBe(400);
        expect(mockedRegisterUser).not.toHaveBeenCalled();
    })
    it("should return 400 if data is missing", async ()=>{
        const res = await supertest(app)
            .post("/register")
            .send({});
        expect(res.status).toBe(400);
        expect(mockedRegisterUser).not.toHaveBeenCalled();
    })
    it("should return 409 if email is already in use", async ()=>{
        mockedRegisterUser.mockResolvedValue({ isRegstered: false, message: "Email already in use" });
        const res = await supertest(app)
            .post("/register")
            .send({email: "random@mail.com", password: "password123", nickname: "randomuser"});
        expect(res.status).toBe(409);
    });
    it("should return 500 if registerUser throws an error", async ()=>{
        mockedRegisterUser.mockRejectedValue(new Error("Database error"));
        const res = await supertest(app)
            .post("/register")
            .send({email: "random@mail.com", password: "password123", nickname: "randomuser"});
        expect(res.status).toBe(500);
    });
});