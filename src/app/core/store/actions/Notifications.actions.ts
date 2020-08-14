

import { Action } from '@ngrx/store';
// import type function
import { type } from '../utils';


export const NotificationActionTypes = {
  // Start : Get Notification
  GET_NOTIFICATIONS_BY_USER: type('[getNotification] GetNotificationByUser'),
  GET_NOTIFICATIONS_BY_USER_FAILURE: type('[getNotification] GetNotificationByUser error'),
  GET_NOTIFICATIONS_BY_USER_SUCCESS: type('[getNotification] GetNotificationByUser success'),

  // Start Update Notification Status
  UPDATE_NOTIFICATION_STATUS: type('[updateNotificationbucomUUID] UpdateNotificationBycomUUID'),
  UPDATE_NOTIFICATION_STATUS_FAILURE: type('[updateNotificationbucomUUID] UpdateNotificationBycomUUID error'),
  UPDATE_NOTIFICATION_STATUS_SUCCESS: type('[updateNotificationbucomUUID] UpdateNotificationBycomUUID success'),
}
// Start : Get Notification by User
export class GetNotificationByUser implements Action {
  readonly type: string = NotificationActionTypes.GET_NOTIFICATIONS_BY_USER;
  constructor(public payload: any, public uProfileId: any) { }
}
export class GetNotificationByUserSuccess {
  readonly type = NotificationActionTypes.GET_NOTIFICATIONS_BY_USER_SUCCESS;
  constructor(public payload: any) { }
}
export class GetNotificationByUserFailure {
  readonly type = NotificationActionTypes.GET_NOTIFICATIONS_BY_USER_FAILURE;
  constructor(public payload: any) { }
}

// Start UpdateNotificationbyComUUID
export class UpdateNotificationBycomUUID implements Action {
  readonly type: string = NotificationActionTypes.UPDATE_NOTIFICATION_STATUS
  constructor(public payload: any, public uCommunicatioID: any,public uProfileId: any) { }
}
export class UpdateNotificationBycomUUIDSuccess {
  readonly type = NotificationActionTypes.UPDATE_NOTIFICATION_STATUS_SUCCESS;
  constructor(public payload: any) { }
}
export class UpdateNotificationBycomUUIDFailure {
  readonly type = NotificationActionTypes.UPDATE_NOTIFICATION_STATUS_FAILURE;
  constructor(public payload: any) { }
}

// End UpdateNotificationbyComUUID



export type NotificationData = GetNotificationByUser | GetNotificationByUserSuccess | GetNotificationByUserFailure | UpdateNotificationBycomUUID | UpdateNotificationBycomUUIDSuccess | UpdateNotificationBycomUUIDFailure ;




