import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Look } from '../../shared/types/look.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LookService {

  looksStorage: Array<Look>;

  private lookUrl = environment.api.concat('/look');
  private getAction = '/get';
  private getAllPublishedAction = '/get/all/published';
  private size = 8;

  constructor(private http: HttpClient) {}

  getLooks() : Observable<Array<Look>> {
    return this.http.get<Array<Look>>(this.lookUrl.concat(this.getAllPublishedAction), httpOptions);
  }

  getLooksByPage(page:number) : Observable<Array<Look>> {
    return this.http.get<Array<Look>>(this.lookUrl.concat(this.getAllPublishedAction+"/"+page+"/"+this.size), httpOptions);
  }

  getLookById(id: number): Observable<Look> {
    return this.http.get<Look>(this.lookUrl.concat(this.getAction+"/"+id), httpOptions);
  }

  getLookFromLookStorageByIdOrDb(id: number): Promise<Look> {
    const promise = new Promise<Look>((resolve, reject) => { 

      let look ;

      let foundIndex = -1;
      foundIndex = (this.looksStorage) ? this.looksStorage.findIndex((l: Look) => l.id === id) : foundIndex;

      if(foundIndex > -1) {
        look = this.looksStorage[foundIndex];
        resolve(look);
      } else {
        this.getLookById(id)
        .toPromise()
        .then(
          response => {
            if(response) {
              resolve(response);
            }
          },
          error => reject(error)
        );
      }
    });

    return promise;
  }

}
