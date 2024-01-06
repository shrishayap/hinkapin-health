import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from '../utilities/firebase/firebase';

export const revalidate = 60;

export async function GET(request: { nextUrl: { searchParams: any; }; }) {

  const { searchParams } = request.nextUrl;
  let category = searchParams.get('category');

  //ensure category is valid
  const validCategories = ['colorectal', 'ent', 'gastro', 'general-surgery', 'gynecology', 'orthopedic', 'pain-management', 'plastic-surgery', 'podiatry', 'spine', 'urology'];
  if (!validCategories.includes(category)) {
    return Response.json({ error: 'Invalid category' }, { status: 400 });
  }

  const db = getFirestore(app);
  const docRef = doc(db, "procedure-prices", category);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return Response.json(docSnap.data())
  } else {
    console.error(
      "Error getting procedure prices document",
      {
        requestCatorgory: category,
        docRef: docRef.path,
      }
    )
    return Response.json({ error: 'Unable to get document' }, { status: 500 });
  }
}


