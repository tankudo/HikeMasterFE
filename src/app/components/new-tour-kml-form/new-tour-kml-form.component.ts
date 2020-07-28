import { Component, OnInit } from '@angular/core';
import {AddTourResponse} from "../../interfaces/add-tour-response";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-new-tour-kml-form',
  templateUrl: './new-tour-kml-form.component.html',
  styleUrls: ['./new-tour-kml-form.component.scss']
})
export class NewTourKmlFormComponent implements OnInit {
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  addTourResponse: AddTourResponse;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    console.log(this.selectedFile);
    //Elküldés
    const uploadImageData = new FormData();
    uploadImageData.append('file', this.selectedFile, this.selectedFile.name);

    //elkülés Url-re
    this.httpClient.post(environment.apiEndpoint+'/createHikeRoute', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Image uploaded successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
        }
      );
  }
}
