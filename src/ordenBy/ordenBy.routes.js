import {Router} from 'express';
import * as ordenBy from './ordenBy.controller';
const router = new Router();

router.get('/recent', ordenBy.ByDateEarly);
router.get('/old', ordenBy.ByDateOld);
router.get('/distance/short', ordenBy.ByDistanceLong);
router.get('/distance/long', ordenBy.ByDistanceShort);

export default router;
