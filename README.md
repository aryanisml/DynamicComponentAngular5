# Dynamic Component Creation
1. Import 
ViewChild,
ViewContainerRef,
ComponentFactoryResolver,
ComponentRef,
ComponentFactory 

From @angular/core

2. @ViewChild('messagecontainer', {read:ViewContainerRef}) 
  entry: ViewContainerRef;
  componentRef:any;
  
  
3. constructor(private resolver: ComponentFactoryResolver) {

  }  
  
4.  In Function write the below code.   
	this.entry.clear();
    const factory= this.resolver.resolveComponentFactory(TileComponent);
    this.componentRef= this.entry.createComponent(factory);
    this.componentRef.instance.code=["Swapnil","Test","Test2"];
  