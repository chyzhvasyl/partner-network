import {PartnerNetworkStatuses} from "../../partner-network/constants/statuses.constant";

export interface User {
  id: string
  name: string
  role: string //enum
  status: PartnerNetworkStatuses
  email: string
  password: string
}
