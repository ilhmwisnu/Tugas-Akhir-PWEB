let nama = document.querySelector("#name");
let imgUrl = document.querySelector("#imgInput");
let kategori = document.querySelector("#kategori");
let size = document.querySelector("#ukuran");
let harga = document.querySelector("#harga");

function getParameter(parameterName) {
    var result = null,
        tmp = [];
    window.location.search
        .substring(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

let prodId = getParameter("id");

fetch("./api/category.php").then(res => res.json()).then(
  data => {
    data = data["data"]
    data.forEach(opt => {
        kategori.innerHTML = kategori.innerHTML + `<option value="${opt.id}">${opt.kategori}</option>`
    });
    getProductData()
  }
)


function getProductData(){
  fetch(`api/product.php?id=${prodId}`)
    .then((res) => res.json())
    .then((data) => {
        data = data["data"][0];
        for (const key in data) {
            console.log(key + " : " + data[key]);
        }
        nama.value = data["name"];
        imgUrl.value = data["image"];
        harga.value = data["price"];
        kategori.value = data["kategori_id"];
        harga.value = data["price"];
        console.log(typeof size.options);
        data["size"].split(",").forEach( ukuran => {
          for (const key in size.options) {
            if (size.options[key].value == ukuran) {
              size.options[key].selected = true
            }
          }
        });
    });
  }


document.querySelector("#submit").addEventListener("click", async (e) => {
    e.preventDefault();
    let form = document.querySelector("#form");
    let formData = new FormData(form);

    fetch('api/product.php?action=update', {
      method: 'post',
      body: formData,
    });

    alert("data telah ditambahkan");
    window.location.replace("index.html");
});

fetch(`api/product.php?id=${prodId}`);
