import React,{useState} from 'react';

import '../../pages/global.css';
import Menu from '../../componentes/menu'
import{ FiFilePlus } from "react-icons/fi";
import { CiSaveDown1 } from "react-icons/ci";
import { FcCancel } from "react-icons/fc";
import {useNavigate} from 'react-router-dom';
import Head from '../../componentes/Head';

export default function Cadastrousuario(){
  const navigate =useNavigate();
  const [nome,setNome]  = useState("");
  const [email,setEmail]  = useState("");
  const [senha,setSenha]  = useState("");
  
  const usuario={
      id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
      nome,
      email,
      senha
  }

  function salvardados(e){
    e.preventDefault();
   // console.log(usuario);
   if(nome=="")
   alert("Preencha o campo nome")
   else if(email=="")
   alert("Preencha o campo email")
   else if(senha=="")
   alert("Preencha o campo senha")
   else{
   const banco =JSON.parse(localStorage.getItem("cd-usuarios") || "[]");
   banco.push(usuario);
   localStorage.setItem("cd-usuarios",JSON.stringify(banco));
  alert("Usuário salvo com sucesso");
  navigate('/listausuario');
  }
  }
  return(
    <div className="dashboard-container">
      
        <div className='menu'>
     
        <Menu />
        </div>
        <div className='principal'>
        <Head title="Cadastro de Usuário" />
        <div className='form-container'></div>
        <div className='form-cadastro' onSumit={salvardados}>
        
        </div>
<div className='form-conteiner'>
  <form className='form-cadastro' onSubmit={salvardados}>


  <input type='text' 
  value={nome}
  onChange={e=>setNome(e.target.value)}
  placeholder='Digite o nome do Usuário'
   />


  <input type='email'
  value={email}
  onChange={e=>setEmail(e.target.value)}
  placeholder='Digite o Email'
  />

  <input type='password'
  value={senha}
  onChange={e=>setSenha(e.target.value)}
  placeholder='Digite o a Senha'
  />
  <div className='acao'>
    <button className='btn-save'>
    <CiSaveDown1 />
      Salvar
    </button>
  
    <button className='btn-cancel'>
    <FcCancel />
      Cancelar
    </button>
    </div>
  
  </form>
 
</div>
        </div>
    </div>

   )

}