$("#b1").click(function(){
navigator.contacts.pickContact(function(contact){
        var x= $("#n").val();
        if(x==""){
            x=contact["phoneNumbers"][0]["value"];
        }
        else{
        x= x + "," + contact["phoneNumbers"][0]["value"];
        }
        $("#n").val(x);
    });
})
$("#b").click(function(){
    var form = $('form')[0];
    var formData = new FormData(form);
    $.ajax({
    url: 'YOUR_PHP_PAGE',
    data: formData,
    type: 'POST',
    contentType: false,
    processData: false, 
    success:function(feedback){
        alert(feedback);
    },
    error:function(){
        alert("No internet connection");
    }
});
})