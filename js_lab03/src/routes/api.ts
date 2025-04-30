import { FastifyInstance } from 'fastify';
import { FastifyPluginAsync } from 'fastify';
import { PrismaClient, Prisma } from '@prisma/client';
import { AddressInfo } from 'node:net';

export const apiRoutes: FastifyPluginAsync = async (
  fastify: FastifyInstance,
) => {
  const prisma = fastify.getDecorator<PrismaClient>('db');
  fastify.get('/visits', async (req) => {
    const ip  = req.socket.remoteAddress;
    if (!ip) {
      throw new Error('Unable to determine ip address');
    }
    console.log('query 1', ip);
    const query = await prisma.user.findUnique({
      where: {
        ip
      }
    });
    if (!query) {
      console.log('query 2');
      await prisma.user.create({
        data: {
          ip,
          visits: 1
        }
      });
      return 1;
    }
    console.log('query 3');
    await prisma.user.update({
      where: { ip },
      data: {
        visits: query.visits + 1
      }
    });
    return query.visits + 1;
  });
};
