import { Router } from 'express';
import health from './health';
import orders from './orders';

const router: Router = Router();
router.use('/health', health);
router.use('/orders/', orders);

export = router;

// import { notFound, errorHandler, authRestrict } from '../server/middleware';
/*
router.use('/club-personal', [authRestrict], benefits);
router.use(errorHandler);
router.get('*', notFound);
*/
