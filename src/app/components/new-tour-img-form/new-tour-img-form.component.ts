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
  retrievedImage: any;
  message: string;

  @Input()
  tourId: number;

  constructor(private httpClient: HttpClient, private addTourBusService: AddTourBusService) {
  }

  // felhasználó kiválaszt egy képet
  public onFileChanged(event): void {
    // Select File
    this.selectedFile = event.target.files[0];
    this.addTourBusService.setTourImg(this.selectedFile);
  }

  ngOnInit(): void {}

}
