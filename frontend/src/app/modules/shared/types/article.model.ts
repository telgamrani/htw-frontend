import { LookArticleAssociationType } from '../enums/look-article-association-type.enum';

export class Article {

    id: number

    shoppingSiteName: string;
	
	shoppingUrl: string;
	
    imgUrl: string;

    images: Array<string>;
    
    brand: string;

    description: string;
	
    price: number;
    
    lookArticleAssociationType: LookArticleAssociationType;

    rank: number;
}
