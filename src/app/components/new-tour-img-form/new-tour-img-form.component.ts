import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
@Component({
  selector: 'app-new-tour-img-form',
  templateUrl: './new-tour-img-form.component.html',
  styleUrls: ['./new-tour-img-form.component.scss']
})
export class NewTourImgFormComponent implements OnInit {
  selectedFile: File;
  retrievedImage: any;
  message: string;

  @Input()
  tourId: number;

  constructor(private httpClient: HttpClient) {
  }

  // felhasználó kiválaszt egy képet
  public onFileChanged(event): void {
    // Select File
    this.selectedFile = event.target.files[0];
  }

  // beküldés
  onUpload(): void {
    console.log(this.selectedFile);

    // Elküldés
    const uploadImageData = new FormData();
    uploadImageData.append('file', this.selectedFile, this.selectedFile.name);
    // elküldés Url-re

    this.httpClient.post(
      environment.apiEndpoint + '/image/' + this.tourId + '/upload',
      uploadImageData,
      { observe: 'response' }
    ).subscribe((response) => {
      if (response.status === 200) {
        this.message = 'Image uploaded successfully';
      } else {
        this.message = 'Image not uploaded successfully';
      }
    });
  }
  // kép megjelenítése
  /*
  getImage() {
    //kép megtekintse
    this.httpClient.get('http://localhost:8080/get/image' + this.imageName)
      .subscribe(
    res => {
      this.retrieveResonse = res;
      this.base64Data = this.retrieveResonse.picByte;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    }
  );
  }
*/
ngOnInit(): void {
  }

}
