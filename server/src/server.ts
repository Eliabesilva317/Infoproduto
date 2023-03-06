import { PrismaClient  } from '@prisma/client';
import fastify from 'fastify';
import z from 'zod';

const app = fastify();

const prisma = new PrismaClient();

app.get('/products', async () => {
    const users = await prisma.user.findMany();

    return { users }
});

app.post('/products', async (request, reply) => {
    const createProductSchema = z.object({
        name: z.string(),
        price: z.number(),
    })

    const { name, price } = createProductSchema.parse(request.body)

    await prisma.user.create({
        data: {
            name,
            price,
        }
    })

    return reply.status(201).send()
})

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
}).then(() => {
    console.log('HTTP Server Running')
})

