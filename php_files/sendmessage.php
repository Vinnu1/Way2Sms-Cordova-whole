<?php
    if(isset($_POST['num'])){
    if(strlen($_POST['num'])>=10){
    header('Access-Control-Allow-Origin:*');
	$string=$_POST['num'];
	$msg=$_POST['msg'];
	$num=explode(',',$string);
    include('way2sms-api.php');
    $client = new WAY2SMSClient();
    $client->login('YOUR_MOBILE_NUMBER', 'YOUR_PASSWORD');
    for($i=0;$i<count($num);$i++){
    $client->send($num[$i],$msg);
    sleep(1);
}
    echo "Message(s) Sent";
    $client->logout();
}
else{
    echo "Enter details properly";
}
}
?> 