document.querySelector('#submit').addEventListener('click', async (e) => {
  e.preventDefault();
  let form = document.querySelector('#form');
  let formData = new FormData(form);

  fetch('./api/product.php?action=create', {
    method: 'post',
    body: formData,
  });

  alert('data telah ditambahkan');
  window.location.replace('index.html');
});
