import { Router } from 'express';
import orderSongRoute from './order-song';
import routeRSVP from './rsvp';
import searchRoute from './search';

const route = Router();
route.get('/', (req, res) => {
  res.json({ success: true });
});
route.use('/', routeRSVP);
route.use('/', searchRoute);
route.use('/', orderSongRoute);

export default route;
