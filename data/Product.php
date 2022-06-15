<?php

require_once('../config/db.php');
require_once('database.php');


class Product{
    protected $dbs;
    protected $table = "product";


    public function __construct($db){
        $this->dbs = new Database($db);   

    }

    
    public function get(){
        // var_dump($this->dbs);
        return $this->dbs->get_all('product');
    }

    public function count_page(){
        $data = $this->dbs->get_all('product');
        $jumlah = count($data);
        return $jumlah;
    }

    public function addData($data){
        try{
            if($this->dbs->insert($data, $this->table)){
                echo json_encode([
                    "status" => 200,
                    "message" => "Berhasil ditambah"
                ]);
            }
        }catch(\Exception $e){
            http_response_code(500);
            echo json_encode([
                "status" => 500,
                "error" => $e->getMessage()
            ]);   
        }
    }
}


// $dbs = ;
$product = new Product($db);
