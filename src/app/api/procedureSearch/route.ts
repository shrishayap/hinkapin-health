import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    let searchQuery = searchParams.get('query')?.toLowerCase();
    if (!searchQuery) {
        return NextResponse.json({ error: 'No search query provided' }, { status: 400 });
    }
    const queryWithPercent = `%${searchQuery}%`;

    try {
        const result =
            await sql`
            SELECT id, medical_name, description
FROM procedures_new
WHERE 
     medical_name ILIKE ${queryWithPercent}
   OR common_name ILIKE ${queryWithPercent}
   OR description ILIKE ${queryWithPercent}
   LIMIT 5;
            `;
        const data = await result.rows;
        if (!data) {
            return NextResponse.json({ error: 'Procedure not found' }, { status: 404 });
        }
        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}