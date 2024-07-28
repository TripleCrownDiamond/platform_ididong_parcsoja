const mix = require('laravel-mix');

mix.js('resources/ts/app.tsx', 'public/js')
   .react()  // Assure que React est bien configuré
   .ts();    // Assure que TypeScript est bien configuré
