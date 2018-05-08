import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'message',
    template: `<div class="row" style="overflow-y:auto; height:100%">
        <ng-template ngFor let-data [ngForOf]="data" let-i="index">
        <div style="min-width:20%; max-width:20%; padding: 3px 27px;height: 35vh;" class="col">
         <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{data.ProductName}}</h5>
    <p class="card-text">{{data.QuantityPerUnit}}</p>
  </div>
  </div>
</div>
        </ng-template>
    </div>
    `
})

export class MessageComponent implements OnInit {
    @Input() data: any;
    constructor() { }

    ngOnInit() { }
}