import procedureData from '@/../public/data/procedures.json';

export const revalidate = 60;

export async function GET(request: { nextUrl: { searchParams: any; }; }) {

  const { searchParams } = request.nextUrl;
  let category = searchParams.get('category');

  //ensure category is valid
  const validCategories = ['colorectal', 'ent', 'gastro', 'general-surgery', 'gynecology', 'orthopedic', 'pain-management', 'plastic-surgery', 'podiatry', 'spine', 'urology'];
  if (!validCategories.includes(category)) {
    return Response.json({ error: 'Invalid category' }, { status: 400 });
  }

  const procedures = procedureData[category].map((procedureData : any)=>
    {
      return (
        {
          name: procedureData.name,
          price: procedureData.price,
          uuid: procedureData.uuid,
        }
      )
    });

  return Response.json({procedures}, { status: 200 });

}


