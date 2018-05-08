import { Component, OnInit,Input } from '@angular/core';

@Component({
    selector: 'message',
    template: `<h2>{{data}}</h2>`
})

export class MessageComponent implements OnInit {
    @Input() data:any;
    constructor() { }

    ngOnInit() { }
}