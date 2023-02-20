import path from 'path';
import { fileURLToPath } from 'url';

export const __filename = fileURLToPath(import.meta.url); // app.js is the filename
export const __dirname = path.dirname(__filename) // now is making the dirname where the file (app.js) is ....../server/