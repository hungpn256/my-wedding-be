import { StatusCode } from '@constant/statusCode';
import { createRSVP, getRSVP } from '@service/rsvp';
import { Request, Response } from 'express';
import { ListRSVP, RSVP } from 'src/dtos/rsvp';
import { validator } from 'src/utils/validator';

export const getRSVPController = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const page = parseInt(query.page as string);
    const limit = parseInt(query.limit as string);
    await validator<ListRSVP>({ page, limit }, ListRSVP);
    const dataRSVP = await getRSVP(page, limit);
    res.json({
      rsvp: dataRSVP,
    });
  } catch (error: unknown) {
    res.status(StatusCode.BadRequest).json({
      message: error,
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
  } catch (error: unknown) {
    res.status(StatusCode.BadRequest).json({
      message: error,
    });
  }
};
