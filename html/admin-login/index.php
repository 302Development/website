<?php
    include_once($_SERVER['DOCUMENT_ROOT']."/php/admin.php");

    if (checkSession()) {
        redirectDashboard();
    }

?>

<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>Admin Login</title>
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
                <img class="brand-image pull-left" src="/assets/images/murdoch-logo-vert-white.svg"/>
                <div class="navbar-header">
                    <a href="javascript:void(0);" class="navbar-brand navbar-brand-custome">Admin Login</a>
                </div><!--/.navbar-header-->
            </div>
            <!-- /.container-fluid -->    
        </nav>
    <!-- end nav -->

    <!-- start page content -->
        <div id="admin-component-box" class="component-box">
            <div class="col-md-12">
                <div class="container-fluid">
                    <?php 
                        if (isset($_GET['incorrect'])) 
                            echo '<div class="has-error">Incorrect login.</div>';
                        else if (isset($_GET['timeout'])) 
                            echo '<div class="has-error">Your session timed out.</div>';
                    ?>

                    <!-- admin login form card -->
                        <div id="admin-login-card" class="pmd-card pmd-card-media-inline pmd-card-default pmd-z-depth">
                            <!-- card header -->
                                <div class="pmd-card-title">
                                    <h2 class="pmd-card-title-text">Admin Login</h2>
                                    <span class="pmd-card-subtitle-text">Secondary text</span>
                                </div>
                            <!-- card body --> 
                                <div class="pmd-card-body"> 
                                            <!-- start form -->
                                                <form class="form-horizontal" action="/admin/" method="POST">
                                                    <input type="hidden" name="Login">
                                                    
                                                    <!-- start user name entry -->
                                                        <div class="form-group pmd-textfield pmd-textfield-floating-label form-group-lg">
                                                            <label for="Username" class="control-label pmd-input-group-label">Username</label>
                                                            <div class="input-group">
                                                                <div class="input-group-addon"><i class="material-icons md-dark pmd-sm">perm_identity</i></div>
                                                                <input type="text" class="form-control form-group-lg" name="Username" id="Username" required>
                                                            </div>
                                                        </div>
                                                    <!-- end user name entry -->
                                                            
                                                    <!-- start password entry -->
                                                        <div class="form-group pmd-textfield pmd-textfield-floating-label form-group-lg">
                                                            <label for="Password" class="control-label pmd-input-group-label">Password</label>
                                                            <div class="input-group">
                                                                <div class="input-group-addon"><i class="material-icons md-dark pmd-sm">https</i></div>
                                                                <input type="password" class="form-control form-group-lg" name="Password" id="Password" required>
                                                            </div>
                                                        </div>
                                                    <!-- end password entry -->

                                                    <!-- submit button -->

                                                    <!-- DEVELOPER NOTE:
                                                    These are set to <a> links for testing purposes. 
                                                        <button> buttons can be used is needed once the form goes live. 
                                                    -->
                                                    <input class="btn btn-lg pmd-btn-raised btn-primary btn-block pmd-ripple-effect" type="submit" value="Login">
                                                    <!-- cancel button -->
                                                    <a href="/" class="btn btn-lg pmd-btn-flat btn-primary btn-block pmd-ripple-effect" type="button">Cancel</a>

                                                </form>
                                            <!-- end form -->
                                </div>
                            <!-- end card body -->
                        </div>
                    <!-- end admin login form card -->

                </div><!-- /.container-fluid -->
            </div><!-- /.col-md-12 -->
        </div><!-- /.component-box -->
    <!-- end page content -->

    <!-- external scripts -->
        <script src="/assets/js/jquery-1.12.2.min.js"></script>
        <script src="/assets/js/bootstrap.min.js"></script>
        <script src="/assets/js/propeller.min.js"></script>
    <!-- /external scripts -->

    <!-- start footer -->
        <footer class="mdc-footer">
            <ul>
                <li><a href="/">Data Center Dashboard</a></li>
                <li><a href="http://www.murdoch.edu.au/">Main Murdoch Website</a></li>
                <!-- <li><a href="/html/admin-login/">Admin Login</a></li> -->
            </ul>
        </footer>
    <!-- end footer -->   

    </body>
</html>
