
//var timestamp = new Date();
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
let DashboardData;
if (this.readyState == 4 && this.status == 200) {
	//alert (this.responseText);
	test = JSON.parse(this.responseText);
	//alert(test["devices"]["0"]["type"]);
	count = 0;
        

	for ( count in test["devices"]){
	
	if ((test["devices"][count]["type"]) === "network") {
		//alert("test");
		var inMbs = parseFloat(test["devices"][count]["Mb/sIn"]);
		var inMbsID = (test["devices"][count]["Mb/sInID"]);
		var outMbs = parseFloat(test["devices"][count]["Mb/sOut"]);
		var outMbsID = (test["devices"][count]["Mb/sOutID"]);
		//alert(inMbsID);
		var gaugeElement = document.getElementById(('Canvas') + (inMbsID));
		gaugeElement.setAttribute('data-value', inMbs);
		gaugeElement.setAttribute('data-title' , "Download");
	
		var gaugeElement = document.getElementById(('Canvas') + (outMbsID));
		gaugeElement.setAttribute('data-value', outMbs);
		gaugeElement.setAttribute('data-title' , "Upload");
        //animateGauges(inMbs);
        
	//alert (inMbs);
		}
	else if ((test["devices"][count]["type"]) === "performance"){
		
		
		//alert("test");
		
	}


	count = count + 1;
		}


            }
		};
		function RequestJSON(){
		var timestamp = new Date();
		xhttp.open("GET", ("dashboard.json" + "?" + timestamp.getTime()), true);
		xhttp.send();
		setInterval(RequestJSON, 60000);
		}
RequestJSON();


