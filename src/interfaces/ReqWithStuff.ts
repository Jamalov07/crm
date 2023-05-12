import { Request } from "express";

export interface ReqWithStuff extends Request {
  stuff: {
    id: number;
    is_active: boolean;
    role_id: number;
  };
}
