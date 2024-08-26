import { createRSVPController, getRSVPController } from '@controller/rsvp';
import { Router } from 'express';

const routeRSVP = Router();

routeRSVP.get('/rsvp', getRSVPController);
routeRSVP.post('/rsvp', createRSVPController);

export default routeRSVP;
