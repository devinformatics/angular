

import { Action } from '@ngrx/store';
// import type function
import { type } from '../utils';

export const CampaignsActionTypes = {
  GETCAMPAIGNLIBRARYHIERARCHY: type('[campaignLibraryHierarchy] GetCampaignLibraryHierarchy'),
  GETCAMPAIGNLIBRARYHIERARCHY_SUCCESS: type('[campaignLibraryHierarchy] GetCampaignLibraryHierarchy success'),
  GETCAMPAIGNLIBRARYHIERARCHY_FAILURE: type('[campaignLibraryHierarchy] GetCampaignLibraryHierarchy error'),

  GETCAMPAIGNLIBRARYHIERARCHYDETAILS: type('[campaignLibraryHierarchy] GetCampaignLibraryHierarchyDetails'),
  GETCAMPAIGNLIBRARYHIERARCHYDETAILS_SUCCESS: type('[campaignLibraryHierarchy] GetCampaignLibraryHierarchyDetails success'),
  GETCAMPAIGNLIBRARYHIERARCHYDETAILS_FAILURE: type('[campaignLibraryHierarchy] GetCampaignLibraryHierarchyDetails error'),

  //Start : get All providers
  GETALLPROVIDER: type('[providerData] getProviderData'),
  GETALLPROVIDER_SUCCESS: type('[providerData] getProviderData success'),
  GETALLPROVIDER_FAILURE: type('[providerData] getProviderData error'),
  //End : get All providers

  //Start : get All Analytical Data Provider
  GETALLANALYTICAL: type('[analyticalData] getAnalyticalData'),
  GETALLANALYTICAL_SUCCESS: type('[analyticalData] getAnalyticalData success'),
  GETALLANALYTICAL_FAILURE: type('[analyticalData] getAnalyticalData error'),
  //End : get All Analytical Data Provider

  //Start : get All Data Provider
  GETALLDATAPROVIDER: type('[dataProviderData] getDataProviderData'),
  GETALLDATAPROVIDER_SUCCESS: type('[dataProviderData] getDataProviderData success'),
  GETALLDATAPROVIDER_FAILURE: type('[dataProviderData] getDataProviderData error'),
  //End : get All Data Provider


  // Start : Add campaign
  ADD_CAMPAIGN: type('[addcampaign] AddCampaign'),
  ADD_CAMPAIGN_FAILURE: type('[addcampaign] AddCampaign error'),
  ADD_CAMPAIGN_SUCCESS: type('[addcampaign] AddCampaign success'),
  // End : Add Campaign

  // Start : Update campaign
  UPDATE_CAMPAIGN: type('[updatecampaign] UpdateCampaign'),
  UPDATE_CAMPAIGN_FAILURE: type('[updatecampaign] UpdateCampaign error'),
  UPDATE_CAMPAIGN_SUCCESS: type('[updatecampaign] UpdateCampaign success'),
  // End : Update Campaign

  //Start : Push Modal data to save for campaigns
  PUSH_CAMPAIGN_MODAL_INFO: type('[dataProviderData] postCampaignModalData'),
  PUSH_CAMPAIGN_MODAL_INFO_SUCCESS: type('[dataProviderData] postCampaignModalData success'),
  PUSH_CAMPAIGN_MODAL_INFO_FAILURE: type('[dataProviderData] postCampaignModalData error'),
  //End : Push Modal data to save for campaigns

  //Start : Push Modal data to save for campaigns
  UPDATE_CAMPAIGN_MODAL_INFO: type('[updateCampaignData] updatepostCampaignModalData'),
  UPDATE_CAMPAIGN_MODAL_INFO_SUCCESS: type('[updateCampaignData] updatepostCampaignModalData success'),
  UPDATE_CAMPAIGN_MODAL_INFO_FAILURE: type('[updateCampaignData] updatepostCampaignModalData error'),
  //End : Push Modal data to save for campaigns

  //Start : Push Modal data to save for campaigns
  PUSH_CAMPAIGN_SECOND_STEP_INFO: type('[dataProviderData] postCampaignSecondStepData'),
  PUSH_CAMPAIGN_SECOND_STEP_INFO_SUCCESS: type('[dataProviderData] postCampaignSecondStepData success'),
  PUSH_CAMPAIGN_SECOND_STEP_INFO_FAILURE: type('[dataProviderData] postCampaignSecondStepData error'),
  //End : Push Modal data to save for campaigns

  // Start : Get Campaign Values Navigator
  GET_CAMPAIGN_VALUES_NAVIGATOR: type('[getcampaignvalues] getCampaignValuesNavigator'),
  GET_CAMPAIGN_VALUES_NAVIGATOR_SUCCESS: type('[getcampaignvalues] getCampaignValuesNavigator success'),
  GET_CAMPAIGN_VALUES_NAVIGATOR_FAILURE: type('[getcampaignvalues] getCampaignValuesNavigator error'),
  // End : Get Campaign Values Navigator

  // Start : Get Campaign Values Navigator
  GET_CHILD_CAMPAIGN_NAVIGATOR: type('[getchildcampaigns] getChildCampaignsNavigator'),
  GET_CHILD_CAMPAIGN_NAVIGATOR_SUCCESS: type('[getchildcampaigns] getChildCampaignsNavigator success'),
  GET_CHILD_CAMPAIGN_NAVIGATOR_FAILURE: type('[getchildcampaigns] getChildCampaignsNavigator error'),
  // End : Get Campaign Values Navigator

  // Start : Get Campaign Values Navigator
  GET_CAMPAIGN_ATTRIBUTES_NAVIGATOR: type('[getcampaignattribute] getCampaignsAttributesNavigator'),
  GET_CAMPAIGN_ATTRIBUTES_NAVIGATOR_SUCCESS: type('[getcampaignattribute] getCampaignsAttributesNavigator success'),
  GET_CAMPAIGN_ATTRIBUTES_NAVIGATOR_FAILURE: type('[getcampaignattribute] getCampaignsAttributesNavigator error'),
  // End : Get Campaign Values Navigator

  //Start : get All campaign child plan selected items data
  GETCAMPAIGNCHILDPLANITEMSSELECTEDDATA: type('[dataProviderData] getCampaignChildPlanItemsSelectedData'),
  GETCAMPAIGNCHILDPLANITEMSSELECTEDDATA_SUCCESS: type('[dataProviderData] getCampaignChildPlanItemsSelectedData success'),
  GETCAMPAIGNCHILDPLANITEMSSELECTEDDATA_FAILURE: type('[dataProviderData] getCampaignChildPlanItemsSelectedData error'),
  //End : get All campaign child plan selected items data

  // Start : Add Campaign Comments
  ADD_CAMPAIGN_COMMENT: type('[addCampaignComments] AddCampaignComment'),
  ADD_CAMPAIGN_COMMENT_FAILURE: type('[addCampaignComments] AddCampaignComment error'),
  ADD_CAMPAIGN_COMMENT_SUCCESS: type('[addCampaignComments] AddCampaignComment success'),
  // End :Add Campaign Comments

  // Start Update campaign comments
  //Update Case Comment
  UPDATE_CAMPAIGN_COMMENT: type('[updateCampaignComments] UpdateCampaignComment'),
  UPDATE_CAMPAIGN_COMMENT_FAILURE: type('[updateCampaignComments] UpdateCampaignComment error'),
  UPDATE_CAMPAIGN_COMMENT_SUCCESS: type('[updateCampaignComments] UpdateCampaignComment success'),
  // End Campaign Comments

  // Start : get campaign Comments
  GETCAMPAIGNCOMMENTS: type('campaignComments] GetCampaignComments'),
  GETCAMPAIGNCOMMENTS_FAILURE: type('[campaignComments] GetCampaignComments error'),
  GETCAMPAIGNCOMMENTS_SUCCESS: type('[campaignComments] GetCampaignComments success'),
 // End : get campaign Comments

};



