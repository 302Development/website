<?php
	include_once($_SERVER['DOCUMENT_ROOT']."/php/admin.php");
	include_once($_SERVER['DOCUMENT_ROOT']."/php/render.php");

	function adminError($msg) {
		echo "
		<div class=\"text-center\">
			<h1>
				There was an issue: $msg.
			<h1/>
		</div>
		";
	}

	// Authentication.

	if (isset($_GET['logout'])) {
		endSession();
		header("Location: /");
		die();

	} else if (!isset($_SESSION['login'])) {

		if (!isset($_POST['Login']) || !isset($_POST['Username']) || !isset($_POST['Password'])) {
			notLoggedIn();
		}

		$username = $_POST['Username'];
		$password = $_POST['Password'];

		if (!checkLogin($username, $password)) {
			incorrectLogin();
		}

		$_SESSION['login'] = true;
		$_SESSION['timeout'] = time();

	} else if (!checkSession()) {
		timeout();
	}

	// After authentication has been complete parse actions.

	include_once($_SERVER['DOCUMENT_ROOT']."/php/render.php");

	if (isset($_POST['action'])) {
		switch ($_POST['action']) {
			case 'Update':
				Database::updateCard($_POST);
				break;

			case 'Delete':
				Database::deleteCard($_POST);
				break;

			case 'Add':
				Database::addCard($_POST);
				break;

			 default:
			 	adminError("Unsupported action.");
				break;
		}
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
					<a href="javascript:void(0);" class="navbar-brand navbar-brand-custome" style="font-size: 160%">Dashboard Configuration</a>
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
			<div class="col-md-12" style="margin-bottom: 10%;">
				<div class="tab-content">

				<!-- start layout tab -->
					<div role="tabpanel" class="tab-pane active" id="layout-fixed">
						<!-- start accordian -->
							<div class="panel-group pmd-accordion" id="layout-accordian" role="tablist" aria-multiselectable="true" > 
							
							<!-- start network panel -->    
								<div class="panel panel-default"> 
									<div class="panel-heading" role="tab" id="network-heading">
										<h4 class="panel-title"> 
											<a data-toggle="collapse" data-parent="#layout-accordian" href="#network-collapse" aria-expanded="false" aria-controls="network-collapse" data-expandable="false"> Network Page <i class="material-icons md-dark pmd-sm pmd-accordion-arrow">keyboard_arrow_down</i></a>
										</h4>
									</div>
									<div id="network-collapse" class="panel-collapse collapse" role="tabpanel" aria-labelledby="network-heading">
										<div class="panel-body">
											<?php
												render('network-settings');
											?>     
											<form action="#" method="post">
												<input type="hidden" name="category" value="network" />
												<input type="submit" class="btn btn-primary" name="action" value="Add" />
											</form>                                       
										</div>
									</div>
								</div>
							<!-- end network panel -->

							<!-- start performance panel -->
								<div class="panel panel-default"> 
									<div class="panel-heading" role="tab" id="performance-heading">
										<h4 class="panel-title"> 
											<a data-toggle="collapse" data-parent="#layout-accordian" href="#performance-collapse" aria-expanded="false" aria-controls="performance-collapse"  data-expandable="false"> Performance Page <i class="material-icons md-dark pmd-sm pmd-accordion-arrow">keyboard_arrow_down</i></a>
										</h4>
									</div>
									<div id="performance-collapse" class="panel-collapse collapse" role="tabpanel" aria-labelledby="performance-heading">
										<div class="panel-body">
											<?php
												render('performance-settings');
											?>     
											<form action="#" method="post">
												<input type="hidden" name="category" value="performance" />
												<input type="submit" class="btn btn-primary" name="action" value="Add" />
											</form>     
										</div>
									</div>
								</div>
							<!-- end performance panel -->

							<!-- start power panel -->
								<div class="panel panel-default"> 
									<div class="panel-heading" role="tab" id="power-heading">
										<h4 class="panel-title"> 
											<a class="collapsed" data-toggle="collapse" data-parent="#layout-accordian" href="#power-collapse" aria-expanded="false" aria-controls="power-collapse"  data-expandable="false"> Power Page <i class="material-icons md-dark pmd-sm pmd-accordion-arrow">keyboard_arrow_down</i></a>
										</h4>
									</div>
									<div id="power-collapse" class="panel-collapse collapse" role="tabpanel" aria-labelledby="power-heading">
										<div class="panel-body">
											<?php
												render('power-settings');
											?>     
											<form action="#" method="post">
												<input type="hidden" name="category" value="power" />
												<input type="submit" class="btn btn-primary" name="action" value="Add" />
											</form>   
										</div>
									</div>
								</div>
							<!-- end power panel -->

							<!-- start environment panel -->
								<div class="panel panel-default"> 
									<div class="panel-heading" role="tab" id="environment-heading">
										<h4 class="panel-title"> 
											<a class="collapsed" data-toggle="collapse" data-parent="#layout-accordian" href="#environment-collapse" aria-expanded="false" aria-controls="environment-collapse"  data-expandable="false"> Environment Page <i class="material-icons md-dark pmd-sm pmd-accordion-arrow">keyboard_arrow_down</i></a>
										</h4>
									</div>
									<div id="environment-collapse" class="panel-collapse collapse" role="tabpanel" aria-labelledby="environment-heading">
										<div class="panel-body">
											<?php
												render('environment-settings');
											?>     
											<form action="#" method="post">
												<input type="hidden" name="category" value="environment" />
												<input type="submit" class="btn btn-primary" name="action" value="Add" />
											</form>  
										</div>
									</div>
								</div>
							<!-- end power panel -->
							</div> 
						<!-- home accordian -->
					</div><!-- /.tab-panel -->
				<!-- end layout tab -->

				<!-- start status tab -->
					<div role="tabpanel" class="tab-pane" id="status-fixed">
						<!-- start table card -->
							<div id="admin-status-card" class="pmd-card pmd-z-depth pmd-card-custom-view">
								<div class="table-responsive">
									<div id="example-checkbox_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer">
										<div class="pmd-card-title">
											<div class="data-table-title">
												<h2 class="pmd-card-title-text">Propeller Data table</h2>
											</div>
											<div class="search-paper pmd-textfield">
												<div id="example-checkbox_filter" class="dataTables_filter">
													<label>
														<input class="form-control input-sm" placeholder="Search" aria-controls="example-checkbox" type="search">
													</label>
												</div>
											</div><!-- search-paper -->
										</div><!-- ./pmd-card-title -->
										<div class="custom-select-info" style="display: none;">
											<div class="custom-select-item">     
											</div>
											<div class="custom-select-action">
												<button class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary" type="button"><i class="material-icons pmd-sm">delete</i></button>
												<button class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary" type="button"><i class="material-icons pmd-sm">more_vert</i></button>
											</div>
										</div><!-- ./custom-select-info -->
										<div class="row">
											<div class="col-sm-12">
												<table id="example-checkbox" class="table pmd-table table-hover table-striped display responsive nowrap dataTable no-footer" role="grid" aria-describedby="example-checkbox_info" style="width: 100%;" width="100%" cellspacing="0">
													<thead>
														<tr role="row">
															<th class="select-checkbox sorting_disabled" rowspan="1" colspan="1" style="width: 0px;" aria-label=""></th>
															<th class="sorting_asc" tabindex="0" aria-controls="example-checkbox" rowspan="1" colspan="1" style="width: 61px;" aria-sort="ascending" aria-label="First name: activate to sort column descending">First name</th>
															<th class="sorting" tabindex="0" aria-controls="example-checkbox" rowspan="1" colspan="1" style="width: 61px;" aria-label="Last name: activate to sort column ascending">Last name</th>
															<th class="sorting" tabindex="0" aria-controls="example-checkbox" rowspan="1" colspan="1" style="width: 180px;" aria-label="Position: activate to sort column ascending">Position</th>
															<th class="sorting" tabindex="0" aria-controls="example-checkbox" rowspan="1" colspan="1" style="width: 83px;" aria-label="Office: activate to sort column ascending">Office</th>
															<th class="sorting" tabindex="0" aria-controls="example-checkbox" rowspan="1" colspan="1" style="width: 23px;" aria-label="Age: activate to sort column ascending">Age</th>
															<th class="sorting" tabindex="0" aria-controls="example-checkbox" rowspan="1" colspan="1" style="width: 68px;" aria-label="Start date: activate to sort column ascending">Start date</th>
														</tr>
													</thead>
													<tbody>       
														<tr role="row" class="odd">
																<td class=" select-checkbox"></td>
																<td class="sorting_1">Airi</td>
																<td>Satou</td>
																<td>Accountant</td>
																<td>Tokyo</td>
																<td>33</td>
																<td>2008/11/28</td>
															</tr><tr role="row" class="even">
																<td class=" select-checkbox"></td>
																<td class="sorting_1">Airi</td>
																<td>Satou</td>
																<td>Accountant</td>
																<td>Tokyo</td>
																<td>33</td>
																<td>2008/11/28</td>
															</tr><tr role="row" class="odd">
																<td class=" select-checkbox"></td>
																<td class="sorting_1">Airi</td>
																<td>Satou</td>
																<td>Accountant</td>
																<td>Tokyo</td>
																<td>33</td>
																<td>2008/11/28</td>
															</tr><tr role="row" class="even">
																<td class=" select-checkbox"></td>
																<td class="sorting_1">Airi</td>
																<td>Satou</td>
																<td>Accountant</td>
																<td>Tokyo</td>
																<td>33</td>
																<td>2008/11/28</td>
															</tr><tr role="row" class="odd">
																<td class=" select-checkbox"></td>
																<td class="sorting_1">Airi</td>
																<td>Satou</td>
																<td>Accountant</td>
																<td>Tokyo</td>
																<td>33</td>
																<td>2008/11/28</td>
															</tr><tr role="row" class="even">
																<td class=" select-checkbox"></td>
																<td class="sorting_1">Ashton</td>
																<td>Cox</td>
																<td>Junior Technical Author</td>
																<td>San Francisco</td>
																<td>66</td>
																<td>2009/01/12</td>
														</tr>
													</tbody>
												</table>
											</div><!-- ./col-sm-12 -->
										</div><!-- ./row -->
										<div class="pmd-card-footer">
											<div class="pmd-datatable-pagination">
												<div class="dataTables_length" id="example-checkbox_length">
													<label>
														<span class="custom-select-title">Rows per page:</span>
														<span class="custom-select">
															<select name="example-checkbox_length" aria-controls="example-checkbox" class="form-control input-sm">
																<option value="10">10</option>
																<option value="25">25</option>
																<option value="50">50</option>
																<option value="100">100</option>
															</select>
														</span>
													</label>
												</div>
												<div class="dataTables_info" id="example-checkbox_info" role="status" aria-live="polite"> 1 - 10 of 19 </div>
												<div class="dataTables_paginate paging_simple" id="example-checkbox_paginate">
													<ul class="pagination">
														<li class="paginate_button previous disabled" id="example-checkbox_previous"><a href="#" aria-controls="example-checkbox" data-dt-idx="0" tabindex="0"> </a></li>
														<li class="paginate_button next" id="example-checkbox_next"><a href="#" aria-controls="example-checkbox" data-dt-idx="1" tabindex="0"> </a></li>
													</ul>
												</div>
											</div><!-- pmd-datatable-pagination -->
										</div><!-- ./pmd-card-footer -->
									</div>
								</div><!-- ./table-responsive -->
							</div><!-- ./pmd-card -->
						<!-- end table card -->
					</div><!-- /.tab-panel -->
				<!-- end status tab -->

				<!-- start presentation-fab -->
					<div role="tabpanel" class="tab-pane" id= "presentation-fixed">
						<?php
							render('presentation-cards');
						?>
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
		<script src="/assets/js/propeller.min.js"></script>
		<script src="/assets/js/pullData.js"></script>
		<script>
$(document).ready(function() {
    $('#example').DataTable();
} );
		</script>
	<!-- /external scripts -->

<!-- end scripts -->

<!-- start footer -->
	<footer class="mdc-footer">
		<ul>
			<li><a href="/">Data Center Dashboard</a></li>
			<li><a href="http://www.murdoch.edu.au/">Main Murdoch Website</a></li>
			<li><a href="/admin/?logout">Logout</a></li>
		</ul>
	</footer>
<!-- end footer -->

</body>

</html>