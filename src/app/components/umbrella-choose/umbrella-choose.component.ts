import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbCalendar, NgbDate, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UmbrellaModalComponent } from '../modal/umbrella-modal/umbrella-modal.component';

@Component({
  selector: 'app-umbrella-choose',
  templateUrl: './umbrella-choose.component.html',
  styleUrls: ['./umbrella-choose.component.scss']
})
export class UmbrellaChooseComponent implements OnInit {

  umbrellaInfo = UmbrellaModalComponent;

  isSelected=false;

  model: NgbDateStruct | null = null;

  umbrellaList : any[] = [
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-red-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-red-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-red-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
    {
      src : "assets/umbrella-green-icon.png"
    },
  ];

  constructor( private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  openGenericModal(content:any){
    const modalRef = this.modalService.open(content, {  centered: true, size: 'md', ariaLabelledBy: 'modal-basic-title'});
    modalRef.componentInstance.data = '';

  }

  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (
      reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}





}
