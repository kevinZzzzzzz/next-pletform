import { redirect } from 'next/navigation'
import { auth } from "@/lib/auth";

const RouterAuth = async (props: any) => {

    const { children } = props;
    const session = await auth()
    if (!session) {
        redirect("/login");
        return false
    }
    return (
        <>{children}</>
    )
}
export default RouterAuth