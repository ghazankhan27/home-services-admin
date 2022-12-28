import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/InitializeApp";

export default async function handler(req, res) {
  try {
    const response = await getDocs(collection(db, "users"));

    const data = [];

    response.forEach((doc) => {
      data.push(doc.data());
    });

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
  }
}
