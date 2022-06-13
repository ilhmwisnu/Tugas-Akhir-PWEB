<?php


require_once('./database.php');


class Product{
    protected $dbs;
    protected $table = "product";


    public function __construct($dbs){
        $this->$dbs = $dbs;        
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