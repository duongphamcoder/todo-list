// Components
import { todo } from "./components";

// Helpers
import { querySelectorAllElement, querySelectorElement } from "../helpers";

// Types
import { Todo } from "../interface";

enum QueryKey {
  TODO_ITEM = "input-radio",
  LABEL = "label",
  ROOT = "root",
  INPUT_TYPING = "input-typing",
}

class TodoView {
  private rootElement: Element | null;
  private labels: NodeListOf<Element> | null;
  private inputTypings: NodeListOf<Element> | null;
  private currentElementEdit: HTMLParagraphElement | null;

  constructor() {
    // Define elements
    this.labels = null;
    this.inputTypings = null;
    this.rootElement = querySelectorElement(`#${QueryKey.ROOT}`);
    this.currentElementEdit = null;
  }

  render(data: Todo[]) {
    if (!this.rootElement) return;

    const html = todo({ todo: data });

    this.rootElement.innerHTML = html;
    this.labels = querySelectorAllElement(`.${QueryKey.LABEL}`);
    this.inputTypings = querySelectorAllElement(`.${QueryKey.INPUT_TYPING}`);

    // Add event listeners
    this.bindTodoEvents();
  }

  bindTodoEvents() {
    // Add event listeners  double click on the label element
    this.labels?.forEach((label) => {
      label.addEventListener("dblclick", (e) => {
        const labelEl = e.target as HTMLParagraphElement;
        const liElement = labelEl.closest(`.${QueryKey.TODO_ITEM}`);

        this.currentElementEdit = labelEl;
        liElement?.classList.add("isEdit");
      });
    });

    // Add event listeners blur on the input edit element
    this.inputTypings?.forEach((inputTypings) => {
      inputTypings.addEventListener("blur", (e) => {
        const inputEl = e.target as HTMLInputElement;
        const liElement = inputEl.closest(`.${QueryKey.TODO_ITEM}`);

        this.currentElementEdit!.innerHTML = inputEl.value;
        liElement?.classList.remove("isEdit");
      });
    });
  }
}

export default TodoView;
