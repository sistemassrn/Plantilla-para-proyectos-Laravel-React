import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Head title="Home" />

            <main className="flex min-h-screen items-center justify-center bg-white px-6 text-zinc-950">
                <section className="max-w-xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                        Laravel + Inertia + React + Tailwind
                    </p>

                    <h1 className="mt-4 text-4xl font-semibold tracking-tight">
                        Base para aplicaciones 
                    </h1>
                </section>
            </main>
        </>
    );
}
