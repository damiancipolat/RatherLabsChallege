import { Router } from 'express';

import getPrices from '../controller/orders';

const router: Router = Router();

// Bind routes with controller.
router.get('/:pair/prices', getPrices);

export = router;
