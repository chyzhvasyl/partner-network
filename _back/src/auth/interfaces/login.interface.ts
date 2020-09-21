import User from '../../users/entities/user.entity';
import { Request } from 'express';

export interface Login extends Request {
  user: User
}
