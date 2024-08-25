import { Request, Response } from 'express';

export const getRSVP = (req: Request, res: Response) => {
  try {
    const body = req.body;
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};
