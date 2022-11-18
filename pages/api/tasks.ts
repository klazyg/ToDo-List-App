import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        console.log(req.body);

        const {name, task, priority, date} = JSON.parse(req.body)
        console.log(name);
        const savedTask = await prisma.task.create({
          data: {
            name,
            task,
            deadlineTimestamp: Number(date),
          },
        });
        res.status(200).json(savedTask);
      } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Something went wrong' });
      }
    };