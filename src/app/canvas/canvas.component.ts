import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  fabricCanvas?: fabric.Canvas;

  constructor() {}

  ngAfterViewInit(): void {
    this.fabricCanvas = new fabric.Canvas(this.canvas.nativeElement);

    const text = new fabric.Rect({
      backgroundColor: 'red',
    });

    this.fabricCanvas.add(text);
  }
}
