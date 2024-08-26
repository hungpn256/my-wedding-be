import { createRSVP, getRSVP } from '@service/rsvp';
import { Request, Response } from 'express';
import { ListRSVP, RSVP } from 'src/dtos/rsvp';
import { validator } from 'src/utils/validator';

export const getRSVPController = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { page, limit } = await validator<ListRSVP>(body, ListRSVP);
    const dataRSVP = await getRSVP(page, limit);
    res.json({
      rsvp: dataRSVP,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const createRSVPController = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const rsvp = await validator<RSVP>(body, RSVP);
    const dataRSVP = await createRSVP(rsvp);
    res.json({
      rsvp: dataRSVP,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};
