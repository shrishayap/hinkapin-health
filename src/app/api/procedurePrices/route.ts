import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const revalidate = 60;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let category = searchParams.get('category');
  if (category) {
    category = category.toLowerCase();
  } else {
    return Response.json({ error: 'No category provided' }, { status: 400 });
  }

  //ensure category is valid
  const validCategories = ['cardiovascular', 'colorectal', 'ent', 'gastro', 'general', 'gynecology', 'eyes', 'orthopedic', 'pain-management', 'spine', 'podiatry', 'urology'];

  if (!validCategories.includes(category)) {
    return Response.json({ error: 'Invalid category' }, { status: 400 });
  }

  try {



    const result =
      await sql`
            SELECT * FROM procedures_new WHERE category = ${category}
            `;
    const data = await result.rows;

    const procedures = data.map((procedureData: any) => {
      return (
        {
          name: procedureData.medical_name,
          price: procedureData.price,
          uuid: procedureData.id,
        }
      )
    });
    return Response.json({ procedures }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}