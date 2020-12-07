import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Camera, CameraResultType, CameraSource, Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  @ViewChild('filePicker', { static: false }) filePickerRef: ElementRef<HTMLInputElement>;
  photo: SafeResourceUrl;
  isDesktop: boolean;
  constructor(
    private platform: Platform,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    if((this.platform.is('mobile') && 
      this.platform.is('hybrid')) || 
      this.platform.is('desktop')){
        this.isDesktop = true;
    }
  }


  async getPicture(type: string){
    if(!Capacitor.isPluginAvailable('Camera') ||
      (this.isDesktop && type === 'galery')){
        this.filePickerRef.nativeElement.click();
        return;
    }

    const image = await Camera.getPhoto({
      quality: 100,
      width: 400,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });
    
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }
}
