import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: any[] = [
    { id: 1, title: 'Buy new sweetShirt', completed: true, editing: false },
    { id: 2, title: 'begin promotional phase', completed: true, editing: false },
    { id: 3, title: 'Read an artical', completed: false, editing: false },
    { id: 4, title: 'Try not to fall asleep', completed: false, editing: false },
    { id: 5, title: 'Watch "Sherlok"', completed: false, editing: false },
    { id: 6, title: 'begin QA for the product', completed: false, editing: false },
    { id: 7, title: 'Go for a walk', completed: false, editing: false },
  ];
  constructor() { }

  getTodos() {
    return this.todos;
  }
  addTodo(id: number, title: string, completed: boolean, editing: boolean) {
    if (title == undefined) {
      return
    }
    console.log(this.todos)
    return this.todos.push(
      {
        id: id,
        title: title,
        completed: completed,
        editing: editing
      });
  }
  deleteTodo(id: number) {
    let index = id - 1;
    if (index > -1) {
      this.todos.splice(index, 1);
    }
    return this.todos;
  }
}
