export const getDoctorData = async (uuid: string) => {
    const response = await fetch(`/api/doctorData?uuid=${uuid}`);
    const data = await response.json();
    if (response.status != 200) {
        return null;
    }
    return data;
}