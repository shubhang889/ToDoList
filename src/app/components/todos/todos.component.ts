import { Component, OnInit } from '@angular/core';

import { Todo } from '../../models/todo' ; 
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  
  constructor(private todoService:TodoService) { 
    this.todos = [];
  }
  ngOnInit() { 
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos ;
    }) ;
  }

  deleteTodo(todo: Todo){
    this.todos = this.todos.filter(t=> t.id !== todo.id) ;
    this.todoService.deleteTodo(todo).subscribe() ;
  }

  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe((todo: any)=> {
      this.todos.push(todo);
    });
  }

}
