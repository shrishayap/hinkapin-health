export const getProcedurePrices = async (category: string) => {
    const response = await fetch(`/api/procedurePrices?category=${category}`);
    const data = await response.json();
    if (response.status != 200) {
        return null;
    }
    return data;
}

export const getDoctorPreviews = async (category: string) => {
    const response = await fetch(`/api/doctorPreviews?category=${category}`);
    const data = await response.json();
    if (response.status != 200) {
        return null;
    }
    return data;
}

