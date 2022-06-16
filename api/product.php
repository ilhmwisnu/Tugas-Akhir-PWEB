<?php

require_once("../data/Product.php");
require_once('../config/db.php');


if(isset($_GET['sort'])){
    // header("Content-type:application/json");
    echo json_encode([
        "data" => $product->get(),
        "pagination" => $pagination,
        "count" => $data->count_page()
    ]);
}else{
    // header("Content-type:application/json");
    echo json_encode([
        "data" => $product->get(),
    ]);

}



?>