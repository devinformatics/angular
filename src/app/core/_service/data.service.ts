import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class DataService {

  private itemUUID = new BehaviorSubject('');
  private titleSource = new BehaviorSubject('');

  //getNotification
  private Notificationmesseage = new BehaviorSubject('');
  NotificationbyUUID = this.Notificationmesseage.asObservable();


  //getNotification
  private NotificationUUID = new BehaviorSubject('');
  currentNotificationUUID = this.NotificationUUID.asObservable();

  //getplanlibrayUUID
  private PlanLibraryUUID = new BehaviorSubject('');
  currentPlanLibraryUUID = this.PlanLibraryUUID.asObservable();


  //getAlertID
  private AlertID = new BehaviorSubject('');
  currentAlertID = this.AlertID.asObservable();

  // get user for current Notification
  private CurrentUserName = new BehaviorSubject('');
  currentUserNameforNotification = this.CurrentUserName.asObservable();

  //getNotification
  private spinnerDisplay = new BehaviorSubject('false');
  currentItemUUID = this.itemUUID.asObservable();
  currentTitle = this.titleSource.asObservable();
  currentSpinnerDisplay = this.spinnerDisplay.asObservable();
  private sourceData = new Subject<string>();
  currentSourceData = this.sourceData.asObservable();
  private activeCaseUUID = new BehaviorSubject('');
  currentActiveCaseUUID = this.activeCaseUUID.asObservable();
  private checkUpdateStatus = new BehaviorSubject('false');
  currentCheckUpdateStatus = this.checkUpdateStatus.asObservable();
  private caseCommentUUid = new BehaviorSubject('false');
  currentCommentUUIdStatus = this.caseCommentUUid.asObservable();
  private caseItemUUID = new BehaviorSubject('false');
  currentcaseItemUUIDStatus = this.caseItemUUID.asObservable();

  //Start claim UUID
  private caseClaimUUid = new BehaviorSubject('false');
  caseClaimUUidStatus = this.caseClaimUUid.asObservable();
  // End Claim UUID

  //Start campaign pop up
  private popupDisplay = new BehaviorSubject('false');
  popupdisplayStatus = this.popupDisplay.asObservable();
  // End Campaign pop up

  private navigationCount = new BehaviorSubject(0);
  userNavigationCountData = this.navigationCount.asObservable();

  private notificationCount = new BehaviorSubject(0);
  userNotificationCountData = this.notificationCount.asObservable();

  private activeCaseClientUUID = new BehaviorSubject('');
  currentActiveCaseClientUUID = this.activeCaseClientUUID.asObservable();

  private activeCaseAssingManagerUUID = new BehaviorSubject('');
  currentActiveAssignManagerUUID = this.activeCaseAssingManagerUUID.asObservable();




  private spendingLoaderStatus = new BehaviorSubject(true);
  currentSpendingLoaderStatus = this.spendingLoaderStatus.asObservable();




  private catalystLoaderStatus = new BehaviorSubject(true);
  currentCatalystLoaderStatus = this.catalystLoaderStatus.asObservable();


  private activespinnerDisplay = new BehaviorSubject('false');
  currentActiveCaseSpinnerDisplay = this.activespinnerDisplay.asObservable();

  // Start : Current Claim Type
  private currentClaimType = new BehaviorSubject('');
  currentClaimTypeItemSelector = this.currentClaimType.asObservable();
  // End : Current Claim Type

  // Start : Current Node level
  private currentNodelevel = new BehaviorSubject('');
  currentNodelevelhierarchy = this.currentNodelevel.asObservable();
  // End : Current Node level

  // Start : Current plan Item
  private currentPlanItem = new BehaviorSubject('');
  currentPlanItemLibray = this.currentPlanItem.asObservable();
  // End : Current Claim Type

  //Start : Selection of plans from campaign for navigation
  private currentPlanItemForCampaign = new BehaviorSubject('');
  currentSelectedPlanItemForCampaign = this.currentPlanItemForCampaign.asObservable();
  // End : Selection of plans from campaign for navigation

  //Start : Add for checking of the child plan items
  private currentSelectedChildPlanItemForCampaign = new BehaviorSubject(false);
  currentShowSelectedChildPlanItemForCampaign = this.currentSelectedChildPlanItemForCampaign.asObservable();
  // End : Add for checking of the child plan items

  //Start : Saving the selected campaignId for saving campaigns
  private currentSelectedCampaignIdForCampaign = new BehaviorSubject('');
  currentShowSettingSelectedCampaignIdForCampaign = this.currentSelectedCampaignIdForCampaign.asObservable();
  // End : Saving the selected campaignId for saving campaigns

  //Start : Saving the selected planLibraryUUID for saving campaigns
  private currentSelectedPlanLibraryUUIdForCampaign = new BehaviorSubject('');
  currentShowSelectedPlanLibraryUUIDForCampaign = this.currentSelectedPlanLibraryUUIdForCampaign.asObservable();
  // End : Saving the selected planLibraryUUID for saving campaigns

  //Start : Saving the selected planLibraryUUID for saving campaigns
  private currentSelectedPlanLibraryNameForCampaign = new BehaviorSubject('');
  currentShowSelectedPlanLibraryNameForCampaign = this.currentSelectedPlanLibraryNameForCampaign.asObservable();
  // End : Saving the selected planLibraryUUID for saving campaigns

  //Start : Saving the selected planLibraryUUID for saving campaigns
  private currentSelectedPlanLibraryIsCampaignValueForCampaign = new BehaviorSubject('');
  currentShowSelectedPlanLibraryIsCampaignValueForCampaign = this.currentSelectedPlanLibraryIsCampaignValueForCampaign.asObservable();
  // End : Saving the selected planLibraryUUID for saving campaigns

  //Start : Saving the selected planLibraryUUID for saving campaigns
  private currentCampaignSelectedPlanLibraryNameForCampaign = new BehaviorSubject('');
  currentCampaignShowSelectedPlanLibraryNameForCampaign = this.currentCampaignSelectedPlanLibraryNameForCampaign.asObservable();
  // End : Saving the selected planLibraryUUID for saving campaigns



  //Start : Check for Switch client
  private checkSwitchClientStatus = new BehaviorSubject('');
  currentSwithcClientUUID = this.checkSwitchClientStatus.asObservable();
  // End : Saving the selected planLibraryUUID for saving campaigns

  //Start : Check for Switch client
  private checkBenefitPlanCallbackStatus = new BehaviorSubject('');
  currentBenefitPlanCallbackStatus = this.checkBenefitPlanCallbackStatus.asObservable();
  // End : Saving the selected planLibraryUUID for saving campaigns

  //Start : Check for loader from tree to create campaign screen
  private checkForLoaderStatus = new BehaviorSubject(false);
  currentLoaderStatusForCreateCampaign = this.checkForLoaderStatus.asObservable();
  // End : End for loader from tree to create campaign screen

  //Start : Check change for the case creation through campaign navigator
  private checkForCaseCreationStatus = new BehaviorSubject('');
  checkforCaseCreationFromCampaign = this.checkForCaseCreationStatus.asObservable();
  // End : Check change for the case creation through campaign navigator

  //Start : Check change for the case creation through campaign navigator
  private checkIfCampaignExistsOrNot = new BehaviorSubject('');
  checkforAlreadyExistingCampaign = this.checkIfCampaignExistsOrNot.asObservable();
  // End : Check change for the case creation through campaign navigator

  //Start : Check Status of Create Component file to open as modal
  private checkForCaseCreationComponentStatus = new BehaviorSubject('');
  checkforCaseCreationComponentStatusFromCampaign = this.checkForCaseCreationComponentStatus.asObservable();
  // End : Check Status of Create Component file to open as modal


  //Start : Check reply commennt from campaign navigator
  private checkForReplyComment = new BehaviorSubject('');
  checkForReplyCommentFromCampaign = this.checkForReplyComment.asObservable();
  // End : Check reply commennt from campaign navigator

  //Start : Check Add commennt from campaign navigator
  private checkForAddComment = new BehaviorSubject('');
  checkForAddCommentFromCampaign = this.checkForAddComment.asObservable();
  // End : Check Add commennt from campaign navigator

  //Start : Check Add commennt from campaign navigator
  private checkForCommentTree = new BehaviorSubject('');
  checkForCommentTreeFromCampaign = this.checkForCommentTree.asObservable();
  // End : Check Add commennt from campaign navigator

  //Start : Check Status of Update pop up existence
  private checkForUpdateIcondisplayStatus = new BehaviorSubject('');
  checkforUpdateIcondisplayStatusFromNavigator = this.checkForUpdateIcondisplayStatus.asObservable();
  // End : Check Status of Update pop up existence

  //Start : Check Selected Plan Year
  private checkSwithPlanYear = new BehaviorSubject('');
  checkSelectedPlanYear = this.checkSwithPlanYear.asObservable();
  //Start : Check Selected Plan Year

  // Strat Code to get campaignmanagerID
  private campaignManagerUUID = new BehaviorSubject('');
  currentcampaignManagerUUID = this.campaignManagerUUID.asObservable();
  // End Code : to get campaignmanagerID


  // Strat Code to get CampaignUUID
  private campaignUUID = new BehaviorSubject('');
  currentcampaignUUID = this.campaignUUID.asObservable();
  // End Code : to get CampaignUUID

  // Strat Code to get CampaignUUID
  private campaignCommentUUID = new BehaviorSubject('');
  currentcampaignCommentUUID = this.campaignCommentUUID.asObservable();
  // End Code : to get CampaignUUID


  // Strat Code to parentGoalLocation value
  private parentGoalLocationStatus = new BehaviorSubject(true);
  currentParentGoalLocationStatus = this.parentGoalLocationStatus.asObservable();
  // End Code : Code to parentGoalLocation value

  //Start parentGoallocation status on edit campaign
  private enableGoalLocation = new BehaviorSubject(true);
  checkEnableGoalLocationStatus = this.enableGoalLocation.asObservable();
  // End parentGoallocation status on edit campaign

  // Strat Code to get CampaignUUID
  private selectedCampaignUUID = new BehaviorSubject('');
  currentselectedCampaignUUID = this.selectedCampaignUUID.asObservable();
  // End Code : to get CampaignUUID

  constructor() { }

  changeItemUUID(itemuuid: string) {

    this.itemUUID.next(itemuuid);
  }
  changeTitle(itemtitle: string) {

    this.titleSource.next(itemtitle);
  }

  setData(key: string) {
    this.sourceData.next(key);
  }
  setSpinner(spinnerValue: string) {
    this.spinnerDisplay.next(spinnerValue);
  }

  setActiveCaseSpinner(spinnerValue: string) {
    this.activespinnerDisplay.next(spinnerValue);
  }
  // start : Notification Message
  getNotificationMessage(NotificationMessage: string) {
    this.Notificationmesseage.next(NotificationMessage)

  }

  //start : Current Claim Type
  getCurrentClaimType(ClaimType: string) {
    this.currentClaimType.next(ClaimType)

  }
  // end  : Current Claim Type

  //   //start : Current Claim Type
  getcurrentnodelevel(nodeLevel: string) {
    this.currentNodelevel.next(nodeLevel)
 }

  // Start : Current PlanItem
  getCurrenPlanItem(PlanItem: string) {
    this.currentPlanItem.next(PlanItem);
  }
  // End  : Current PlanItem

  //// start : Notification UUID
  getNotificationUUID(NotificationUUID: string) {
    this.NotificationUUID.next(NotificationUUID);

  }

  getPlanLibraryUUID(PlanLibraryUUID: string) {

    this.PlanLibraryUUID.next(PlanLibraryUUID);
  }

  //// start : Alert UUID
  getAlertId(AlertID: string) {
    this.AlertID.next(AlertID)

  }

  getCurrentNotificationUser(CurrentUserbyUUID: string) {
    this.CurrentUserName.next(CurrentUserbyUUID)

  }

  // end : Notification Message

  changeActiveCaseUUID(activeCaseUUID: string) {
    this.activeCaseUUID.next(activeCaseUUID);
  }

  changecheckUpdateStatus(checkUpdateStatus: string) {
    this.checkUpdateStatus.next(checkUpdateStatus);
  }

  changeParentCommentUUID(caseCommentUUid: string) {
    this.caseCommentUUid.next(caseCommentUUid);
  }

  changeParentCaseItemUUID(caseItemUUID: string) {
    this.caseItemUUID.next(caseItemUUID);
  }



  // CaseClaimID
  changecaseClaimUUid(caseClaimUUid: string) {
    this.caseClaimUUid.next(caseClaimUUid);
  }

  // campaign pop up display
  changepopupdisplayStatus(popupDisplay: string) {
    this.popupDisplay.next(popupDisplay);
  }

  changeNavigationCountData(caseCountObject: number) {
    this.navigationCount.next(caseCountObject);
  }


  getActiveCaseClientUUIDUpdate(activeCaseClientUUIDData: string) {
    this.activeCaseClientUUID.next(activeCaseClientUUIDData);
  }

  getActiveCaseAssignManagerUUID(activeCaseAssignManagerUUIDData: string) {
    this.activeCaseAssingManagerUUID.next(activeCaseAssignManagerUUIDData);
  }

  setCurrentActiveLoaderStatus(activeLoaderSpinnerData: boolean) {
    this.spendingLoaderStatus.next(activeLoaderSpinnerData);
  }

  setCurrentCatalystActiveLoaderStatus(activeCatalystLoaderSpinnerData: boolean) {
    this.catalystLoaderStatus.next(activeCatalystLoaderSpinnerData);
  }

  // Start : Selection of plans from campaign for navigation
  setSelectedPlanItemForCampaigns(PlanItemForCampaign: string) {
    this.currentPlanItemForCampaign.next(PlanItemForCampaign);
  }
  // End  :Selection of plans from campaign for navigation

  // Start : Selection of plans from campaign for navigation
  setChildSelectedPlanItemForCampaigns(selectedChildPlanItem: boolean) {
    this.currentSelectedChildPlanItemForCampaign.next(selectedChildPlanItem);
  }
  // End  :Selection of plans from campaign for navigation

  // Start : Saving the selected campaignId for saving campaigns
  setChildSelectedCampaignItemForCampaigns(campaignId: string) {
    this.currentSelectedCampaignIdForCampaign.next(campaignId);
  }
  // End  :Saving the selected campaignId for saving campaigns

  // Start : Saving the selected campaignId for saving campaigns
  setChildSelectedPlanLibraryItemIdForCampaigns(planLibraryUUId: string) {
    this.currentSelectedPlanLibraryUUIdForCampaign.next(planLibraryUUId);
  }
  // End  :Saving the selected campaignId for saving campaigns

  // Start : Saving the selected campaignName for saving campaigns
  setChildSelectedPlanLibraryItemNameForCampaigns(planLibraryName: string) {
    this.currentSelectedPlanLibraryNameForCampaign.next(planLibraryName);
  }
  // End  :Saving the selected campaignName for saving campaigns

  // Start : Saving the selected campaignId for saving campaigns
  setChildSelectedPlanLibraryItemIsCampaignVariableForCampaigns(planLibraryisCampaingValue: string) {
    this.currentSelectedPlanLibraryIsCampaignValueForCampaign.next(planLibraryisCampaingValue);
  }
  // End  :Saving the selected campaignId for saving campaigns

  // Start : Saving the selected campaignName for saving campaigns
  setCampaignChildSelectedPlanLibraryItemNameForCampaigns(planLibraryName: string) {
    this.currentCampaignSelectedPlanLibraryNameForCampaign.next(planLibraryName);
  }
  // End  :Saving the selected campaignName for saving campaigns


  // Start : Check for Switch Client
  setCheckClientUserUUID(clientUUID: string) {
    this.checkSwitchClientStatus.next(clientUUID);
  }
  // End  :Check for switch client

  // Start : Check for Switch Client
  setCheckBenefitPlanCallback(callback: string) {
    this.checkBenefitPlanCallbackStatus.next(callback);
  }
  // End  :Check for switch client

  // Start : Check for loader status from tree to create campaign screen
  setCheckLoaderStatus(loaderStatus: boolean) {
    this.checkForLoaderStatus.next(loaderStatus);
  }
  // End  :Check for loader status from tree to create campaign screen

  // Start : Check change for the case creation through campaign navigator
  setStatusForCaseCreateCampaignFromNavigator(caseCreateStatus: string) {
    this.checkForCaseCreationStatus.next(caseCreateStatus);
  }
  // End  :Check change for the case creation through campaign navigator

  // Start : check if campaign for particular client has been created or not
  setIfCampaignIsAlreadyCreatedOrNot(checkCampaignStatus: string) {
    this.checkIfCampaignExistsOrNot.next(checkCampaignStatus);
  }
  // End  :check if campaign for particular client has been created or not
  
  // Start : Check change for the case creation through campaign navigator
  setStatusForCaseCreateComponentFromNavigator(caseCreateStatus: string) {
    this.checkForCaseCreationComponentStatus.next(caseCreateStatus);
  }
  // End  :Check change for the case creation through campaign navigator


  // Start : Check reply comment through campaign navigator
  setStatusForReplyCommentFromNavigator(replyCommentStatus: string) {
    this.checkForReplyComment.next(replyCommentStatus);
  }
  // End  :Check reply comment through campaign navigator

  // Start : Check add comment through campaign navigator
  setStatusForAddCommentFromNavigator(addCommentStatus: string) {
    this.checkForAddComment.next(addCommentStatus);
  }
  // End  :Check add comment through campaign navigator

  // Start : Check add comment through campaign navigator
  setStatusForCommentTreeFromNavigator(commentTreeStatus: string) {
    this.checkForCommentTree.next(commentTreeStatus);
  }
  // End  :Check add comment through campaign navigator


  // Start : Check change for the case creation through campaign navigator
  setStatusForUpdateCampaignDisplayStausFromNavigator(updateiconStatus: string) {
    this.checkForUpdateIcondisplayStatus.next(updateiconStatus);
  }
  // End  :Check change for the case creation through campaign navigator

  // Start : Check change for the case creation through campaign navigator
  setSwitchPlanYear(switchplanYear: string) {
    this.checkSwithPlanYear.next(switchplanYear);
  }
  // End  :Check change for the case creation through campaign navigator

  // Start : Check change for the case creation through campaign navigator
  setCampaignmanagerUUID(campaignmanagerUUID: string) {
    this.campaignManagerUUID.next(campaignmanagerUUID);
  }
  // End  :Check change for the case creation through campaign navigator

  // Start : used to set campaignUUID
  setCampaigUUID(campaignUUID: string) {
    this.campaignUUID.next(campaignUUID);
  }
  // End : used to set campaignUUID

  // Start : used to set campaignUUID
  setCampaignCommentUUID(campaigncommentUUID: string) {
    this.campaignCommentUUID.next(campaigncommentUUID);
  }
  // End : used to set campaignUUID

  // Start : used to set campaignUUID
  setSelectedCampaignUUID(currentCampUUID: string) {
    this.selectedCampaignUUID.next(currentCampUUID);
  }
  // End : used to set campaignUUID

  // Start : used to set campaignParentGoalLocation
  setCurrentcampaignParentGoalLocationStatus(campaignParentGoalLocation: boolean) {
    this.parentGoalLocationStatus.next(campaignParentGoalLocation);
  }
  // End : used to set campaignParentGoalLocation

  // Start : used to set goal location Status
  setEnableGoalLocation(goalLocation: boolean) {
    this.enableGoalLocation.next(goalLocation);
  }
  // End : used to set goal location Status

}
