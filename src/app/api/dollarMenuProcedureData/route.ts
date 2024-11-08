import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const revalidate = 60;



export async function GET(request: { nextUrl: { searchParams: any; }; }) {

  const { searchParams } = request.nextUrl;
  let id = searchParams.get('id');
  
  try {
    const result =
      await sql`
            SELECT * FROM procedures_new WHERE id = ${id}
            `;
    const data = await result.rows;

    const procedure = data.map((procedureData: any) => {
      return (
        {
          name: procedureData.medical_name,
          price: procedureData.price,
        }
      )
    });
    return Response.json({ procedure }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}