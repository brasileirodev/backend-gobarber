import { Router } from 'express';
import CreateSessionUserService from '../services/CreateSessionUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const createSessionUser = new CreateSessionUserService();

  const { user, token } = await createSessionUser.execute({
    email,
    password,
  });

  return response.json({ user, token });
});
export default sessionsRouter;
