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
    if ($_GET['action']== "create") {
        $product->addData($_POST);
    }else if ($_GET['action']== "update") {
        // update
    }else if ($_GET['action']== "delete") {
        $product->delete($_POST["id"]);
    }

}else if (isset($_GET["id"])) {
    $product->getDataById($_GET["id"]);
}else{
    $product->get();
}



?>