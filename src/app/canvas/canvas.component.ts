import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fabric } from 'fabric';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss',
})
export class CanvasComponent implements AfterViewInit {
  canvas?: fabric.Canvas;

  constructor() {}

  ngAfterViewInit(): void {
    this.canvas = new fabric.Canvas('canvas');

    const text = new fabric.Textbox('Hello World', {
      width: 200,
      height: 100,
      fontSize: 24,
      cursorColor: 'blue',
      left: 50,
      top: 50,
    });

    this.canvas.add(text);
  }
}
