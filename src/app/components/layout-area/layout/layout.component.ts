import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public test: boolean 

   public isPlay = false;





public arr: ["../../../../assets/just-relax-11157.mp3",
 "../../../../assets/drums_120bpm.mp3",
  "../../../../assets/clip-3-muzica-pentru-film-cinematic-24-biti-wav-120-bpm-104-min-9014.mp3",
"../../../../assets/home-for-the-holidays-120-bpm-11037.mp3",
 "../../../../assets/waltz-in-4x4-beat-120-bpm-10449.mp3",
  "../../../../assets/219255__radiopassiveboy__tambourine-loop-120bpm.wav",
"../../../../assets/235836__waveplaysfx__drumloop-120-bpm-edm-hat-loop-007.wav",
 "../../../../assets/background-music-120-bpm-10441.mp3",
  "../../../../assets/clip-2-muzica-pentru-reclama-film-24-biti-wav-120-bpm-9013.mp3"]




  


  constructor() { }

  ngOnInit(): void {

  }
}
