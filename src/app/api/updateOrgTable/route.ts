import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {

    return NextResponse.json("Not allowed", { status: 200 });
  await sql`UPDATE Organization
  SET Org_name = 'Hinkapin Health',
      Org_City = 'Mesquite'
  WHERE Org_Seq_no = 1;`;  
  return NextResponse.json("Updated", { status: 200 });
}