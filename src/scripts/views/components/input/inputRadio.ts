interface InputRadioProps {
  todoValue?: string;
  isEditable?: boolean;
  isComplete?: boolean;
}

export const inputRadio = (props: InputRadioProps) => {
  const { todoValue = "", isComplete = false, isEditable = false } = props;
  const editTodo = isEditable ? "isEdit" : "";
  const completeTodo = isComplete ? "isComplete" : "";
  const radioIconStatus = isComplete ? "radio-selected" : "radio-un-select";

  return `
    <!-- 
        Props:
            Status: 
            - view (default)
            - isEdit (open input)
            - isComplete (complete todo item)
    -->
    <li class="input-radio ${editTodo} ${completeTodo}">
    <!-- 
        Props:
            Selected Status: 
            - unselect (class: radio-un-select (default))
            - selected (class: radio-selected)
    -->
    <button class="btn btn-complete">
        <span class="${radioIconStatus}"></span>
    </button>
    <div class="edit-text">
        <p class="label">${todoValue}</p>
        <input
        autofocus
        type="text"
        class="input-typing"
        value="${todoValue}"
        placeholder="Type here..."
        />
    </div>
    <button class="btn">
        <span class="close-icon"></span>
    </button>
    </li>
    `;
};
