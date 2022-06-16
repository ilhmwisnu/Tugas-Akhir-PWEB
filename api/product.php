<?php

require_once("../data/Product.php");
require_once('../config/db.php');



// sort
if(isset($_GET['sort'])){
    if(strtolower($_GET['sort']) == 'asc'){
        $product->get_asc();
    }else{
        $product->get_desc();
    }
// like
}else if(isset($_GET['keyword'])){
    $product->get_search($_GET['keyword']);
}else if(isset($_GET['action'])){
    $product->addData($_POST);
}else{
    $product->get();
}



?>