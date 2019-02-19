import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Article } from '../../types/article.model';
import { PriceUtilService } from '../../utils/price-util.service';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-htw-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;

  priceWholePart: string;
  priceDecimalPart: string;

  constructor(private _priceUtil: PriceUtilService) { }

  ngOnInit() {
    if(this.article) {
      this._initPriceWholeAndDecimalPart();
    }
  }

  private _initPriceWholeAndDecimalPart() {
    const priceWholeAndDecimalPart = this._priceUtil.getWholeAndDecimalPart(this.article.price);
    this.priceWholePart = priceWholeAndDecimalPart.wholePart;
    this.priceDecimalPart = priceWholeAndDecimalPart.decimalPart;
  }

}
