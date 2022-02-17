<?php
   include('./connect.php');
    $userId = $_POST['UserId'];
	
	//Create query
	$query = "SELECT * FROM Bookings WHERE UserId= '$userId'";
    $result = $link->query($query);
    if($result->num_rows > 0){
        $return_value = array(
            'code' => 200,
            'message' => "booking record successfully fetched"
        );
        echo json_encode($return_value);
    }else{
        $return_value = array(
            'code' => 401,
            'message' => "issue in fetching bookings"
        );
        echo json_encode($return_value);
    }
    $link->close();
?>