import { Router } from 'express';
import routeRSVP from './rsvp';

const route = Router();

route.use('/', routeRSVP);

export default route;
