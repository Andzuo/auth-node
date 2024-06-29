import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { BadRequestError } from './../helpers/api-erros';
import { Request, Response } from 'express';
import { userRepository } from '../repositories/userRepository';

export class LoginController {
    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        const userExists = await userRepository.findOneBy({ email });

        if (!userExists) {
            throw new BadRequestError('Email ou senha inválidos');
        }

        const verifyPass = await bcrypt.compare(password, userExists.password);

        if (!verifyPass) {
            throw new BadRequestError('Email ou senha inválidos');
        }

        const token = jwt.sign({ id: userExists.id }, process.env.JWT_PASS ?? "", {
            expiresIn: "30m",
        });

        console.log(token);
    }
}