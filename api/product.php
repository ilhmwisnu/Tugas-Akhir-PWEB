<?php

require_once("../data/Product.php");
require_once('../config/db.php');

$pagination = [];
for($i = 1; $i <= $data->count_page(); $i++){
    array_push($pagination, ["{$i}" => "http://".BASE_URL."/api/product.php?page=".$i]);
}

if(isset($_GET['page'])){

    echo json_encode([
        "data" => $data->get(),
        "pagination" => $pagination,
        "count" => $data->count_page()
    ]);
    
}else{
    echo json_encode([
        "data" => $data->get(),
        "pagination" => $pagination,
        "count" => $data->count_page()
    ]);

}



?>