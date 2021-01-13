import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AugmentModalComponent } from './augment-modal/augment-modal.component';
import { ConsultancyModalComponent } from './consultancy-modal/consultancy-modal.component';
import { HardwareModalComponent } from './hardware-modal/hardware-modal.component';
import { NetworkingModalComponent } from './networking-modal/networking-modal.component';
import { SoftwareModalComponent } from './software-modal/software-modal.component';
import { SystemModalComponent } from './system-modal/system-modal.component';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onHardware(){
    this.dialog.open(HardwareModalComponent);  
  }

  onSoftware(){
    this.dialog.open(SoftwareModalComponent); 
  }

  onSystem(){
    this.dialog.open(SystemModalComponent);
  }

  onConsult(){
    this.dialog.open(ConsultancyModalComponent);
  }

  onAugment(){
    this.dialog.open(AugmentModalComponent);
  }

  onNetwork(){
    this.dialog.open(NetworkingModalComponent);
  }

}
