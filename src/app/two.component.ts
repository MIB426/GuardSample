import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  checked: boolean;
  constructor() { }

  canDeactivate() {
    return this.checked;
  }
  checkboxChanged(checked) {
    this.checked = checked;
  }


  ngOnInit() {
  }

}
