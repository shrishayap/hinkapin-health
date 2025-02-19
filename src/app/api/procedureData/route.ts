import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    let uuid = searchParams.get('uuid');

    try {
        const result =
            await sql`
            SELECT * FROM procedures_new WHERE id = ${uuid}
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