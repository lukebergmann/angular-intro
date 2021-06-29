import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string; };
  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }
  ngDoCheck() {
    console.log('DoCheck called');
  }
  ngAfterContentInit() {
    console.log('After Content Init called');
  }
  ngAfterContentChecked() {
    console.log('after content checked called')
  }
  ngAfterViewInit() {
    console.log('After view Init called');
  }
  ngAfterViewChecked() {
    console.log('after view checked called')
  }
  ngOnDestroy(){
    console.log("ngOnDestroy Called")
  }
}
