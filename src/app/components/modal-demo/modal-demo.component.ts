import { Component, OnInit } from '@angular/core';
import { ModalService } from './_service';

@Component({
  selector: 'app-modal-demo',
  templateUrl: './modal-demo.component.html',
  styleUrls: ['./modal-demo.component.css']
})
export class ModalDemoComponent implements OnInit {

  public bodyText: string;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }

  openModal(id: string) {
      this.modalService.open(id);
  }

closeModal(id: string) {
    this.modalService.close(id);
}
 
}
