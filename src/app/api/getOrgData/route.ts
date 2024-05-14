import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  
  const pets = await sql`SELECT 
  Org_name,
  Org_Addr1,
  Org_City,
  Org_State,
  Org_Zip,
  Org_TelNo,
  Org_Contact_email
FROM 
  Organization;`;

  const data = pets.rows[0]
  return NextResponse.json({ data }, { status: 200 });
}