export class GetCampaignLibraryHierarchy implements Action {
  readonly type: string = CampaignsActionTypes.GETCAMPAIGNLIBRARYHIERARCHY;
  constructor(public authToken: any, public payload: any, public clientUUID: any) { }
}

export class GetCampaignLibraryHierarchySuccess implements Action {
  readonly type = CampaignsActionTypes.GETCAMPAIGNLIBRARYHIERARCHY_SUCCESS;
  constructor(public payload: any) { }
}

export class GetCampaignLibraryHierarchyFailure implements Action {
  readonly type = CampaignsActionTypes.GETCAMPAIGNLIBRARYHIERARCHY_FAILURE;
  constructor(public payload: any) { }
}

export class GetCampaignLibraryHierarchyDetails implements Action {
  readonly type: string = CampaignsActionTypes.GETCAMPAIGNLIBRARYHIERARCHYDETAILS;
  constructor(public authToken: any, public payload: any) { }
}

export class GetCampaignLibraryHierarchyDetailsSuccess implements Action {
  readonly type = CampaignsActionTypes.GETCAMPAIGNLIBRARYHIERARCHYDETAILS_SUCCESS;
  constructor(public payload: any) { }
}

export class GetCampaignLibraryHierarchyDetailsFailure implements Action {
  readonly type = CampaignsActionTypes.GETCAMPAIGNLIBRARYHIERARCHYDETAILS_FAILURE;
  constructor(public payload: any) { }
}
// Start : GetProvoider
export class GetAllProvider implements Action {
  readonly type: string = CampaignsActionTypes.GETALLPROVIDER;
  constructor(public payload: any, public commonReferance: string) { }
}

