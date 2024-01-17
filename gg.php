<?php
$request = json_decode(file_get_contents('php://input'), true);

file_put_contents('./log_'.date("j.n.Y").'.log', print_r($request, 1), FILE_APPEND);

die;
$url = "https://api.telegram.org/bot6335946999:AAGQSU6fMjn8nGY2lvCW0q2-pGdT7M9WT-A/exportChatInviteLink?chat_id={$request['message']['chat']['id']}";

# Отправляем запрос и получаем ответ
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt( $ch, CURLOPT_CUSTOMREQUEST, 'GET' );

 curl_setopt($ch, CURLOPT_POSTFIELDS,
          http_build_query(array('Can_invite_users' => 1)));

// Receive server response ...
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$server_output = json_decode(curl_exec($ch));

curl_close($ch);

//
//response = requests.get(url)
//data = response.json()

# Получаем пригласительную ссылку
//$invite_link = $data['result']['invite_link'];

file_put_contents('./log_'.date("j.n.Y").'.log', print_r($server_output, true), FILE_APPEND);

die;






//
//$bodyRequest = 'categoriesWithServices';
//$wallet = '8000000026';
//$bearerToken = '830d81dc075197ca68ceeb22012ae94dd34e691980f31baa70bca9a942d3ca02f0ff1fbaa306ffe2ec6e757c96f79f027a39e9974c3b3b1dc29ff36e1d011e9f';
//$secret = 'caf8f464f4aaef047028b9bca1cd17510bd93902045ff0f1407dffc4ac270270';
//$date = '2022-09-22 10:32:46';
//
//echo hash('sha512', "{$bodyRequest} + {$wallet} + {$bearerToken} + {$secret} + {$date}");