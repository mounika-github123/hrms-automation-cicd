import { Component, OnInit,HostListener, NgZone } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
@HostListener('window: resize', ['$event'])
export class SalesComponent implements OnInit {

  public innerHeight: any;
  getScreenHeight() {
    this.innerHeight = window.innerHeight + 'px';
  }

  constructor(private ngZone: NgZone) {
    window.onresize = (e) => {
      this.ngZone.run(() => {
        this.innerHeight = window.innerHeight + 'px';
      });
    };
    this.getScreenHeight();
  }

  ngOnInit() {
  }

  onResize(event:any) {
    this.innerHeight = event.target.innerHeight + 'px';
  }
}
