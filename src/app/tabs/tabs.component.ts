import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  constructor() { }

  ngOnInit() {
    console.log("List of tabs: init.. ", this.tabs);
  }

  /**
  * This is needed because of content projection. ngOnInit wouldn't work.
  /* Respond after Angular projects external content into the component's view.
  /*https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
  */
  ngAfterContentInit() {
    let activeTabs = this.tabs.filter((tab) => tab.isActive);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.last);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach((tab) => {
      tab.isActive = false;
    });

    tab.isActive = true;
  }

}
