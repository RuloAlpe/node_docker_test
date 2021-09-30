import express from 'express';
import user from './user.route';

const router = express.Router();

router.use('/users', user);

export default router;
