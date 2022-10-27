import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('canvas') canvas!: HTMLCanvasElement;

  constructor() {}

  ngOnInit(): void {
    // load vendor sprite
    const vendorSprite = document.createElement('img');
    vendorSprite.src =
      '/assets/images/craftpix-net-734199-free-halloween-decorations-characters-and-items-pixel-art/2 Animated objects/Vendor4.png';
    vendorSprite.onload = () => {
      console.log('Loaded vendor sprite');
      window.requestAnimationFrame(this.drawPlayer);

      console.log('>>> Canvas', this.canvas);
    };
  }

  drawPlayer(): void {

  }
}
