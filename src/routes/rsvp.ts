import { createRSVPController, getRSVPController } from '@controller/rsvp';
import { RSVP } from '@entity/RSVP.entity';
import { Router } from 'express';

const routeRSVP = Router();

routeRSVP.get('/rsvp', getRSVPController);
routeRSVP.post('/rsvp', createRSVPController);
routeRSVP.get('/rsvp/:rsvpId', async (req, res) => {
  try {
    const id = parseInt(req.params.rsvpId);
    await RSVP.updateOne({ id }, { isAproved: true });
    res.json({ success: true });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export default routeRSVP;
