<?php

namespace App\Controller;

use App\Model\Model;

class ProdutoController {

    private $db;

    public function __construct() {
        $this->db = new Model();
    }
    public function select(){
        $produtos = $this->db->select('produtos');
        
        return  $produtos;
    }

    public function selectId($id){
        $produtos = $this->db->select('produtos',['id'=>$id]);
        
        return  $produtos;
    }
    public function insert($data){
        if($this->db->insert('produtos', $data)){
            return true;
        }
        return false;
    }
    public function update($newData,$condition){
        if($this->db->update('produtos', $newData, ['id'=>$condition])){
            return true;
        }
        return false;
    }
    public function delete( $conditions){
        if($this->db->delete('produtos', ['id'=>$conditions])){
            return true;
        }
        return false;
        
    }

    public function selectByNome($nome){
        $produtos = $this->db->select('produtos', ['nome' => $nome]);
    
        return $produtos;
    }
}
