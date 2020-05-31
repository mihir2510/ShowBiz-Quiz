<?php

  $con = mysqli_connect("localhost","root","","my_db");
  //$db = mysqli_select_db("my_db", $con) or die(mysql_error());
  
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
  

  
    if(mysqli_query($con,"INSERT INTO my_db (username,email,password) 
    VALUES ('$username','$email','$password')")){
    	echo "Record added";	
    } else{
		echo "Error ", $sql, "<br>", mysqli_error($con);
	}

?>