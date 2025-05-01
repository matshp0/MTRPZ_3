import Fastify from 'fastify';
import process from 'process';
import { fastifyStatic } from '@fastify/static';
import { apiRoutes } from './routes/api';
import path from 'node:path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const fastify = Fastify();

fastify.decorate('db', prisma);
fastify.register(fastifyStatic, {
  root: path.join(__dirname, '..', 'public'),
  prefix: '/public/',
});

fastify.get('/', (req, res) => {
  res.sendFile('index.html');
});

fastify.register(apiRoutes, { prefix: '/api/' });

fastify.listen({ port: 8080, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);//sdf
  }
  console.log(`Server listening at ${address}`);
});
