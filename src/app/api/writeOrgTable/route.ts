import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {

    return NextResponse.json("Not allowed", { status: 200 });
  try {
    await sql`INSERT INTO Organization (
        Org_Seq_no,
        Org_name,
        Org_Addr1,
        Org_Addr2,
        Org_City,
        Org_State,
        Org_Zip,
        Org_TelNo,
        Org_Website,
        Org_Contact_email
    ) VALUES (
        1,
        'Hinkapin Health',
        '3865 Childress Ave Ste C',
        NULL,
        'Mesquite',
        'TX',
        '75150',
        '8888500711',
        'https://hinkapin-health.vercel.app',
        'info@hinkapinhealth.com'
    );`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  return NextResponse.json("Done", { status: 200 });
}