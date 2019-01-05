import { Component, OnInit } from '@angular/core';
import { LookService } from 'src/app/modules/shared/services/look.service';
import { Look } from 'src/app/modules/shared/types/look.model';

@Component({
  selector: 'app-htw-look-list',
  templateUrl: './look-list.component.html',
  styleUrls: ['./look-list.component.css']
})
export class LookListComponent implements OnInit {

  looks: Array<Look>;
  page = 0;
  showLoadingIndicatorSpinner = false; 

  constructor(private lookService: LookService) { }

  ngOnInit() {
    this.lookService.getLooksByPage(this.page).subscribe(
      (response) => this.looks = response,
      (error) => {},
      () => {
        this.showLoadingIndicatorSpinner = false;
      }
    );
  }

  onScroll(){
    this.page++;
    this.showLoadingIndicatorSpinner = true;
    this.lookService.getLooksByPage(this.page).subscribe(
      (response) => {
        if(response && Array.isArray(response) && response.length ) {
          this.looks = this.looks.concat(response);
        }
      },
      (error) => {},
      () => {
        this.showLoadingIndicatorSpinner = false;
      }
    );
  }

}
