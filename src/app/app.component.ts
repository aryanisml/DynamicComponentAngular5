import { products } from './product';
import { KendoGridComponent } from './kendogrid.component';
import { TileComponent } from './tile.component';
import { MessageComponent } from './message.component';
declare var require: any;
import { Component, OnInit, ViewEncapsulation,
ViewChild,
ViewContainerRef,
ComponentFactoryResolver,
ComponentRef,
ComponentFactory } from '@angular/core';

//const MockData: any = require('../assets/data/mapData.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Dynamic Load App';
  @ViewChild('messagecontainer', {read:ViewContainerRef}) 
  entry: ViewContainerRef;
  componentRef:any;
  constructor(private resolver: ComponentFactoryResolver) {
  
  }
  ngOnInit() {
   
  }
  ngOnDestroy(): void {

  }
  CreateComponent(message){
    this.entry.clear();
    const factory= this.resolver.resolveComponentFactory(MessageComponent);
    this.componentRef= this.entry.createComponent(factory);
    this.componentRef.instance.data=products;
  }
  AnotherComponent() {
    this.entry.clear();
    const factory= this.resolver.resolveComponentFactory(TileComponent);
    this.componentRef= this.entry.createComponent(factory);
    this.componentRef.instance.code=["Swapnil","Test","Test2"];

}

LoadGrid(){
    this.entry.clear();
    const factory= this.resolver.resolveComponentFactory(KendoGridComponent);
    this.componentRef= this.entry.createComponent(factory);
    this.componentRef.instance.gridData= products;

  
}

}
