"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 3000;
const projectRoot = path_1.default.join(__dirname, '..');
const publicDir = path_1.default.join(projectRoot, 'public');
const imagesDir = path_1.default.join(projectRoot, 'imagens');
app.use(express_1.default.static(publicDir));
app.use('/imagens', express_1.default.static(imagesDir));
app.get('/', (_req, res) => {
    res.sendFile(path_1.default.join(publicDir, 'index.html'));
});
app.get('/documentacao', (_req, res) => {
    res.sendFile(path_1.default.join(publicDir, 'documentacao.html'));
});
app.get('/documentacao.html', (_req, res) => {
    res.sendFile(path_1.default.join(publicDir, 'documentacao.html'));
});
app.get('/health', (_req, res) => {
    res.json({ ok: true, service: 'Guará.IT' });
});
app.listen(port, () => {
    console.log(`Servidor Guará.IT rodando em http://localhost:${port}`);
});
