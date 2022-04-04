import { Router } from 'express';
import notFound from '../middleware/notFound';
import errorHandler from '../middleware/errorHandler';

import health from './health';
import orders from './orders';
import market from './market';

const router: Router = Router();
router.use('/health', health);
router.use('/orders/', orders);
router.use('/market/', market);

router.use(errorHandler);
router.get('*', notFound);

export = router;
