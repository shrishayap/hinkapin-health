import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const revalidate = 60;



export async function GET(request: { nextUrl: { searchParams: any; }; }) {

  const { searchParams } = request.nextUrl;
  let category = searchParams.get('category');
  category = category.toLowerCase();

  //ensure category is valid
  const validCategories = ['all', 'colorectal', 'ent', 'gastro', 'general-surgery', 'gynecology', 'orthopedic', 'pain-management', 'plastic-surgery', 'podiatry', 'spine', 'urology'];

  if (!validCategories.includes(category)) {
    return Response.json({ error: 'Invalid category' }, { status: 400 });
  }

  try {

    if (category === 'all') {
      const result =
        await sql`
            SELECT * FROM procedures
            `;
      const data = await result.rows;

      const procedures = data.map((procedureData: any) => {
        return (
          {
            name: procedureData.name,
            price: procedureData.cost,
            uuid: procedureData.id,
          }
        )
      });
      return Response.json({ procedures }, { status: 200 });
    }
    else {
      const result =
        await sql`
            SELECT * FROM procedures WHERE category = ${category}
            `;
      const data = await result.rows;

      const procedures = data.map((procedureData: any) => {
        return (
          {
            name: procedureData.name,
            price: procedureData.cost,
            uuid: procedureData.id,
          }
        )
      });
      return Response.json({ procedures }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}