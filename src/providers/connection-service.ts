import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ConnectionService {

  constructor(public http: Http) {
    console.log('Hello ConnectionService Provider');
  }

getCep(cep: string) : Promise<Response>{
  return this.http.get('https://viacep.com.br/ws/' + cep.trim() + '/json/').toPromise();
}

}
