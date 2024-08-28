import { Router } from 'express';
import routeRSVP from './rsvp';

const route = Router();
route.get('/', (req, res) => {
  res.json({ success: true });
});
route.use('/', routeRSVP);

export default route;
