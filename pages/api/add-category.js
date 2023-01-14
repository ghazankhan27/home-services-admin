import { addDoc, collection } from "firebase/firestore";
import db from "../../firebase/InitializeApp";

export default async function handler(req, res) {
  try {
    await addDoc(collection(db, "Category"), req.body);

    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
}
