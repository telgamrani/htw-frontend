import { Component, OnInit, Input } from '@angular/core';
import { Look } from '../../types/look.model';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { LookArticleAssociationType } from '../../enums/look-article-association-type.enum';
import { Article } from '../../types/article.model';

@Component({
  selector: 'app-htw-look',
  templateUrl: './look.component.html',
  styleUrls: ['./look.component.css']
})
export class LookComponent implements OnInit {

  public lookArticleAssociationType = LookArticleAssociationType;

  @Input() look: Look;
  @Input() moreChoiceButtonEnabled = true;

  get imageLookPath() {

    if(!this.look) {
      return;
    }
    
    return this._sanitizer.bypassSecurityTrustUrl(environment.imageLookRootPath.concat(this.look.imgUrl));
  }
 
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  counter(size: number) {
    return new Array(size);
  }

  getArticleByRankAndLookArticleAssociationType(rank: number, lookArticleAssociationType: LookArticleAssociationType){

    let article;

    const foundIndex = this._getArticleIndexByRank(rank, lookArticleAssociationType);

    if(foundIndex > -1) {
      article = this.look.articles[foundIndex];
    }

    return article;
  }

  private _getArticleIndexByRank(rank: number, lookArticleAssociationType: LookArticleAssociationType): number {
    let foundIndex = -1;
    foundIndex = this.look.articles.findIndex((a: Article) => a.rank === rank && a.lookArticleAssociationType === lookArticleAssociationType);
    return foundIndex;
  }

}
