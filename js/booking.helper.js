function handleBooking(){
    debugger;
    var bookingId = $('#bookingId').val();
    var userId = sessionStorage.getItem("UserId");
    if(userId == ""){
        userId = 1;
    }
    var noOfVisitors = $('#numberofvisitor').val();
    var dateOfVisit= $('#dateofvisit').val();
    var timeOfVisit= $('#timeofvisit').val();
    var isGuidedTour= $('#guidedtour').val();
    if(isGuidedTour == "YES"){
        isGuidedTour = 1;
    }else{
        isGuidedTour = 0;
    }
    $.ajax({
        url: 'http://localhost:82/booking.php',
        method: 'POST',
        data: { BookingId: bookingId, UserId: parseInt(userId), IsGuidedTour: isGuidedTour, NoOfVisitors: noOfVisitors, DateOfVisit: dateOfVisit, TimeOfVisit: timeOfVisit },
        dataType: 'json',
        success: function(result) {
            console.log(result.code);
            console.log(result.message);
            alert("Booking Confirmed!!");
            sessionStorage.setItem("BookingId", bookingId);
            window.location.href = "main.html";
        }
    });
}
function handlePayment(){
    debugger;
    var bookingId = $('#bookingId').val();
    var amount= $('#totalamount').val();
    $.ajax({
        url: 'http://localhost:81/payment.php',
        method: 'POST',
        data: { BookingId: bookingId, PaymentAgent: "VISA", Amount: amount},
        dataType: 'json',
        success: function(result) {
            console.log(result.code);
            console.log(result.message);
            $('#paymentstatus-div').removeClass('hidden');
            $('#payment').addClass('hidden');
            $('#booking').removeClass('hidden');
        }
    });
}
function calculateAmount(){
    console.log("reached");
    var marginAmount = 5;
    var additionCharge = 0;
    var NoOfVisitors = parseInt($('#numberofvisitor').val());
    var IsGuidedTour = $('#guidedtour').val();
    if(IsGuidedTour == "YES"){
        additionCharge = 5;
    }
    var totalCost = (NoOfVisitors * marginAmount) + additionCharge;
    $('#totalamount').val(totalCost);
}