<?php 
    include_once($_SERVER['DOCUMENT_ROOT']."/php/render.php");
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
        <link rel="stylesheet" type="text/css" href="assets/css/propeller.css" />
        
        <!-- Propeller theme css-->
        <link rel="stylesheet" type="text/css" href="assets/css/propeller-theme.css" />
    
        <!--Fonts-->
        <link href="assets/fonts/roboto/" rel="stylesheet">
    </head>

    <body>

    <!-- start nav -->
        <nav class="navbar navbar-inverse navbar-static-top pmd-z-depth">
            <div class="container-fluid">
                <img class="brand-image img-responsive pull-left" src="/assets/images/murdoch-logo-vert-white.svg"/>
                <div class="navbar-header">
                    <a href="javascript:void(0);" class="navbar-brand navbar-brand-custome">Murdoch University Data Center Dashboard</a>
                    <div class="pmd-tabs pmd-tabs-bg">   
                        <div class="pmd-tab-active-bar"></div>
                        <ul role="tablist" class="nav nav-tabs">
                            <li class="active" role="presentation"><a data-toggle="tab" role="tab" aria-controls="network" href="#network-fixed">Network</a></li>
                            <li role="presentation"><a data-toggle="tab" role="tab" aria-controls="performance" href="#performance-fixed">Performance</a></li>
                            <li role="presentation"><a data-toggle="tab" role="tab" aria-controls="power" href="#power-fixed">Power</a></li>
                            <li role="presentation"><a data-toggle="tab" role="tab" aria-controls="environment" href="#environment-fixed">Environment</a></li>
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

        <!-- start network tab -->
                    <div role="tabpanel" class="tab-pane active" id="network-fixed">
                    
                    <!-- start rendering network cards -->
                    <?php
                        render('network-cards');
                    ?>  
                    <!-- end rendering network cards -->

                    </div><!-- /.tab-panel -->
        <!-- end network tab -->

        <!-- start performance tab -->
                    <div role="tabpanel" class="tab-pane" id="performance-fixed">
                    
                    <!-- start rendering performance cards -->
                    <?php
                        render('performance-cards');
                    ?>  
                    <!-- end rendering performance cards -->

                    </div><!-- /.tab-panel -->
        <!-- end performance tab -->

        <!-- start power tab -->
                    <div role="tabpanel" class="tab-pane" id="power-fixed">

                    <!-- start rendering power cards -->
                    <?php
                        render('power-cards');
                    ?>  
                    <!-- end rendering power cards -->

                    </div><!-- /.tabpanel -->
        <!-- end power tab -->

        <!-- start environment tab -->
                    <div role="tabpanel" class="tab-pane" id="environment-fixed">

                    <!-- start rendering environment cards -->
                    <?php
                        render('environment-cards');
                    ?>  
                    <!-- end rendering environment cards -->
                    
                    </div><!-- /.tabpanel -->
        <!-- end environment tab -->

                </div><!-- /.tab-content -->
            </div><!-- /.col-md-12 -->
        </div><!-- /.component-box -->
    <!-- end page content -->

    <!-- start scripts -->

        <!-- external scripts -->
            <script src="assets/js/jquery-1.12.2.min.js"></script>
            <script src="assets/js/bootstrap.min.js"></script>
            <script src="assets/js/gauge.min.js"></script>
            <script src="assets/js/propeller.min.js"></script>
            <script src="assets/js/pullData.js"></script>
            <script src="assets/js/StandardPres.js"></script>
        <!-- /external scripts -->

        <!-- start random testing data (REMOVED)-->
        <!-- end random testing data -->

    <!-- end scripts -->

    <!-- start footer -->
        <footer class="mdc-footer">
            <ul>
                <li><a href="html/about.html">About This Page</a></li>
                <li><a href="http://www.murdoch.edu.au/">Main Murdoch Website</a></li>
                <li><a href="html/admin-login/">Admin Login</a></li>
            </ul>
        </footer>
    <!-- end footer -->

    </body>
</html>
