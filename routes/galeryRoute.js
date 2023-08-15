import express from 'express';
import galeryController from '../controllers/galeryController.js';

const galeryRouter = express.Router();

// galeryRouter.get('/', galeryController.getTeam);
// galeryRouter.get('/:id', galeryRouter.getTeamById);
galeryRouter.post('/', galeryController.addGalery);
// galeryRouter.put('/:id', galeryRouter.updateTeam);
// galeryRouter.delete('/:id', galeryRouter.deleteTeam);

export default galeryRouter;
