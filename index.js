let currentPage = 1;
let totalPage = 8;

let pagination = $("#pagination");

$.get("./api/product.php", (data) => console.log(JSON.parse(data)["data"]));

let pageBtn = (number, isActive) => {
    return `<div id="page${number}" class="pageBtn px-4 py-2  ${
        isActive ? "bg-black text-white " : "bg-light border border-dark"
    }  rounded-2">${number}</div>`;
};

let insertBtn = (min, max, currentPage) => {
    for (let index = min; index < max + 1; index++) {
        pagination.html(
            pagination.html() + pageBtn(index, index == currentPage)
        );
    }
};

function renderPagination(currentPage, totalPage) {
    pagination.html(
        `<div class=" first px-4 py-2 border border-dark rounded-2 bg-light">|<</div>`
    );
    
    if (totalPage <5) {
        insertBtn(1,totalPage,currentPage)
    }else if (currentPage < 3) {
        insertBtn(1, 5, currentPage)
    }else if (totalPage-currentPage < 3) {
        insertBtn(totalPage-4, totalPage,currentPage)
    }else{
        insertBtn(currentPage-2, currentPage+2, currentPage)
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
    renderPagination(currentPage, totalPage);
}

$("#sort").change(function (e) {
    console.log(e.target.value);
});

$("#search").keyup(function (e) {
    console;
});

renderPagination(currentPage, totalPage);
