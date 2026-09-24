import { createInertiaApp, type ResolvedComponent } from '@inertiajs/react';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const pages = import.meta.glob<ResolvedComponent>('./pages/**/*.tsx');

void createInertiaApp({
    title: (title: string) => (title ? `${title} - ${appName}` : appName),
    resolve: (name: string) => {
        const page = pages[`./pages/${name}.tsx`];

        if (!page) {
            throw new Error(`Page not found: ${name}`);
        }

        return page();
    },
    strictMode: true,
    progress: {
        color: '#4B5563',
    },
});
