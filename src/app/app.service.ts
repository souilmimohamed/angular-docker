import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Todo } from './app.module';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  getTodos(){
    return this.http.get<Todo[]>(`${environment.apiUrl}TestArea/Test/GetTodos`)
  }
}
