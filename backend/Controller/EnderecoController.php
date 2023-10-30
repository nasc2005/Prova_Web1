<?php

namespace App\Controller;

use App\Model\Model;
use App\Endereco\Endereco;
class EnderecoController {
    private $db;
    private $endereco;
    public function __construct(Endereco $endereco) {
        $this->db = new Model();
        $this->endereco=$endereco;
    }

    public function insert(){
        
           if($this->db->insert('endereco', [
            'cep'=> $this->endereco->getCep(),
            'rua'=> $this->endereco->getRua(),
            'bairro'=> $this->endereco->getBairro(),
            'cidade'=> $this->endereco->getCidade(),
            'uf'=> $this->endereco->getUf(),
            'iduser'=> $this->endereco->getIduser(),
        ])){                                   

            return true;
        }
        return false;
    }

    public function select(){
        $endereco = $this->db->select('endereco');
        
        return  $endereco;
    }

    public function selectId($iduser){
        $endereco = $this->db->select('endereco',['iduser'=>$iduser]);
        
        return  $endereco;
    }
    
    public function update($newData,$condition){
        if($this->db->update('endereco', $newData, ['iduser'=>$condition])){
            return true;
        }
        return false;
    }
    public function delete( $conditions){
        if($this->db->delete('endereco', ['iduser'=>$conditions])){
            return true;
        }
        return false;
        
    }

    public function selectByRua($rua){
        $endereco = $this->db->select('endereco', ['rua' => $rua]);
    
        return $endereco;
    }
}