export class GetAllProviderSuccess implements Action {
  readonly type = CampaignsActionTypes.GETALLPROVIDER_SUCCESS;
  constructor(public payload: any) { }
}

export class GetAllProviderFailure implements Action {
  readonly type = CampaignsActionTypes.GETALLPROVIDER_FAILURE;
  constructor(public payload: any) { }
}
// End : GetProvoider

// Start : Get Analytical Provoider
export class GetAllAnalyticalData implements Action {
  readonly type: string = CampaignsActionTypes.GETALLANALYTICAL;
  constructor(public authToken: any, public payload: any) { }
}

export class GetAllAnalyticalDataSuccess implements Action {
  readonly type = CampaignsActionTypes.GETALLANALYTICAL_SUCCESS;
  constructor(public payload: any) { }
}

export class GetAllAnalyticalDataFailure implements Action {
  readonly type = CampaignsActionTypes.GETALLANALYTICAL_FAILURE;
  constructor(public payload: any) { }
}
// End : Get Analytical Provoider


// Start : Get Analytical Provoider
export class GetDataProviderData implements Action {
  readonly type: string = CampaignsActionTypes.GETALLDATAPROVIDER;
  constructor(public authToken: any, public payload: any) { }
}

export class GetDataProviderDataSuccess implements Action {
  readonly type = CampaignsActionTypes.GETALLDATAPROVIDER_SUCCESS;
  constructor(public payload: any) { }
}

export class GetDataProviderDataFailure implements Action {
  readonly type = CampaignsActionTypes.GETALLDATAPROVIDER_FAILURE;
  constructor(public payload: any) { }
}
// End : Get Analytical Provoider


// Start : Add Campaign
export class AddCampaign implements Action {
  readonly type: string = CampaignsActionTypes.ADD_CAMPAIGN;
  constructor(public payload: any, public token: any, public profileUUID: any) { }
}

export class AddCampaignSuccess implements Action {
  readonly type = CampaignsActionTypes.ADD_CAMPAIGN_SUCCESS;
  constructor(public payload: any) { }
}

export class AddCampaignFailure implements Action {
  readonly type = CampaignsActionTypes.ADD_CAMPAIGN_FAILURE;
  constructor(public payload: any) { }
}
// End : Add Campaign


// Start : Update Campaign
export class UpdateCampaign implements Action {
  readonly type: string = CampaignsActionTypes.UPDATE_CAMPAIGN;
  constructor(public payload: any, public authToken, public clientUID: any, public profileUUID: any) { }
}

