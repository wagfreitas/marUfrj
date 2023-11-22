import { Component, OnInit } from '@angular/core';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-home',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.css']
})
export class ChangelogComponent implements OnInit {

  @BlockUI('changelog') blockUIChangelog: NgBlockUI;

  public breadcrumb: any;
  options = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  constructor() { }

  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Log de Alteracão',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/sales'
        },
        {
          'name': 'Log de AlteraçãO',
          'isLink': false,
          'link': '#'
        },
      ]
    };
  }

  reloadChangelog() {
    this.blockUIChangelog.start('Loading..');

    setTimeout(() => {
      this.blockUIChangelog.stop();
    }, 2500);
  }
}
