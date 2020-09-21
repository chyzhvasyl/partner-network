import { UserRoles } from '../../auth/enums/roles.enum';
import { Statuses } from '../../auth/enums/user-statuses.enum';

export class CreateUserDto {
  email: string;
  name: string;
  password: string;
  role: UserRoles;
  status: Statuses
}
