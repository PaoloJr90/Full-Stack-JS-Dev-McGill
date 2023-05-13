import { usersDb } from "../db.js";

// could add more logic to assign user-permissions to specific resources

// This is a higher-order function that returns a middleware function and with permission argument frozen-in in the closure
// custom middleware to authorize users
export default function authorize(permission) {
  if (
    !permission ||
    typeof permission !== "string" ||
    !["admin", "read", "write", "delete"].includes(permission)
  ) {
    // This will prevent the server from starting if the permission argument is invalid
    throw new Error("Invalid permission " + permission);
  }

  return (req, res, next) => {
    // retrieve the user password from the headers
    const email = req.headers["x-email"];
    const password = req.headers["x-password"];

    // retrieve the user email and password from the db_users.json file
    const user = usersDb.data.users.find((u) => {
      return u.email === email && u.password === password; // returning a boolean value
    });

    // validate the user password and email (from headers) against the db_users.json file
    if (!user) {
      res.status(401).json({ message: "Incorrect email or password" });
      return;
    }

    // check if the user has the correct permission
    const hasPermission =
      // permission argument is frozen-in in the closure of the authorize function
      user.permissions && user.permissions.includes(permission);
    //console.log("hasPermission: ", hasPermission);

    if (!hasPermission) {
      res
        .status(403)
        .json({ message: "You do not have the correct privileges" });
      return;
    }

    next();
  };
}
