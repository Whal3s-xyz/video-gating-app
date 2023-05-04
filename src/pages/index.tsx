import Hero3 from "@/components/Hero3";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import {useRouter} from "next/router";


export default function Home() {

    const router = useRouter()
    return (
        <>
            <DefaultLayout allBlack={true}>


                <Hero3 onStart={() => {
                    router.push('/new')
                }}/>

            </DefaultLayout>

        </>
    )
}
