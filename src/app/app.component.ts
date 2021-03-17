import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  width = 600;
  height = 500;
  color1 = 'red';
  color2 = 'yellow';
  percentColor1 = 0;
  percentColor2 = 100;
  fontSize = 52;


  layout = {
    horizontal: false,
    horizontalRev: false,
    vertical: false,
    verticalRev: false,
  };
  
  colors = [
    'red',
    'purple',
    'blue',
    'green',
    'yellow',
    'brown',
    'grey',
    'black',
  ];

  getBannerStyles() {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`,
      backgroundImage: `linear-gradient(to bottom, ${this.color1} ${this.percentColor1}%, ${this.color2} ${this.percentColor2}%)`,
    };
  }

  setLayout(selectedLayout: string) {
    this.layout = {
      horizontal: false,
      horizontalRev: false,
      vertical: false,
      verticalRev: false,
    };
      this.layout = ({...this.layout, [selectedLayout] : true});
    }

  saveImage(element: HTMLDivElement) {
    domtoimage.toBlob(element).then(blob => saveAs(blob));
  }
  ngOnInit(){
    this.setLayout('vertical')
  } 
}