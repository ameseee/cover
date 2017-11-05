export const sendCustom = (message, phone) => {
  return fetch('http://localhost:3000/api/message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({ message, phone })
  })
    .then(response => response.json())
    .catch(error => console.log('THIS IS THE ALERT', error));
};
