import { db } from "../db.mjs";

// Possible values for permission argument: "read", "write", "notify"
// You can add more permissions if you want or extend the logic to support roles or permissions scoped to specific resources (e.g. "read:animals")

// This is a higher-order function that returns a middleware function and with permission argument frozen-in in the closure
export function authorize(permission) {
    if (
        !permission ||
        typeof permission !== "string" ||
        !["read", "write", "notify"].includes(permission)
    ) {
        throw new Error("Invalid permission argument"); // This will prevent the server from starting
    }

    return (req, res, next) => {
        // Replace this with an actual user ID or user object extraction from the request
        const userId = req.header("userId"); // header (without s) is a method of the request object that returns the value of the specified header
        // const userId = req.headers.userId; // This is an alternative way to get the header value
        // const userId = req.headers["userId"]; // This is an alternative way to get the header value

        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const user = db.data.users.find((u) => u.id === userId);

        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const hasPermission =
            user.permissions && user.permissions.includes(permission); // permission argument is frozen-in in the closure of the authorize function

        if (!hasPermission) {
            return res.status(403).json({ message: "Forbidden" });
        }

        next();
    };
}
