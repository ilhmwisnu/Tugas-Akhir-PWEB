<?php

require_once("../data/Product.php");
require_once('../config/db.php');


if(isset($_GET['sort'])){
    echo json_encode([
        "data" => $product->get(),
        "pagination" => $pagination,
        "count" => $data->count_page()
    ]);
}else{
    echo json_encode([
        "data" => $product->get(),
    ]);

}



?>