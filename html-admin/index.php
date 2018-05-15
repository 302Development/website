<?php

    if ( !isset($_POST['Login']) || !isset($_POST['Username']) || !isset($_POST['Password']) ) {
        header("Location: /html/admin-login/?fail");
        die();
    }

    $USERNAME_CHECK = "admin";
    $PASSWORD_CHECK = "$2y$10$8OKna.EwyI.97nULT8CBQeAvgVeVqyTpnQ4DHlFnpwZwGAoxsZLkm";

    /*  
        Generating the above hash:
        $password = password_hash($_POST['Password'], PASSWORD_DEFAULT);
    */

    $username = $_POST['Username'];
    $password = $_POST['Password'];
    if (strcmp($username, $USERNAME_CHECK) !== 0 || !password_verify($password, $PASSWORD_CHECK)){
        header("Location: /html/admin-login/?fail");
        die();
    }

?>

<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>Murdoch Data Center Dashboard</title>
        <!-- Bootstrap css-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <!--Google Icon Font-->
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!-- Propeller css -->
        <link rel="stylesheet" type="text/css" href="/assets/css/propeller.css" />
        
        <!-- Propeller theme css-->
        <link rel="stylesheet" type="text/css" href="/assets/css/propeller-theme.css" />
    
        <!--Fonts-->
        <link href="/assets/fonts/roboto/" rel="stylesheet">
    </head>

    <body>

    <!-- start nav -->
        <nav class="navbar navbar-inverse navbar-static-top pmd-z-depth">
            <div class="container-fluid">
                <img class="brand-image img-responsive pull-left" src="/assets/images/murdoch-logo-vert-white.svg"/>
                <div class="navbar-header">
                    <a href="javascript:void(0);" class="navbar-brand navbar-brand-custome">Dashboard Configuration</a>
                    <div class="pmd-tabs pmd-tabs-bg">   
                        <div class="pmd-tab-active-bar"></div>
                        <ul role="tablist" class="nav nav-tabs">
                            <li class="active" role="presentation"><a data-toggle="tab" role="tab" aria-controls="layout" href="#layout-fixed">Dashboard Layout</a></li>
                            <li role="presentation"><a data-toggle="tab" role="tab" aria-controls="status" href="#status-fixed">Status</a></li>
                            <li role="presentation"><a data-toggle="tab" role="tab" aria-controls="presentation" href="#presentation-fixed">Public Presentation</a></li>
                        </ul>
                    </div>
                </div><!--/.navbar-header-->
            </div><!-- /.container-fluid -->
        </nav>
    <!-- end nav -->

    <!-- start page content -->
    <div class="component-box">
            <div class="col-md-12">
                <div class="tab-content">

    <!-- start layout tab -->
                <div role="tabpanel" class="tab-pane active" id="layout-fixed">
                    Layout Tab
                </div><!-- /.tab-panel -->
    <!-- end layout tab -->

    <!-- start status tab -->
                <div role="tabpanel" class="tab-pane" id="status-fixed">
                    Status Tab
                </div><!-- /.tab-panel -->
    <!-- end status tab -->

    <!-- start presentation-fab -->
                <div role="tabpanel" class="tab-pane" id= "presentation-fixed">
                    Presentation Mode Tab
                </div><!-- /.tabpanel -->
    <!-- end presentation-fab -->

                </div><!-- /.tab-content -->
            </div><!-- /.col-md-12 -->
        </div><!-- /.component-box -->
    <!-- end page content -->

<!-- start scripts -->

    <!-- external scripts -->
        <script src="/assets/js/jquery-1.12.2.min.js"></script>
        <script src="/assets/js/bootstrap.min.js"></script>
        <script src="/assets/js/gauge.min.js"></script>
        <script src="/assets/js/propeller.min.js"></script>
    <!-- /external scripts -->

<!-- end scripts -->

<!-- start footer -->
    <footer class="mdc-footer">
        <ul>
            <li><a href="/index.html">Data Center Dashboard</a></li>
            <li><a href="http://www.murdoch.edu.au/">Main Murdoch Website</a></li>
            <li><a href="/index.html">Logout</a></li>
        </ul>
    </footer>
<!-- end footer -->

</body>

</html>