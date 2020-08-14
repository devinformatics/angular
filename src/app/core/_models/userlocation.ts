

export class USERLOCATION {
  user_location_uuid: number;
  user_profile_uuid: number;
  location: string; // 1.2.1.0;1.3,1.0
}

export enum Campaign {
  dashboard=1
}
export enum Module {
  Plan = 1,
  Saving = 2,
  Case = 3,
}
export enum Component {
  Benefit = 1,
  Spending = 2,
  Saving = 3,
  Catalyst = 4,
  Item = 5,
  CaseCreator = 6,
  ActiveCases = 7,
  Team = 8,
  CaseManager = 9,  
}
export enum MapModule {
  Plan = "str-plans",
  Saving = "saveNav",
  Case = "caseMgr",
  CampaignsNav ="campaigns"
}
