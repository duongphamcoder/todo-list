// Views
import TodoView from "./views";

// Controllers
import TodoController from "./controllers";

class App {
  run() {
    const controller = new TodoController(new TodoView());

    controller.init();
  }
}

export default App;
