import { usersDb } from "../db.js";

// create a new user
export async function createUser(user) {
  // re-spread into a new object to avoid mutating the original object
  const newUser = { id: usersDb.data.users.length + 1, ...user };
  usersDb.data.users.push(newUser);
  await usersDb.write();
  return newUser;
}

// read/get all users from usersDb_users.json
export async function getAllUsers() {
  return usersDb.data.users;
}

// update a user by id
export async function updateUser(userId, userUpdates) {
  const user = usersDb.data.users.find((u) => u.id === userId);

  if (!user) {
    return null;
  }

  Object.assign(user, userUpdates);
  await usersDb.write();
  return user;
}

// delete a user by id
export async function deleteUser(userId) {
  const userIndex = usersDb.data.users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return false;
  }

  usersDb.data.users.splice(userIndex, 1);
  await usersDb.write();
  return true;
}
