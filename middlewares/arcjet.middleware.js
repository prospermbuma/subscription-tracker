import aj from "../config/arcjet.js";
import { isSpoofedBot } from "@arcjet/inspect";
// import { NODE_ENV } from "../config/env.js";

const arcjetMiddleware = async (req, res, next) => {
    try {
        //if (NODE_ENV !== 'production') return next(); // Skip Arcjet in dev

        const decision = await aj.protect(req, { requested: 1 }); // Take one token from a bucket per each request
        // console.log("Arcjet decision: ", decision);

        if (decision.isDenied()) {
            console.log(decision.reason);
            if (decision.reason.isRateLimit()) return res.status(429).json({ error: 'Rate limit exceeded' });
            if (decision.reason.isBot()) return res.status(403).json({ error: 'Bot detected' });

            return res.status(403).json({ error: 'Access denied' });
        } else if (decision.results.some(isSpoofedBot)) {
            return res.status(403).json({ error: 'Access denied' });
        }

        next();
    } catch (error) {
        console.log(`Arcjet Middleware Error: ${error}`);
        next(error);
    }
}

export default arcjetMiddleware;