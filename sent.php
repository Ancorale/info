<!DOCTYPE html>
<html>

  <head>
  <title>Email Sent</title>


  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <meta name="descrition" content="Info reminder for CCFD Reports">
  <meta name="author" content="William Brian">
  <meta name="theme-color" content="#000">


  <link rel="icon" type="image/ico" href="favicon.ico" />
  <link rel="stylesheet" href="grid.css">
  <link rel="stylesheet" href="styles.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script type="text/javascript" src="script.js"></script>
  <script>window.localStorage.clear();</script>
  </head>

  <?php

  if (isset($_POST["send"])) {
      $reportData = $_POST['reportData'];
      $cary = $_POST['cary'];
      $cary1 = $_POST['cary1'];

      if ($reportData == null) {
           $reportData = 'No report entered.';
      } else {
           $reportData . '<br>';
      }

      if ($cary == 'att') {
        $cary = 'txt.att.net';
      } else if ($cary == 'sprint') {
        $cary = 'messaging.sprintpcs.com';
      } else if ($cary == 'tmobile') {
        $cary = 'tmomail.net';
      } else {
        $cary = 'vtext.com';
      }

      if ($cary1 == 'att') {
        $cary1 = 'txt.att.net';
      } else if ($cary1 == 'sprint') {
        $cary1 = 'messaging.sprintpcs.com';
      } else if ($cary1 == 'tmobile') {
        $cary1 = 'tmomail.net';
      } else {
        $cary1 = 'vtext.com';
      }

      //mail
      $headers = "From: CCFDInfo.site <ccemlbaw@premium13.web-hosting.com> \r\n";
      $reEmail = $_POST['reEmail'];
      $reEmail1 = $_POST['reEmail1'];
      // $cary = 'txt.att.net';
      $phone = $_POST['phone'];
      $txtMsg = $phone . '@' . $cary;
      $phone1 = $_POST['phone1'];
      $txtMsg1 = $phone1 . '@' . $cary1;
      $msg = "Incident: " . $incident . "\n" . "Name: " . $name . "\n" . "Address: ". $address . "\n" . "DOB: " . $dob . "\n" . "Gender: " . $gender . "\n" . "\n" . $reportData;
      mail($reEmail, " Report", $reportData, $headers);
      mail($reEmail1, " Report", $reportData, $headers);
      mail($txtMsg, " Report", $reportData, $headers);
      mail($txtMsg1, " Report", $reportData, $headers);
  }//end of submit
      ?>

  <div class="center">
    <h1 class="">Email Sent!</h1>
    <hr>
    Thank you for using CCFDInfo.site
    <br><hr><br>
      <a href="https://ccfdinfo.site/" class="box" id="sentBack">BACK TO CCFDInfo.site</a>
      <br><br><hr><br>
    <div class="small">
      Suggestions, errors or bugs?
      <br>
      <a href="mailto:wb@ancorale.com?Subject=CCEMP%20Help" style="color:#000; background-color: #fff " target="_top">Click here to let me know at wb&commat;ancorale.com</a>
      <br><br>
      <a href="https://ancorale.com">&copy; Ancorale Digital Design&trade; 2018</a>
    </div>
    <hr>
    <div class="tiny">
      This application is for informational uses only and is not affiliated or endorsed<br> by any federal, state, county or local municipality or agency.
    </div>
    <hr>
  </div>
</html>