export class UpdateCampaignSuccess implements Action {
  readonly type = CampaignsActionTypes.UPDATE_CAMPAIGN_SUCCESS;
  constructor(public payload: any) { }
}

export class UpdateCampaignFailure implements Action {
  readonly type = CampaignsActionTypes.UPDATE_CAMPAIGN_FAILURE;
  constructor(public payload: any) { }
}
// End : Update Campaign






//export type AllCampaignLibraryData = GetCampaignLibraryHierarchy | GetCampaignLibraryHierarchySuccess | GetCampaignLibraryHierarchyFailure | GetCampaignLibraryHierarchyDetails | GetCampaignLibraryHierarchyDetailsSuccess | GetCampaignLibraryHierarchyDetailsFailure | GetAllProvider | GetAllProviderSuccess | GetAllProviderFailure | GetAllAnalyticalData | GetAllAnalyticalDataFailure |GetAllAnalyticalDataSuccess|GetDataProviderData|GetDataProviderDataSuccess|GetDataProviderDataFailure|AddCampaign|AddCampaignFailure|AddCampaignSuccess;

//Start : Push Modal data to save for campaigns
export class PostCampaignModalData implements Action {
  readonly type: string = CampaignsActionTypes.PUSH_CAMPAIGN_MODAL_INFO;
  constructor(public payload: any, public authToken, public clientUID: any,  public profileUUID: any) { }
}

export class PostCampaignModalDataSuccess implements Action {
  readonly type = CampaignsActionTypes.PUSH_CAMPAIGN_MODAL_INFO_SUCCESS;
  constructor(public payload: any) { }
}

export class PostCampaignModalDataFailure implements Action {
  readonly type = CampaignsActionTypes.PUSH_CAMPAIGN_MODAL_INFO_FAILURE;
  constructor(public payload: any) { }
}
//End : Push Modal data to save for campaigns

//Start : Push second step data to save for campaigns
export class PostCampaignSecondStepData implements Action {
  readonly type: string = CampaignsActionTypes.PUSH_CAMPAIGN_SECOND_STEP_INFO;
  constructor(public payload: any, public authToken, public clientUID: any, public profileUUID: any) { }
}

export class PostCampaignSecondStepDataSuccess implements Action {
  readonly type = CampaignsActionTypes.PUSH_CAMPAIGN_SECOND_STEP_INFO_SUCCESS;
  constructor(public payload: any) { }
}

export class PostCampaignSecondStepDataFailure implements Action {
  readonly type = CampaignsActionTypes.PUSH_CAMPAIGN_SECOND_STEP_INFO_FAILURE;
  constructor(public payload: any) { }
}
//End : Push second step to save for campaigns


//Start : Update second step data to save for campaigns
export class UpdateCampaignSecondStepData implements Action {
  readonly type: string = CampaignsActionTypes.UPDATE_CAMPAIGN_MODAL_INFO;
  constructor(public payload: any, public authToken, public clientUID: any, public profileUUID: any) { }
}

export class UpdateCampaignSecondStepDataSuccess implements Action {
  readonly type = CampaignsActionTypes.UPDATE_CAMPAIGN_MODAL_INFO_SUCCESS;
  constructor(public payload: any) { }
}

export class UpdateCampaignSecondStepDataFailure implements Action {
  readonly type = CampaignsActionTypes.UPDATE_CAMPAIGN_MODAL_INFO_FAILURE;
  constructor(public payload: any) { }
}
//End : Update second step to save for campaigns

// Start : Get Campaign Values 
export class GetCampaignValuesNavigator implements Action {
  readonly type: string = CampaignsActionTypes.GET_CAMPAIGN_VALUES_NAVIGATOR;
  constructor(public authToken: any, public clientUUID: any, public planLibraryUUID: any, public payload: any, public planYear: any) { }
}

export class GetCampaignValuesNavigatorSuccess implements Action {
  readonly type = CampaignsActionTypes.GET_CAMPAIGN_VALUES_NAVIGATOR_SUCCESS;
  constructor(public payload: any) { }
}

