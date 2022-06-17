const BASE_URL = 'https://62a537a147e6e400639c8ab7.mockapi.io';

export async function fetchContacts() {
  const response = await fetch(`${BASE_URL}/contacts`);
  return await response.json();
}

export async function addContact(values) {
  const response = await fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    body: values,
  });
  return await response.json();
  // const data = await response.json();
  // console.log(values, data);
}

export async function deleteContact(id) {
  const response = await fetch(`${BASE_URL}/contacts/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
}
