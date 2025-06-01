import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD, EMAIL_USER } from "./env.js";

export const accountEmail = EMAIL_USER;

const transpoter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: accountEmail,
        pass: EMAIL_PASSWORD,
    }
});

export default transpoter;
