// mockujemy serwis loginByEmail żeby nie dotykać DB
const request = require("supertest");
const app = require("../app").default || require("../app");
const { loginByEmail } = require("../services/loginByEmail");
// mockujemy serwis loginByEmail żeby nie dotykać DB
jest.mock("../services/loginByEmail");
const mockedLoginByEmail = jest.requireMock("../services/loginByEmail").loginByEmail;

describe("POST /login (cookie)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should set access_token cookie and return user on successful login", async () => {
    // Przygotujmy przykładowego usera i token, które zwróci serwis
    const fakeUser = {
      id: "11111111-1111-1111-1111-111111111111",
      email: "marcin@test.pl",
      nickname: "marcin",
    };
    const fakeToken = "signed.jwt.token";

    mockedLoginByEmail.mockResolvedValue({
      user: fakeUser,
      token: fakeToken,
    });

    const res = await request(app)
      .post("/login")
      .send({ email: "marcin@test.pl", password: "123456" });

    expect(res.status).toBe(200);

    // odpowiedź powinna zawierać user w body
    expect(res.body).toHaveProperty("user");
    expect(res.body.user).toMatchObject({ email: "marcin@test.pl", nickname: "marcin" });
    // oraz SET-COOKIE w nagłówkach - Supertest udostępnia je w res.headers['set-cookie']
    const setCookie = res.headers["set-cookie"];
    expect(setCookie).toBeDefined();
    // sprawdźmy, że cookie access_token się pojawi
    const cookieHeader = Array.isArray(setCookie) ? setCookie.join(";") : setCookie;
    expect(cookieHeader).toMatch(/access_token=/);
    // opcjonalnie: upewnij się, że cookie zawiera nasz token (przy debugowaniu)
    expect(cookieHeader).toContain(fakeToken);
  });

  it("should return 401 if loginByEmail returns null (invalid credentials)", async () => {
    mockedLoginByEmail.mockResolvedValue(null);
    const res = await request(app)
        .post("/login")
        .send({ email: "invalid@test.pl", password: "wrongpassword" });
    expect(res.status).toBe(401);});
});