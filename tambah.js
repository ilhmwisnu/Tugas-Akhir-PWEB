    
    let kategoriOpt = document.querySelector('#kategori')

document.querySelector('#submit').addEventListener('click', async (e) => {
  e.preventDefault();
  let form = document.querySelector('#form');
  let formData = new FormData(form);
  console.log(formData.values)
  fetch('./api/product.php?action=create', {
    method: 'post',
    body: formData,
  }).catch((e)=>alert(e))

  // alert('data telah ditambahkan');
  window.location.replace('index.html');
});


fetch("./api/category.php").then(res => res.json()).then(
  data => {
    data = data["data"]
    data.forEach(opt => {
        kategoriOpt.innerHTML = kategoriOpt.innerHTML + `<option value="${opt.id}">${opt.kategori}</option>`
      
    });
  }
)


document.querySelector("#ukuran").addEventListener("change", (e)=>{
  let selectedSize = ""
  let options = e.target.options
  for (let i = 0; i < options.length; i++) {
    if (e.target.options[i].selected) {
      selectedSize += e.target.options[i].value + ","
    }
  }
  selectedSize = selectedSize.slice(0,selectedSize.length -1)
  console.log(selectedSize)
})