import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AddTourBusService} from '../../services/add-tour-bus.service';

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
  @Input()
  selectedKmlName: string;

  constructor(private httpClient: HttpClient, private addTourBusService: AddTourBusService) {
  }

  ngOnInit(): void {
  }

  public onFileChanged(event): void {
    // Select File
    this.selectedFile = event.target.files[0];
    if (this.selectedFile && this.selectedFile.name) {
      this.selectedKmlName = this.selectedFile.name;
    }
    this.addTourBusService.setTourKml(this.selectedFile);
  }
}
