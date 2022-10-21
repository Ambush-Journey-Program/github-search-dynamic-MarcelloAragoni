import {months} from './consts.js';

export function handleTextContentChange (id, value) {
    document.querySelector(id).textContent = value;
}

export function handleSrcChange (id, value) {
    document.querySelector(id).src = value;
}

export function handleHrefChange (id, value) {
    document.querySelector(id).href = value;
}

export function handleError(errorMessage) {
    window.alert(errorMessage);
}

export function handleFormatDate(value) {
  const date = new Date(value);
  const day = date.getDate();
  const year = date.getFullYear();
  const monthName = months[date.getMonth()];
  const formatted = `${day} ${monthName} ${year}`;

  handleTextContentChange("#userjoined",`Joined ${formatted}`)
}