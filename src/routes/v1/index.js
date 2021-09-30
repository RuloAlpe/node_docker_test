import express from 'express';
import user from './user.route';

const router = express.Router();

router.use('/task', user);

export default router;
