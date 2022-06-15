let currentPage = 1;
let totalPage = 10;

let pagination = $("#pagination");
console.log(pagination[0]);

function renderPagination(currentPage, totalPage) {
    pagination.html(
        `<div class="px-4 py-2 border border-dark rounded-2 bg-light">|<</div>`
    );
    if (currentPage < 3) {
        for (let index = 1; index < 1 + 5; index++) {
            pagination.html(
                pagination.html() +
                    `<div id="page${index}" class="pageBtn px-4 py-2  ${
                        index == currentPage
                            ? "bg-black text-white "
                            : "bg-light border border-dark"
                    }  rounded-2">${index}</div>`
            );
        }
    } else if (totalPage - currentPage < 3 ) {
        for (let index = totalPage - 4; index < totalPage + 1; index++) {
            pagination.html(
                pagination.html() +
                    `<div id="page${index}" class="pageBtn px-4 py-2  ${
                        index == currentPage
                            ? "bg-black text-white "
                            : "bg-light border border-dark"
                    }  rounded-2">${index}</div>`
            );
        }
    }else {
        for (let index = currentPage - 2; index < currentPage + 3; index++) {
            pagination.html(
                pagination.html() +
                    `<div id="page${index}" class="pageBtn px-4 py-2  ${
                        index == currentPage
                            ? "bg-black text-white "
                            : "bg-light border border-dark"
                    }  rounded-2">${index}</div>`
            );
        }
    }
    pagination.html(
        pagination.html() +
            `<div class="px-4 py-2 border border-dark rounded-2 bg-light">>|</div>`
    );

    $(".pageBtn").click((e)=>{
        changePage(e)
    })
}

renderPagination(currentPage, totalPage)


function changePage(e){
    currentPage = parseInt(e.target.id.slice(4))
    // console.log(e.target.id.slice(4))
    pagination.html("")
    renderPagination(currentPage, totalPage)
}