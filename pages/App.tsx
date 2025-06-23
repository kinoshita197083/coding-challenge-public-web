import React from "react";

type Entry = {
    sys: { id: string };
    fields: {
        title: string;
        slug: string;
    };
};

type AppProps = {
    entries: Entry[];
};

const App: React.FC<AppProps> = ({ entries }) => (
    <>
        <h1 className="text-2xl font-bold mb-4">Zeller Blogs</h1>
        <ul className="space-y-2">
            {entries.map((entry) => (
                <li key={entry.sys.id} className="bg-white shadow p-4 rounded">
                    <h2 className="text-xl font-semibold">{entry.fields.title}</h2>
                    <p>{entry.fields.slug}</p>
                </li>
            ))}
        </ul>
    </>
);

export default App; 