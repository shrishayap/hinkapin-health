import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from '../utilities/firebase/firebase';

export async function GET(request: { nextUrl: { searchParams: any; }; }) {

    const { searchParams } = request.nextUrl;
    let uuid = searchParams.get('uuid');

    const db = getFirestore(app);
    const docRef = doc(db, "doctors", uuid);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      return Response.json(docSnap.data())
    } else {
      console.error(
        "Error getting doctor document",
        {
          requestUUID: uuid,
          docRef: docRef.path,
        }
      )
      return Response.json({ error: 'Unable to get document' }, { status: 500 });
    }






}
