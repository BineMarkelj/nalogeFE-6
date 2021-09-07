import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'naloga6';
  opened!: boolean;
  screensize!: number;
  smallerScreen: boolean = false;
  //itemsArray: any[] | undefined;
  itemsArray= [1,1,1,1,1,1,1,1,1];
  itemsArray1= [1,1,1,1];
  scrollYCurrent: number = 0;
  selected = 'none';
  gridColumns = 3;
  filtered: boolean = false;


  goToError() {
    alert("Not finished yet, because it's just a dummy website! :)");
  }


  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  filterChange(event: any) {
    //console.log(event);
    if (event.value === "price") {
      this.filtered = true;
      this.itemsArray= [1,1,1,1,1,1,1,1,1];
    } else if (event.value === "none") {
      this.filtered = false;
      this.itemsArray= [1,1,1,1,1,1,1,1,1];
    }
  }


  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
    this.screensize = window.innerWidth;
    //console.log(window.innerWidth);
    if (this.screensize < 1000) {
      this.smallerScreen = true;
    } else {
      this.smallerScreen = false;
    }
}


@HostListener('window:scroll', ['$event']) 
onScroll(event: any) {
  //console.log(window.innerHeight + window.pageYOffset);
  //console.log(document.body.scrollHeight);

    if (window.innerHeight + window.pageYOffset >= document.body.scrollHeight-50) {
      //console.log("end");
      this.itemsArray.push(1,1,1);
    }
}


changeHeight() {
  let element = document.getElementById("toolbar");
  if (element !== null && element.classList.contains("bigger")) {
    element.classList.remove("bigger");
  } else if (element !== null) {
    element.classList.add("bigger");
  }
}

ngOnInit() {
  
//console.log(this.itemsArray);


  this.screensize = window.innerWidth;
  if (this.screensize < 1000) {
    this.smallerScreen = true;
  } else {
    this.smallerScreen = false;
  }
}
  
}


