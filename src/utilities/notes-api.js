import sendRequest from './send-request';

const BASE_URL = "./api/notes";

export function createNote(noteContent) {
  return sendRequest(`${BASE_URL}/new`, 'POST', noteContent);
}

export function getNotes() {
    return sendRequest(BASE_URL);
  }
  