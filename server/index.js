import expressServer from './loaders/express.js';

const PORT = '5500';
expressServer.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
})