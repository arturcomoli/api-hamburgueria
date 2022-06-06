import { Request, Response, NextFunction } from "express";
import { ICreateUser } from "../interfaces/user";
import * as yup from "yup";
import { SchemaOf } from "yup";

export const userCreateSchema: SchemaOf<ICreateUser> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});



export const validateUserCreate =
  (schema: SchemaOf<ICreateUser>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {

      const data = req.body;

      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });

        req.validUser = validatedData;

        next();
      } catch (error: any) {
        return res.status(400).json({
          error: error.errors?.join(", "),
        });
      }
    } catch (error) {
      next(error);
    }
  };