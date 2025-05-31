import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
import User from "../models/user.model.js";

const authorize = async (req, res, next) => {
    try {
        // Get access to user' token
        let token;

        // 1. Try getting the token from the Authorization header (e.g., Bearer <token>)
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        // 2. If not found in headers, try from cookies
        if (!token && req.cookies && req.cookies.authToken) {
            token = req.cookies.authToken;
        }

        // 3. If No token found
        if (!token) return res.status(401).json({ message: 'Unauthorized' });

        // Verify the token if it exists
        const decoded = jwt.verify(token, JWT_SECRET);

        // Check if user still exists
        const user = await User.findById(decoded.userId);

        if (!user) return res.status(401).json({ message: 'Unauthorized' });

        res.user = user;

        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized', error: error.message });
    }
}

export default authorize;