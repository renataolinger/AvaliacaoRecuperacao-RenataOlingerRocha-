<?php

	$nome = $_POST["nome"];
	$sobrenome = $_POST["sobrenome"];
	$email = $_POST["email"];
	$matricula = $_POST["matricula"];
	$usuario = $_POST["usuario"];
	$senha = $_POST["senha"];
	$cSenha = $_POST["cSenha"];

	$retorno[0]["nome"] = $nome;
	$retorno[0]["sobrenome"] = $sobrenome;
	$retorno[0]["email"] = $email;
	$retorno[0]["matricula"] = $matricula;
	$retorno[0]["usuario"] = $usuario;
	$retorno[0]["senha"] = $senha;
	$retorno[0]["cSenha"] = $cSenha;

	echo json_encode($retorno); 

?>