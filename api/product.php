<?php

require_once("../data/Product.php");
require_once('../config/db.php');



// sort
if(isset($_GET['sort'])){
    if(strtolower($_GET['sort']) == 'ASC'){
        $product->get_asc();
    }else{
        $product->get_desc();
    }
}else if(isset($_GET['keyword'])){
    $product->get_search($_GET['keyword']);
// like
}else{
    
    $product->get();
}



?>