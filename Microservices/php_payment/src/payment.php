<?php
    include('./connect.php');
    $bookingId = $_POST['BookingId'];
	$paymentAgent = $_POST['PaymentAgent'];
	$amount = $_POST['Amount'];

    $query = "INSERT INTO Payments(PaymentId, BookingId, PaymentAgent, Amount) VALUES(null, '".$bookingId."', '".$paymentAgent."', '".$amount."')";
    
    $result = $link->query($query);
    
    if(!$result){
		$return_value = array(
            'code' => 403,
            'message' => mysqli_error()
        );
        echo json_encode($return_value);
	}else{
        $return_value = array(
            'code' => 200,
            'message' => "data inserted"
        );
        echo json_encode($return_value);
    }
?>