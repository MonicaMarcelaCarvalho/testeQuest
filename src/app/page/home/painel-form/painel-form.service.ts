import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlagTipoOperacao, QuestionForm } from './painel-form.model';

@Injectable({ providedIn: 'root' })
export class PainelFormService {

    private URL_END_POINT = "https://my-json-server.typicode.com/MonicaMarcelaCarvalho/API/";

    constructor(private httpClient: HttpClient) {}

    findById(): Observable<QuestionForm> {
        return this.httpClient.get<QuestionForm>(`${this.URL_END_POINT}/question`);
    }

    findTipoOperacao(): Observable<FlagTipoOperacao> {
        return this.httpClient.get<FlagTipoOperacao>(`${this.URL_END_POINT}/flagTipoOperacao`);
    }

}

