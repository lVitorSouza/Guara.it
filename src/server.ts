import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = Number(process.env.PORT) || 3000;
const projectRoot = path.join(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');
const imagesDir = path.join(projectRoot, 'imagens');

app.use(express.static(publicDir));
app.use('/imagens', express.static(imagesDir));

app.get('/', (_req: Request, res: Response) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.get('/documentacao', (_req: Request, res: Response) => {
  res.sendFile(path.join(publicDir, 'documentacao.html'));
});

app.get('/documentacao.html', (_req: Request, res: Response) => {
  res.sendFile(path.join(publicDir, 'documentacao.html'));
});

app.get('/health', (_req: Request, res: Response) => {
  res.json({ ok: true, service: 'Guará.IT' });
});

app.listen(port, () => {
  console.log(`Servidor Guará.IT rodando em http://localhost:${port}`);
});
