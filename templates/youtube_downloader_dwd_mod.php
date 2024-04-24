<!DOCTYPE html>
<html lang="en">
<head>
  <title>Youtube Downloader</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->  
<!--   <link rel="icon" type="image/png" href="css/dashboard_images/icons/favicon.ico"/>

 --><!--===============================================================================================-->
   <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">

  <link rel="stylesheet" type="text/css" href="../static/css/dashboard_vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="../static/css/dashboard_fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="../static/css/dashboard_fonts/iconic/css/material-design-iconic-font.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="../static/css/dashboard_vendor/animate/animate.css">
<!--===============================================================================================-->  
  <link rel="stylesheet" type="text/css" href="../static/css/dashboard_vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="../static/css/dashboard_vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="../static/css/dashboard_vendor/select2/select2.min.css">
<!--===============================================================================================-->  
  <link rel="stylesheet" type="text/css" href="../static/css/dashboard_vendor/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="../static/css/dashboard_css/util.css">
  <link rel="stylesheet" type="text/css" href="../static/css/dashboard_css/main.css">
<!--===============================================================================================-->
</head>
<body>
  <div class="border:1px black solid; margin-top:50px" >
    
    </div>
  <div class="container-login100" style="background-image: url('../static/css/dashboard_images/bg-01.jpg');">
    
    <div class="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30 border" border="1px solid black">
      <a href="http://127.0.0.1:5000/dashboard" ><img src="../static/images/back.png" width="50px" height="50px" border="1px black solid" margin-top="-50px"></a>  
      <form class="login100-form validate-form" action="result24" method="post" border="1px solid black">

        <span class="login100-form-title p-b-37 " style="font-weight: bolder;">
          Youtube Video Downloader
        </span>

<!--          <input type = "file" name = "file" required />
 -->
        <div class="wrap-input100 validate-input m-b-25" data-validate = "Enter Email_ID">
          <input class="input100 font-weight-bold" id="link_of_video" name = "link_of_video" type="text"  placeholder="Enter secret key here" style="margin-top: 20px">
          <span class="focus-input100"></span>
        </div>

       <!--  <div class="wrap-input100 validate-input m-b-25" data-validate = "Enter Email_ID">
          <input class="input100 font-weight-bold" id="Email ID" name = "Email ID" type="text"  placeholder="Email ID" style="margin-top: 20px">
          <span class="focus-input100"></span>
        </div> -->
        
        <div class="container-login100-form-btn">
           <input type="submit" value="Download" name="btn" class="login100-form-btn" id="video_download">
          <!-- <button class="login100-form-btn">
            Download
          </button> -->
        </div>
        <center><p style="color: red">
        {{message}}
      </p></center>
        <center><p style="color: red">
          Your secret key is: {{filename}}
      </p></center>
        <!-- <div class="text-center p-t-57 p-b-20">
          <span class="txt1">
            Or login with
          </span>
        </div> -->

        <!-- <div class="flex-c p-b-112">
          <a href="#" class="login100-social-item">
            <i class="fa fa-facebook-f"></i>
          </a>

          <a href="#" class="login100-social-item">
            <img src="images/icons/icon-google.png" alt="GOOGLE">
          </a>
        </div> -->

        <!-- <div class="text-center">
          <a href="#" class="txt2 hov1">
            Sign Up
          </a>
        </div> -->
      </form>

      
    </div>
  </div>
  
  

  <div id="dropDownSelect1"></div>
  
<!--===============================================================================================-->
  <script src="../static/css/dashboard_vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
  <script src="../static/css/dashboard_vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
  <script src="../static/css/dashboard_vendor/bootstrap/js/popper.js"></script>
  <script src="../static/css/dashboard_vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
  <script src="../static/css/dashboard_vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
  <script src="../static/css/dashboard_vendor/daterangepicker/moment.min.js"></script>
  <script src="css/dashboard_vendor/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
  <script src="../static/css/dashboard_vendor/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
  <script src="../static/css/dashboard_js/main.js"></script>

</body>
</html>