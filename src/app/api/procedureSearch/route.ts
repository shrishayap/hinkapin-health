import procedureData from '@/../public/data/procedures.json'

export async function GET(request: { nextUrl: { searchParams: any; }; }) {
    const { searchParams } = request.nextUrl;
    let searchQuery = searchParams.get('query');

    let results = [];
    for (let category in procedureData) {
        let matchingProcedures = procedureData[category].filter((procedure: any) =>
            procedure.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            procedure.description.toLowerCase().includes(searchQuery.toLowerCase())
        ).map((procedure: any) => ({
            name: procedure.name,
            description: procedure.description,
            uuid: procedure.uuid,
        }));

        results.push(...matchingProcedures);
    }

    return  Response.json(results);
}