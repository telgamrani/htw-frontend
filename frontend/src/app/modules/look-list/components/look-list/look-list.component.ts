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

  constructor(private lookService: LookService) { }

  ngOnInit() {
    this.lookService.getLooks().subscribe(
      response => this.looks = response
    );
  }

}
