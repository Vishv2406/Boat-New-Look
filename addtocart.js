addtocart(productName,productprice)
    {
       document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var paymentMethod = document.querySelector('button:focus').value; // Get the value of the focused button
    var quantity = parseInt(document.getElementById('quantity').value);
    var productName ;
    var pricePerUnit = price;
    var totalAmount = quantity * pricePerUnit;
    var price = document.getElementById("totamount");
    price.innerHTML ="₹ " +totalAmount;
    var billDetails = document.getElementById('bill-details');
    billDetails.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Product:</strong> ${productName}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Total Amount:</strong> ₹${totalAmount}</p>
        <p><strong>Payment Method:</strong> ${paymentMethod === 'upi' ? 'UPI' : 'Cash on Delivery'}</p>
        ${paymentMethod === 'upi' ? '<p><strong>UPI ID:</strong> any_random_upi_id</p><p><strong>Paid:</strong> <span class="paid-symbol">&#10004;</span></p>' : ''}
    `;

    document.querySelector('.container').style.display = 'none';
    document.querySelector('.bill-container').style.display = 'block';

    if (paymentMethod === 'upi') {
        document.getElementById('qrcode2').style.display = 'block';
        $("#qrcode2").animate({opacity: 1},function(){
        $(this).animate({opacity: 0}, 0);
    });
        setTimeout(function() {
            document.querySelector('.payment-success').style.display = 'block';
            $("#payment-success").animate({opacity: 1}, function(){
        $(this).animate({opacity: 0}, 3000);
    });
        }, 4500);
        setTimeout(function() {
            document.querySelector('.bill-details').style.display = 'block';
        }, 7000);
        setTimeout(function(){
            document.querySelector('#bill-con').style.display = 'block';
        }, 7000);
    } else {
        document.querySelector('.cash-on-delivery').style.display = 'block';
    }
});
$("#show").click(function(){
    $("#qrcode2").animate({display:"block"},4000)
})
$("#cod").click(function(){
    setTimeout(function() {
            document.querySelector('.bill-details').style.display = 'block';
        }, 0);
        setTimeout(function(){
            document.querySelector('#bill-con').style.display = 'block';
        }, 0);
        $(".bill-details").animate({opacity:1})
        ("#bill-con").animate({opacity:1})
})
}