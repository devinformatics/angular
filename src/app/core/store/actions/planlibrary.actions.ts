

import { Action } from '@ngrx/store';
// import type function
import { type } from '../utils';

export const PlanLibraryActionTypes = {
  GETPLANLIBRARYPARENTLEVEL: type('[planLibraryParentLevel] GetPlanLibraryParentLevel'),
  GETPLANLIBRARYPARENTLEVEL_SUCCESS: type('[planLibraryParentLevel] GetPlanLibraryParentLevel success'),
  GETPLANLIBRARYPARENTLEVEL_FAILURE: type('[planLibraryParentLevel] GetPlanLibraryParentLevel error'),
  POSTPLANLIBRARYHIERARCHY: type('[planLibraryHierarchyChange] PostPlanLibraryHierarchy'),
  POSTPLANLIBRARYHIERARCHY_SUCCESS: type('[planLibraryHierarchyChange] PostPlanLibraryHierarchy success'),
  POSTPLANLIBRARYHIERARCHY_FAILURE: type('[planLibraryHierarchyChange] PostPlanLibraryHierarchy error'),
  POSTPLANLIBRARYDETAILDATA: type('[planLibraryDetailDataChange] planLibraryDetailData'),
  POSTPLANLIBRARYDETAILDATA_SUCCESS: type('[planLibraryDetailDataChange] planLibraryDetailData success'),
  POSTPLANLIBRARYDETAILDATA_FAILURE: type('[planLibraryDetailDataChange] planLibraryDetailData error'),
  UPDATEPLANLIBRARYHIERARCHY: type('[planLibraryHierarchyChange] UpdatePlanLibraryHierarchy'),
  UPDATEPLANLIBRARYHIERARCHY_SUCCESS: type('[planLibraryHierarchyChange] UpdatePlanLibraryHierarchy success'),
  UPDATEPLANLIBRARYHIERARCHY_FAILURE: type('[planLibraryHierarchyChange] UpdatePlanLibraryHierarchy error'),

  //start : get modality data
  GETALLMODALITY: type('[modalityData] getModalityData'),
  GETALLMODALITY_SUCCESS: type('[modalityData] getModalityData success'),
  GETALLMODALITY_FAILURE: type('[modalityData] getModalityData error'),
  //End : get modality data

  //start : get styles data
  GETALLSTYLES: type('[styleData] getstyleData'),
  GETALLSTYLES_SUCCESS: type('[styleData] getstyleData success'),
  GETALLSTYLES_FAILURE: type('[styleData] getstyleData error')
  //start : get styles data
  
};

// Start : GetModality
export class GetAllModality implements Action {
  readonly type: string = PlanLibraryActionTypes.GETALLMODALITY;
  constructor(public authToken: any, public payload: any) { }
}

export class GetAllModalitySuccess implements Action {
  readonly type = PlanLibraryActionTypes.GETALLMODALITY_SUCCESS;
  constructor(public payload: any) { }
}

export class GetAllModalityFailure implements Action {
  readonly type = PlanLibraryActionTypes.GETALLMODALITY_FAILURE;
  constructor(public payload: any) { }
}
// End : GetModality

// Start : GetStyles
export class GetAllStyles implements Action {
  readonly type: string = PlanLibraryActionTypes.GETALLSTYLES;
  constructor(public authToken: any, public payload: any) { }
}

export class  GetAllStylesSuccess implements Action {
  readonly type = PlanLibraryActionTypes.GETALLSTYLES_SUCCESS;
  constructor(public payload: any) { }
}

export class  GetAllStylesFailure implements Action {
  readonly type = PlanLibraryActionTypes.GETALLSTYLES_FAILURE;
  constructor(public payload: any) { }
}
// End : GetStyles

export class GetParentPlanLibraryPlan implements Action {
  readonly type: string = PlanLibraryActionTypes.GETPLANLIBRARYPARENTLEVEL;
  constructor(public authToken: any, public payload: any, public clientUUID: any, public planYear: any) { }
}

export class GetParentPlanLibraryPlanSuccess implements Action {
  readonly type = PlanLibraryActionTypes.GETPLANLIBRARYPARENTLEVEL_SUCCESS;
  constructor(public payload: any) { }
}

export class GetParentPlanLibraryPlanFailure implements Action {
  readonly type = PlanLibraryActionTypes.GETPLANLIBRARYPARENTLEVEL_FAILURE;
  constructor(public payload: any) { }
}

export class UpdatePlanLibraryHierarchy implements Action {
  readonly type: string = PlanLibraryActionTypes.POSTPLANLIBRARYHIERARCHY;
  constructor(public payload: any, public caseUUID: any) { }
}

export class UpdatePlanLibraryHierarchySuccess implements Action {
  readonly type = PlanLibraryActionTypes.POSTPLANLIBRARYHIERARCHY_SUCCESS;
  constructor(public payload: any) { }
}

export class UpdatePlanLibraryHierarchyFailure implements Action {
  readonly type = PlanLibraryActionTypes.POSTPLANLIBRARYHIERARCHY_FAILURE;
  constructor(public payload: any) { }
}

export class UpdatePlanLibraryDetails implements Action {
  readonly type: string = PlanLibraryActionTypes.POSTPLANLIBRARYDETAILDATA;
  constructor(public payload: any, public token: any, public profileUUID: any) { }
}

export class UpdatePlanLibraryDetailsSuccess implements Action {
  readonly type = PlanLibraryActionTypes.POSTPLANLIBRARYDETAILDATA_SUCCESS;
  constructor(public payload: any) { }
}

export class UpdatePlanLibraryDetailsFailure implements Action {
  readonly type = PlanLibraryActionTypes.POSTPLANLIBRARYDETAILDATA_FAILURE;
  constructor(public payload: any) { }
}

export class PostUpdatePlanLibraryHierarchy implements Action {
  readonly type: string = PlanLibraryActionTypes.UPDATEPLANLIBRARYHIERARCHY;
  constructor(public payload: any, public token: any, public profileUUID: any) { }
}

export class PostUpdatePlanLibraryHierarchySuccess implements Action {
  readonly type = PlanLibraryActionTypes.UPDATEPLANLIBRARYHIERARCHY_SUCCESS;
  constructor(public payload: any) { }
}

export class PostUpdatePlanLibraryHierarchyFailure implements Action {
  readonly type = PlanLibraryActionTypes.UPDATEPLANLIBRARYHIERARCHY_FAILURE;
  constructor(public payload: any) { }
}

export type AllPlanLibraryData = GetParentPlanLibraryPlan | GetParentPlanLibraryPlanSuccess | GetParentPlanLibraryPlanFailure | UpdatePlanLibraryHierarchy | UpdatePlanLibraryHierarchySuccess | UpdatePlanLibraryHierarchyFailure | UpdatePlanLibraryDetails | UpdatePlanLibraryDetailsSuccess | UpdatePlanLibraryDetailsFailure | GetAllModality | GetAllStyles | GetAllModalitySuccess | GetAllStylesSuccess | GetAllModalityFailure | GetAllStylesFailure | PostUpdatePlanLibraryHierarchy | PostUpdatePlanLibraryHierarchySuccess | PostUpdatePlanLibraryHierarchyFailure;

