import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { take } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Todo } from './app.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  todoList:Todo[]=[]
  constructor(private appService:AppService){}
  ngOnInit(): void {
    this.appService.getTodos()
    .pipe(take(1))
    .subscribe((result)=>{
      this.todoList=result
    })
  }
}
