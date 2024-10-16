import { createRSVPController, getRSVPController } from '@controller/rsvp';
import { Router } from 'express';
import { prisma } from 'src';

const routeRSVP = Router();

routeRSVP.get('/rsvp', getRSVPController);
routeRSVP.post('/rsvp', createRSVPController);
routeRSVP.get('/rsvp/:rsvpId', async (req, res) => {
  try {
    const id = parseInt(req.params.rsvpId);
    await prisma.rSVP.update({ where: { id }, data: { isAproved: true } });
    res.json({ success: true });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export default routeRSVP;
