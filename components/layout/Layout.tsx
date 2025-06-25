import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import { ZellerLogo } from "../Logo";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Zeller Business Blog</title>
                <meta name="description" content="Zeller Business Blog" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/zeller-icon.png" />
            </Head>
            <Navbar />
            <main className="min-h-screen p-8 mt-[5.5rem] max-w-6xl mx-auto">
                {children}
            </main>
        </>
    );
}