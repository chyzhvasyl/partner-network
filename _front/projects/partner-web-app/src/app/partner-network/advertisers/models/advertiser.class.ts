import {PartnerNetworkStatuses} from "../../constants/statuses.constant";
import {User} from "../../../authorization/classes/user.class";

export class Advertiser {
  constructor(
    public id: string,
    public companyName: string,
    public manager: User,
    public status: PartnerNetworkStatuses,
    public email: string,
    public name: string
  ) {

  }
}
