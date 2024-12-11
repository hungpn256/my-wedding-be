/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-magic-numbers */
import { RSVP } from '@entity/RSVP.entity';
export const getRSVP = (page: number, limit: number) => {
  return RSVP.find({ isAproved: true })
    .sort({ createdAt: 'asc' })
    .limit(limit)
    .skip((page - 1) * limit);
};

export const createRSVP = (data: any) => {
  return RSVP.create(data);
};
