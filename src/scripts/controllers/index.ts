// Views
import TodoView from "../views";

// Mock data
import { mockTodo } from "../mocks";

class TodoController {
  private view: TodoView;

  constructor(view: TodoView) {
    this.view = view;
  }

  init() {
    this.view.render(mockTodo);
  }
}

export default TodoController;
