// Components
import { inputRadio } from "../input";

// Types
import { Todo } from "../../../interface";

interface TodoProps {
  todo?: Todo[];
}

export const todo = ({ todo = [] }: TodoProps) => {
  const isTodo = todo.length;

  if (!isTodo) return "";

  return `
    <ul style="width: 350px; padding: 15px; background-color: white; border:1px solid #ccc">
        ${todo
          .map((item) => {
            const { isCompleted, value } = item;

            return inputRadio({
              isComplete: isCompleted,
              todoValue: value,
            });
          })
          .join("\n")}
    </ul>
    `;
};
