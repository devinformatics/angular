

export interface WnctyCreateCase {
  title: string;
  case_manager_profile_uuid: number;
  description: number;
  general_code_uuid: number;
  start_date: string;
  due_date: string;
  plan_library_uuid: string;
  type: string;
  action: string;
  data_year: string;
  authToken: string;
  clientId: string;
  items: CreateItemCase[];
  status: string;
  profile_uuid: string;
}

export interface CreateItemCase {
  claim_uuid: string;
  person_uuid: string;
  is_selected: number;
  projected_saving_value: number;
}

export enum caseItem {
  claimPaidDate = "claimPaidDate",
  claimServiceFromDate = "claimServiceFromDate",
  claimChargesPaidByPayor = "claimChargesPaidByPayor",
  itemAssignedToAnotherCase ="itemAssignedToAnotherCase",
  UUID ="UUID",
  nodeType = "nodeType",
  claimUuid = "claimUuid",
  caseItemIsDispositioned = "caseItemIsDispositioned",
  personUuid = "personUuid"
}

export class WnctyUpdateCaseManager {
  case_manager_profile_uuid: number;
  description: number;
  general_code_uuid: number;
  start_date: string;
  end_date: string;
  plan_library_uuid: string;
  type: string;
  authToken: string;
  clientId: string;
  state_uuid: string;
  workflowStateName: string;
  profile_uuid: string;
  due_date: string;
  data_year: string;
}
//export type CreateItemCaseList = [CreateItemCase]
