<?php


require_once('../config/db.php');

class Database{

    protected $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function get_all($table){
        $query = "SELECT * FROM $table";
        $execute = $this->db->query($query);
        $data = [];
        while($row = $execute->fetch_assoc()){
            array_push($data, $row);
        }
        return $data;
    }

    public function insert($data, $table){
        $keys = [];
        $vals = [];
        foreach($data as $key => $val){
            array_push($keys, $key);
            array_push($vals, "'".$val."'");
            
        }
        $keys = "(".implode(" ,", $keys).")";
        $vals = "(".implode(" ,", $vals).")";
        $query = "INSERT INTO $table $keys VALUES $vals";
        // echo $query;
        return $this->db->query($query);

        
    }

    public function delete($id){
        return $this->db->query("DELETE from product WHERE id = $id");
    }
}

$dbs = new Database($db);