<?php 

$host = 'vh60.timeweb.ru'; // адрес сервера 
$database = 'ce26523_test'; // имя базы данных
$user = 'ce26523_test'; // имя пользователя
$password = '1232314'; // пароль\


$link = mysqli_connect($host, $user, $password, $database) 
    or die("Ошибка " . mysqli_error($link));
 
// выполняем операции с базой данных
     $query ="SELECT * FROM test";
     $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
     if($result)
     {
     	$arRes = array();
     	while ($res =  $result->fetch_array(MYSQLI_ASSOC)) {
     		array_push($arRes, $res);
     	}
     	

     	var_dump($arRes);
        
     }
// закрываем подключение
mysqli_close($link);

?>