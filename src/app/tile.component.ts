
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'tileComp',
    template: `<div>
                <ul *ngFor="let item of code">
                    <li>{{item}}</li>
                </ul>
                </div>`
})

export class TileComponent implements OnInit {
    @Input() code: Array<string>;
    constructor() { }

    ngOnInit() { }
}