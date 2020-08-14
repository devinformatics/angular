/** Global  Variables and Classes **/

export class AppConfig {
  
  
}

// Application class defining item types in the system

export class WnctyItemType {
  id: number;
  title: string;
  style: string;

  constructor(id: number, title: string, style: string) {
    this.id = id;
    this.title = title; // mComp, comp, widget, navItem, alert, notification, etc
    this.style = style; // bg-plan
  }
}

// Application class defining items in the system

export class WnctyUIItem {
  id: number;
  title: string;
  style: string;
  target: string;
  typeID: number;
  parentID: number;

  constructor(id: number, title: string, style: string, target: string, typeID: number, parentID: number) {
    this.id = id;
    this.title = title; // Base & Savings Plans
    this.style = style; // bg-plan
    this.target = target; // <app-body>
    this.typeID = typeID; // from  WnctyItemType = mComp, comp, appControl, navItem, etc
    this.parentID = parentID;
  }
}


