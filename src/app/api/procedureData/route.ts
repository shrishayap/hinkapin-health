import procedureData from '@/../public/data/procedures.json'

export async function GET(request: { nextUrl: { searchParams: any; }; }) {
    const { searchParams } = request.nextUrl;
    let uuid = searchParams.get('uuid');

    for (let category in procedureData) {
        let matchingProcedure = procedureData[category].find((procedure: any) =>
            procedure.uuid == uuid
        );

        if (matchingProcedure) {
            return Response.json(matchingProcedure);
        }
    }

    return Response.json({ error: 'Invalid UUID' }, { status: 400 });
}