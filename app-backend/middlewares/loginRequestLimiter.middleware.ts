
import { RequestHandler } from 'express';
import {rateLimit, ipKeyGenerator} from 'express-rate-limit';

export const loginRequestLimiter : RequestHandler = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 login requests per windowMs
  message: "Too many login attempts... try again later.",
  keyGenerator: (req : any) => {
    return req.body?.email || ipKeyGenerator(req.ip); // Use the client's email or IP address as the key for rate limiting
  }
});