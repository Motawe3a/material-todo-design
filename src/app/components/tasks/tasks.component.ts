import { Component, OnInit, OnChanges } from '@angular/core';
import { TodoService } from 'src/app/shared/todo-service/todo.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnChanges {

  todos: any[];
  checked = false;
  beforeEditCache: string;

  constructor(private data: TodoService) { }

  ngOnInit() {
    this.todos = this.data.getTodos();
    this.beforeEditCache = '';
  }
  ngOnChanges() {
    this.todos = this.data.getTodos();
  }
  deleteItem(id) {
    this.data.deleteTodo(id);
    return this.todos;
  }

  markComplete(checked, todo) {
    checked ? todo.completed = true : todo.completed = false;
  }

  editTodo(todo) {
    this.beforeEditCache = todo.title;
    todo.editing = true;
  }

  doneEditTodo(todo) {
    if (todo.title.trim().length === 0) {
      todo.title = this.beforeEditCache;
    }
    todo.editing = false;
  }

  cancelEditTodo(todo) {
    todo.title = this.beforeEditCache;
    todo.editing = false;
  }

}
