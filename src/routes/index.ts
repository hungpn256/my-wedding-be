import { Router } from 'express';
import routeRSVP from './rsvp';
import searchRoute from './search';

const route = Router();
route.get('/', (req, res) => {
  res.json({ success: true });
});
route.use('/', routeRSVP);
route.use('/', searchRoute);

export default route;
