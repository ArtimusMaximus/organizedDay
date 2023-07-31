import path from 'path';
import { fileURLToPath } from 'url';

export const __filename = fileURLToPath(import.meta.url); // app.js is the filename
export const __dirname = path.dirname(__filename) // now is making the dirname where the file (app.js) is ....../server/

// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
// 2023 07 27 - just needed to watch the css rebuild, npm run build was deleting the output.css from dist folder..