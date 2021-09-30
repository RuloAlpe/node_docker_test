import app from './app';

const port = process.env.NODE_DOCKER_PORT || 5080;
app.listen(port, () => {
  console.info(`Running on ${port}...`);
});
