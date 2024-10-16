import { prisma } from 'src';
import { RSVP } from 'src/dtos/rsvp';

export const getRSVP = (page: number, limit: number) => {
  return prisma.rSVP.findMany({
    where: {
      isAproved: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    skip: (page - 1) * limit,
    take: limit,
  });
};

export const createRSVP = (data: RSVP) => {
  return prisma.rSVP.create({ data });
};
