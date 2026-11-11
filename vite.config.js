import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            // Gli asset vengono serviti da /themes/Four/: public_html/themes/Four e' un symlink a
            // laravel/Themes/Four/public (nessuna copia, nessun `npm run copy`).
            buildDirectory: 'themes/Four',
            // npm run dev: Laravel cerca il file hot in public_path('hot'), cioe' public_html/hot.
            hotFile: '../../../public_html/hot',
            refresh: true,
        }),
        //vue(),
        tailwindcss(),

    ],
    build: {
        // Dentro il tema: e' la cartella esposta dal symlink public_html/themes/Four.
        outDir: 'public',
        emptyOutDir: true,
      },
});
