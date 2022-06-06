import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "./config/passport";
import passport from "passport";


export const userLoggin = async (req: Request, res: Response) => {
    res.send("200")
};

// export const verifyToken = async (req: Request, res: Response) => {
//   const userRepository = getRepository(User);
//   const { authorization } = req.headers;
//   if (authorization) {
//     const [, token] = authorization.split(" ");
//     if (token) {
//       const verifed = jwt.verify(
//         token,
//         process.env.SECRET as string
//       ) as UserPayload;
//       if (verifed.User_id) {
//         const searchUser = await userRepository.findOne({
//           where: {
//             id: verifed.User_id,
//           },
//         });
//         console.log(searchUser)
//         if (searchUser) {
//           const { Email, Name, id, ImagePath } = searchUser;
//           res.json({
//             Email,
//             Name,
//             id,
//             ImagePath
//           });
//           return;
//         }
//       }
//     }
//   }
//   res.status(404).json({
//     message: "user not found",
//   });
// };
