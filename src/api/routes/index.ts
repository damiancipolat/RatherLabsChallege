import { Router } from 'express';
import health from './health';
import orders from './orders';
import market from './market';

const router: Router = Router();
router.use('/health', health);
router.use('/orders/', orders);
router.use('/market/', market);

export = router;

// import { notFound, errorHandler, authRestrict } from '../server/middleware';
/*
router.use('/club-personal', [authRestrict], benefits);
router.use(errorHandler);
router.get('*', notFound);
*/