export class GetCampaignValuesNavigatorFailure implements Action {
  readonly type = CampaignsActionTypes.GET_CAMPAIGN_VALUES_NAVIGATOR_FAILURE;
  constructor(public payload: any) { }
}
// End : Get Campaign Values

// Start : Get Child Campaign for Navoigator
export class GetChildCampaignNavigator implements Action {
  readonly type: string = CampaignsActionTypes.GET_CHILD_CAMPAIGN_NAVIGATOR;
  constructor(public authToken: any, public clientUUID: any, public planLibraryUUID: any, public resultset: any, public payload: any, public planYear: any) { }
}

export class GetChildCampaignNavigatorSuccess implements Action {
  readonly type = CampaignsActionTypes.GET_CHILD_CAMPAIGN_NAVIGATOR_SUCCESS;
  constructor(public payload: any) { }
}

export class GetChildCampaignNavigatorFailure implements Action {
  readonly type = CampaignsActionTypes.GET_CHILD_CAMPAIGN_NAVIGATOR_FAILURE;
  constructor(public payload: any) { }
}
// End : Get Child Campaign for Navoigator

// Start : Get Campaign Attributes
export class GetCampaigAttributesNavigator implements Action {
  readonly type: string = CampaignsActionTypes.GET_CAMPAIGN_ATTRIBUTES_NAVIGATOR;
  constructor(public authToken: any, public clientUUID: any, public itemUUID: any, public payload: any) { }
}

export class GetCampaigAttributesNavigatorSuccess implements Action {
  readonly type = CampaignsActionTypes.GET_CAMPAIGN_ATTRIBUTES_NAVIGATOR_SUCCESS;
  constructor(public payload: any) { }
}

export class GetCampaigAttributesNavigatorFailure implements Action {
  readonly type = CampaignsActionTypes.GET_CAMPAIGN_ATTRIBUTES_NAVIGATOR_FAILURE;
  constructor(public payload: any) { }
}
// End : Get Campaign Attributes

// Start : Get Selected Campaigns Child Plan items
export class GetCampaignChildPlanItemsSelectedData implements Action {
  readonly type: string = CampaignsActionTypes.GETCAMPAIGNCHILDPLANITEMSSELECTEDDATA;
  constructor(public authToken: any, public payload: any, public planYear: any) { }
}

export class GetCampaignChildPlanItemsSelectedDataSuccess implements Action {
  readonly type = CampaignsActionTypes.GETCAMPAIGNCHILDPLANITEMSSELECTEDDATA_SUCCESS;
  constructor(public payload: any) { }
}

export class GetCampaignChildPlanItemsSelectedDataFailure implements Action {
  readonly type = CampaignsActionTypes.GETCAMPAIGNCHILDPLANITEMSSELECTEDDATA_FAILURE;
  constructor(public payload: any) { }
}
// End : Get Selected Campaigns Child Plan items

// Start : Campaign Comments
export class AddCampaignComment implements Action {
  readonly type: string = CampaignsActionTypes.ADD_CAMPAIGN_COMMENT;
  constructor(public payload: any, public campaignUUID: any, public token: any, public profileUUID: any, public campaignCommentUUID, public itemUUID) { }
}
export class AddCampaignCommentSuccess {
  readonly type = CampaignsActionTypes.ADD_CAMPAIGN_COMMENT_SUCCESS;
  constructor(public payload: any) { }
}
export class AddCampaignCommentFailure {
  readonly type = CampaignsActionTypes.ADD_CAMPAIGN_COMMENT_FAILURE;
  constructor(public payload: any) { }
}
// End : Campaign Comments

// Start : Update Campaign Comments
export class UpdateCampaignComment implements Action {
  readonly type: string = CampaignsActionTypes.UPDATE_CAMPAIGN_COMMENT;
  constructor(public payload: any, public token: any, public profileUUID: any, public campaignCommentUUID) { }
}
export class UpdateCampaignCommentSuccess {
  readonly type = CampaignsActionTypes.UPDATE_CAMPAIGN_COMMENT_SUCCESS;
  constructor(public payload: any) { }
}
export class UpdateCampaignCommentFailure {
  readonly type = CampaignsActionTypes.UPDATE_CAMPAIGN_COMMENT_FAILURE;
  constructor(public payload: any) { }
}
// End : Update Campaign Comments


