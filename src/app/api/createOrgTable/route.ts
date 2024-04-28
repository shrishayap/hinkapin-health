import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  return NextResponse.json("Not allowed", { status: 200 });

  try {
    const result =
      await sql`CREATE TABLE Organization (
        Org_Seq_no INT,
        Org_name CHAR(50),
        Org_Addr1 CHAR(30),
        Org_Addr2 CHAR(30),
        Org_City CHAR(20),
        Org_State CHAR(2),
        Org_Zip CHAR(10),
        Org_TelNo CHAR(15),
        Org_FaxNo CHAR(15),
        Org_Website CHAR(50),
        Org_POC CHAR(30),
        Org_Contact_email CHAR(30),
        Org_Support_email CHAR(30),
        Org_billing_email CHAR(30),
        Org_Crtd_user_id INT,
        Org_Crtd_date DATE,
        Org_Updt_User_id INT,
        Org_Updt_date DATE
    );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}