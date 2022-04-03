import { Router } from 'express';

import calcExecution from '../controller/market/market';
import calcLimit from '../controller/market/limit';

const router: Router = Router();

// Bind routes with controller.
router.get('/execute/:pair/:operation/:ammount/', calcExecution);
router.get('/execute/:pair/:operation/:ammount/limit/:limit', calcLimit);

export = router;
