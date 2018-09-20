import { Component, OnInit, AfterViewInit } from "@angular/core";

@Component({
    selector: "app-twitter",
    templateUrl: "./twitter.component.html",
    styleUrls: ["./twitter.component.scss"]
  })
  export class TwitterComponent implements OnInit, AfterViewInit {
    constructor() {}
  
    ngOnInit(): void {}
    
    ngAfterViewInit () {
      !function(d,s,id){
          var js: any,
              fjs=d.getElementsByTagName(s)[0],
              p='https';
          if(!d.getElementById(id)){
              js=d.createElement(s);
              js.id=id;
              js.src=p+"://platform.twitter.com/widgets.js";
              fjs.parentNode.insertBefore(js,fjs);
          }
      }
      (document,"script","twitter-wjs");
}
  }
  