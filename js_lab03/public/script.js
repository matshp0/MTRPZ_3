fetch('/api/visits')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then((data) => {
    document.getElementById('output').textContent = `${data} times`;
  })
  .catch((error) => {
    document.getElementById('output').textContent = 'Error: ' + error.message});
