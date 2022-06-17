<?php

require_once('../config/db.php');
require_once('database.php');


class Category{
    protected $dbs;
    protected $table = "product";


    public function __construct($db){
        $this->dbs = new Database($db);   

    }

    function getAll(){
        try{
            http_response_code(200);
            echo json_encode([
                "status" => 200,
                "message" => "Data berhasil didapatkan",
                "data" => $this->dbs->query("SELECT * FROM category")
            ]);
        }catch(\Exception $e){
            http_response_code(500);
            echo json_encode([
                "status" => 500,
                "message" => $e->getMessage(),
                "data" => []
            ]);
        }
        
    }

}

$category = new Category($db);