import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-new-tour-kml-form',
  templateUrl: './new-tour-kml-form.component.html',
  styleUrls: ['./new-tour-kml-form.component.scss']
})
export class NewTourKmlFormComponent implements OnInit {
  selectedFile: File;
  retrievedImage: any;
  message: string;

  @Input()
  tourId: number;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  public onFileChanged(event): void {
    // Select File
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    console.log(this.selectedFile);
    // Elküldés
    const uploadImageData = new FormData();
    uploadImageData.append('file', this.selectedFile, this.selectedFile.name);

    // elkülés Url-re
    this.httpClient.post(environment.apiEndpoint + '/kml/' + this.tourId + '/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'KML uploaded successfully';
          } else {
            this.message = 'KML not uploaded successfully';
          }
        }
      );
  }
}
