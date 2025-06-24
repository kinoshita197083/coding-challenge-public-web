import Head from "next/head";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children }) {
    return (
        <div className="">
            <Navbar />
            <div className="min-h-screen p-8 mt-[5.5rem]">
                <Head>
                    <title>Zeller Business Blog</title>
                </Head>
                {children}
            </div>
        </div>
    );
}