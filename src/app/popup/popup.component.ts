// import { Component, OnInit } from '@angular/core';
// import {}

// // @Component({
// //   selector: 'ngbd-modal-basic',
// //   templateUrl: './modal-basic.html'
// // })
// @Component({
//   selector: 'app-popup',
//   templateUrl: './popup.component.html',
//   styleUrls: ['./popup.component.css']
// })
// // export class NgbdModalBasic {







// export class PopupComponent implements OnInit {
//   closeResult = '';
//   constructor(private modalService: NgbModal) {}

//   ngOnInit(): void {
//   }
//   open(content:any ) {
//     this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
//       this.closeResult = `Closed with: ${result}`;
//     }, (reason) => {
//       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//     });
//   }

//   private getDismissReason(reason: any): string {
//     if (reason === ModalDismissReasons.ESC) {
//       return 'by pressing ESC';
//     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//       return 'by clicking on a backdrop';
//     } else {
//       return `with: ${reason}`;
//     }
//   }
// }
// }
