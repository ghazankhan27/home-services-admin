import admin from "../../firebase/InitializeApp";

export default async function handler(req, res) {
  const users = await admin.auth().listUsers();

  const data = users.users.map((user) => user.toJSON());

  res.status(200).json(data);
}