// Start : Get list of Campaign Comments
export class GetCampaignComments implements Action {
  readonly type: string = CampaignsActionTypes.GETCAMPAIGNCOMMENTS;
  constructor(public payload: any,public clientUUID: any, public commentUUID: any, public profileUUID: any) { }
}

export class GetCampaignCommentsSuccess implements Action {
  readonly type = CampaignsActionTypes.GETCAMPAIGNCOMMENTS_SUCCESS;
  constructor(public payload: any) { }
}

export class GetCampaignCommentsFailure implements Action {
  readonly type = CampaignsActionTypes.GETCAMPAIGNCOMMENTS_FAILURE;
  constructor(public payload: any) { }
}
// End : Get list of Campaign Comments


//export type AllCampaignLibraryData = GetCampaignLibraryHierarchy | GetCampaignLibraryHierarchySuccess | GetCampaignLibraryHierarchyFailure | GetCampaignLibraryHierarchyDetails | GetCampaignLibraryHierarchyDetailsSuccess | GetCampaignLibraryHierarchyDetailsFailure | GetAllProvider | GetAllProviderSuccess | GetAllProviderFailure | GetAllAnalyticalData | GetAllAnalyticalDataFailure | GetAllAnalyticalDataSuccess | GetDataProviderData | GetDataProviderDataSuccess | GetDataProviderDataFailure | PostCampaignModalData | PostCampaignModalDataSuccess | PostCampaignModalDataFailure | PostCampaignSecondStepData | PostCampaignSecondStepDataSuccess | PostCampaignSecondStepDataFailure | AddCampaign | AddCampaignFailure | AddCampaignSuccess | GetCampaignChildPlanItemsSelectedData | GetCampaignChildPlanItemsSelectedDataSuccess | GetCampaignChildPlanItemsSelectedDataFailure;
export type AllCampaignLibraryData = GetCampaignLibraryHierarchy | GetCampaignLibraryHierarchySuccess | GetCampaignLibraryHierarchyFailure | GetCampaignLibraryHierarchyDetails | GetCampaignLibraryHierarchyDetailsSuccess | GetCampaignLibraryHierarchyDetailsFailure | GetAllProvider | GetAllProviderSuccess | GetAllProviderFailure | GetAllAnalyticalData | GetAllAnalyticalDataFailure | GetAllAnalyticalDataSuccess | GetDataProviderData | GetDataProviderDataSuccess | GetDataProviderDataFailure | PostCampaignModalData | PostCampaignModalDataSuccess | PostCampaignModalDataFailure | PostCampaignSecondStepData | PostCampaignSecondStepDataSuccess | PostCampaignSecondStepDataFailure | AddCampaign | AddCampaignFailure | AddCampaignSuccess | GetCampaignValuesNavigator | GetCampaignValuesNavigatorSuccess | GetCampaignValuesNavigatorFailure | GetChildCampaignNavigator | GetChildCampaignNavigatorFailure | GetChildCampaignNavigatorSuccess | GetCampaigAttributesNavigator | GetCampaigAttributesNavigatorSuccess | GetCampaigAttributesNavigatorFailure | GetCampaignChildPlanItemsSelectedData | GetCampaignChildPlanItemsSelectedDataSuccess | GetCampaignChildPlanItemsSelectedDataFailure | UpdateCampaign | UpdateCampaignFailure | UpdateCampaignSuccess | UpdateCampaignSecondStepData | UpdateCampaignSecondStepDataSuccess | UpdateCampaignSecondStepDataFailure | AddCampaignComment | AddCampaignCommentSuccess | AddCampaignCommentFailure | UpdateCampaignComment | UpdateCampaignCommentSuccess | UpdateCampaignCommentFailure | GetCampaignComments | GetCampaignCommentsFailure|GetCampaignCommentsSuccess;

