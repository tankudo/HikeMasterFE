import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AddTourBusService} from '../../services/add-tour-bus.service';

@Component({
  selector: 'app-new-tour-img-form',
  templateUrl: './new-tour-img-form.component.html',
  styleUrls: ['./new-tour-img-form.component.scss']
})
export class NewTourImgFormComponent implements OnInit {
  selectedFile: File;
  selectedFiles: File[];
  retrievedImage: any;
  message: string;
  selectedFileName: string;

  @Input()
  tourId: number;
  @Input()
  selectedFileNames: string[] = [];

  constructor(private httpClient: HttpClient, private addTourBusService: AddTourBusService) {
  }

  // felhasználó kiválaszt egy képet
  public onFileChanged(event): void {
    // Select File
    this.selectedFile = event.target.files[0];
    if (this.selectedFile && this.selectedFile.name) {
      this.selectedFileName = this.selectedFile.name;

      console.log('File: ' + this.selectedFileName + ' Array: ' + this.selectedImgNames);
    }
    this.addTourBusService.setTourImg(this.selectedFile);
  }

  ngOnInit(): void {
  }

  get selectedImgNames(): string[] {
    this.selectedFileNames.push(this.selectedFile.name);
    return this.selectedFileNames;
  }

  get selectedFilesList(): File[] {
    if (this.selectedFile) {
      this.selectedFiles.push(this.selectedFile);
    }
    return this.selectedFiles;
  }

}
