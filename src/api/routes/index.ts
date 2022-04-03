import { Router } from 'express';
import health from './health';

const router: Router = Router();
router.use('/health', health);

export = router;

// import benefits from '../server/routes/benefits';
// import { notFound, errorHandler, authRestrict } from '../server/middleware';
/*
router.use('/club-personal', [authRestrict], benefits);
router.use(errorHandler);
router.get('*', notFound);
*/
