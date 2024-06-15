export const getSearchQeury = async (query: string) => {
    const response = await fetch(`/api/procedureSearch?query=${query}`);
    const { data } = await response.json();

    if (response.status != 200) {
        return [];
    }
    return data;
}