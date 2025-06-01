import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD, EMAIL_USER } from "./env.js";

const transpoter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
    }
});

export default transpoter;
