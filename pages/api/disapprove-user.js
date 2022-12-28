import { doc, updateDoc } from "firebase/firestore";
import db from "../../firebase/InitializeApp";

export default async function handler(req, res) {
  try {
    const { id } = JSON.parse(req.body);

    const usersRef = doc(db, "users", id);

    await updateDoc(usersRef, { isApproved: false });

    res.status(200).json({ Success: true });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
}
