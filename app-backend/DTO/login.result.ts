import { PublicUser } from "./public.user";
interface LoginResult {
  user: PublicUser;
  token: string;
}
export type { LoginResult };