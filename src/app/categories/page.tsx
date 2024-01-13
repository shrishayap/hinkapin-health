import { redirect } from "next/navigation";

export function Page() {
    return redirect('/categories/all')
}

export default Page