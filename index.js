let currentPage = 1;
let totalPage = 1;
let globalData = []
let pagination = $("#pagination");
let productContainer = $("#productContainer");

function getData(keyword, sort) {
    let url = `./api/product.php`;

    if (sort != "") {
        url = `./api/product.php?sort=${sort}`;
    } else if (keyword != "") {
        url = `./api/product.php?keyword=${keyword}`;
    }
    console.log(url)
    $.get(url, (data) => {
        globalData = JSON.parse(data).data;
        // console.log(globalData.length);
        totalPage = Math.ceil(globalData.length / 8);
        // console.log(totalPage);
        console.log(globalData);
        renderPagination(currentPage, totalPage);
        renderCard(currentPage, totalPage, globalData);
    });
}

function renderCard(currentPage, totalPage, data) {
    // console.log(currentPage)
    // console.log(totalPage == currentPage)
    // console.log(data)
    if ((data.length < 8) ) {
        for (let i in data) {
            let e = data[i];
            productContainer.html(
                productContainer.html() +
                    productCard(
                        e.id,
                        e.name,
                        e.image,
                        e.price,
                        e.size,
                        e.kategori
                    )
            );
        }
    }else if ((currentPage == totalPage)) {
        // for (let i in data.slice((currentPage-1)*8)) {
        //     let e = data[i];
        //     console.log(e)
        //     productContainer.html(
        //         productContainer.html() +
        //             productCard(
        //                 e.id,
        //                 e.name,
        //                 e.image,
        //                 e.price,
        //                 e.size,
        //                 e.kategori
        //             )
        //     );
        // }
        data.slice((currentPage-1)*8).forEach(e => {
            productContainer.html(
                productContainer.html() +
                    productCard(
                        e.id,
                        e.name,
                        e.image,
                        e.price,
                        e.size,
                        e.kategori
                    )
            );
        });
    } else {
        for (const i in data.slice(currentPage, currentPage+8)) {
            let e = data[i];
            productContainer.html(
                productContainer.html() +
                    productCard(
                        e.id,
                        e.name,
                        e.image,
                        e.price,
                        e.size,
                        e.kategori
                    )
            );
        }
    }
    productContainer.html();
}

function pageBtn(number, isActive) {
    return `<div id="page${number}" class="pageBtn px-4 py-2  ${
        isActive ? "bg-black text-white " : "bg-light border border-dark"
    }  rounded-2">${number}</div>`;
}

function productCard(id, name, imgUrl, price, size, kategori) {
    return `<div class="col-12 col-sm-6 col-lg-3 mb-3">
            <div class="card border-dark">
            <img
            src="${imgUrl}"
            class="card-img-top img"
            alt="..."
            />
            <div class="card-body">
            <h5 class="card-title text-center">
                ${name}
            </h5>
            <p class="card-text text-center">
                Size : <span>${size}</span>
                <br />id :${id}<br/>
                <strong class="text-center">Rp ${price}</strong>
            </p>
            <div class="text-center">
                <a
                    href="ubah.html?id=${id}"
                    class="btn btn-primary mx-auto "
                    >Edit</a
                >
                <button class="btn btn-danger m-1">Delete</button>
            </div>
            </div>
            </div>
            </div>`;
}

function insertBtn(min, max, currentPage) {
    for (let index = min; index < max + 1; index++) {
        pagination.html(
            pagination.html() + pageBtn(index, index == currentPage)
        );
    }
}

function renderPagination(currentPage, totalPage) {
    pagination.html(
        `<div class=" first px-4 py-2 border border-dark rounded-2 bg-light">|<</div>`
    );

    if (totalPage < 5) {
        insertBtn(1, totalPage, currentPage);
    } else if (currentPage < 3) {
        insertBtn(1, 5, currentPage);
    } else if (totalPage - currentPage < 3) {
        insertBtn(totalPage - 4, totalPage, currentPage);
    } else {
        insertBtn(currentPage - 2, currentPage + 2, currentPage);
    }

    pagination.html(
        pagination.html() +
            `<div class=" end px-4 py-2 border border-dark rounded-2 bg-light">>|</div>`
    );

    $(".pageBtn").click((e) => {
        changePage(e);
    });
    $(".first").click((e) => {
        currentPage = 1;
        renderPagination(currentPage, totalPage);
    });
    $(".end").click((e) => {
        currentPage = totalPage;
        renderPagination(currentPage, totalPage);
    });
}

function changePage(e) {
    currentPage = parseInt(e.target.id.slice(4));
    pagination.html("");
    productContainer.html('')
    renderCard(currentPage,totalPage,globalData)
    renderPagination(currentPage, totalPage);
}

$("#sort").change(function (e) {
    productContainer.html("");
    console.log(e.target.value);
    getData("", e.target.value);
});

$("#search").keyup(function (e) {
    productContainer.html("");
    console.log(e.target.value);
    getData(e.target.value, "");
});

getData("", "");
