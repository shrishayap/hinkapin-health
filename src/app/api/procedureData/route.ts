import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: { nextUrl: { searchParams: any; }; }) {
    const { searchParams } = request.nextUrl;
    let uuid = searchParams.get('uuid');

    try {
        const result =
            await sql`
            SELECT * FROM procedures WHERE id = ${uuid}
            `;
        const data = await result.rows[0];
        if (!data) {
            return NextResponse.json({ error: 'Procedure not found' }, { status: 404 });
        }
        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}