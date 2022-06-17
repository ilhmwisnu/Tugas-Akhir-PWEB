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
        try{
            http_response_code(200);
            echo json_encode([
                "status" => 200,
                "message" => "Data berhasil didapatkan",
                "data" => $this->dbs->query('SELECT p.id, p.name, c.kategori, p.size, p.price, p.image FROM product p JOIN category c ON p.kategori_id = c.id ')
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

    public function get_asc(){
        try{
            http_response_code(200);
            echo json_encode([
                "status" => 200,
                "message" => "Data berhasil didapatkan",
                "data" => $this->dbs->get_all('product p JOIN category c ON p.kategori_id = c.id  order by price ASC')
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

    public function get_desc(){
        try{
            http_response_code(200);
            echo json_encode([
                "status" => 200,
                "message" => "Data berhasil didapatkan",
                "data" => $this->dbs->get_all('product p JOIN category c ON p.kategori_id = c.id  order by price DESC')
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

    public function get_search($keyword){
        try{
            http_response_code(200);
            echo json_encode([
                "status" => 200,
                "message" => "Data berhasil didapatkan",
                "data" => $this->dbs->get_all("product p JOIN category c ON p.kategori_id = c.id WHERE name like '%{$keyword}%' or kategori like '%{$keyword}%'")
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

    public function delete($id){
        try{
            if($this->dbs->delete($id)){
                echo json_encode([
                    "status" => 200,
                    "message" => "Berhasil didelete"
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

    public function getDataById($id){
        try{
            http_response_code(200);
            echo json_encode([
                "status" => 200,
                "message" => "Data berhasil didapatkan",
                "data" => $this->dbs->getDataById("product", $id)
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


// $dbs = ;
$product = new Product($db);
