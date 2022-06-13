<?php


require_once("const.php");


$db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if($db->connect_error){
    http_response_code(500);
    die('Connection failed: {$db->connect_error}');
}