export const querySelectorElement = (selector: string): Element | null => {
  const element = document.querySelector(selector);

  return element;
};

export const querySelectorAllElement = (
  selector: string
): NodeListOf<Element> | null => {
  const element = document.querySelectorAll(selector);

  return element;
};
