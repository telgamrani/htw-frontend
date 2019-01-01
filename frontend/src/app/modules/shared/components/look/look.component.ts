import { Component, OnInit, Input } from '@angular/core';
import { Look } from '../../types/look.model';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-htw-look',
  templateUrl: './look.component.html',
  styleUrls: ['./look.component.css']
})
export class LookComponent implements OnInit {

  @Input() look: Look;
  @Input() moreChoiceButtonEnabled = true;

  get imageLookPath() {
    return this._sanitizer.bypassSecurityTrustUrl(environment.imageLookRootPath.concat(this.look.imgUrl));
  }
 
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
