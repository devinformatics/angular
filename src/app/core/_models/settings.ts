

export class Settings {
  id: number; // not displayed
  user_id: string; // ID of user - not displayed
  userName: string; // displayed and editable --- must be unique
  password: string; // For change password option
  clientID: number; // ID of client - no edit
  mgrID: number; // ID of manager - no edit 
  role: string; // no edit
  email: string; // --- must be unique
  timeZone: string; // (US-only)
  phone: string;
  address1: string;
  address2: string;
  city: string;
  state: string; // dorpdown (US-only)
  zip: string;
  alert_setting: boolean; // check-box
  email_setting: boolean; // check-box
  authToken: string;
}
export class dataYear {
  data_year: string;
  authToken: string;
  profileId: string;
}
