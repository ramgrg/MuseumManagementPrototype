<?php
    include('./connect.php');
    $bookingId = $_POST['BookingId'];
    $userId = $_POST['UserId'];
	$guidedTour = $_POST['IsGuidedTour'];
	$noOfVisitors = $_POST['NoOfVisitors'];
	$visitDate = $_POST['DateOfVisit'];
	$visitTime = $_POST['TimeOfVisit'];

    $query = "INSERT INTO Bookings(BookingId, UserId, GuidedTour, NoOfVisitors, DateOfVisit, TimeOfVisit) VALUES('".$bookingId."', '".$userId."', '".$guidedTour."', '".$noOfVisitors."', '".$visitDate."', '".$visitTime."')";
    
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