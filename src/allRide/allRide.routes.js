import {Router} from 'express';
import * as allRideController from './allride.controller';
const router = new Router();

router.get('/', allRideController.allRideList);

export default router;
