
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
	else if ((test["devices"][count]["type"]) === "power"){
		
		var Amps = parseFloat(test["devices"][count]["currentUsedAmps"]);
		var AmpsID = (test["devices"][count]["AmpsID"]);
		var Watts = parseFloat(test["devices"][count]["Watts"]);
		var WattsID = (test["devices"][count]["WattsID"]);
		//alert(inMbsID);
		var gaugeElement = document.getElementById(('Canvas') + (AmpsID));
		gaugeElement.setAttribute('data-value', Amps);
		gaugeElement.setAttribute('data-units' , "APM");
		gaugeElement.setAttribute('data-color-major-ticks' , "yellow");
		gaugeElement.setAttribute('data-major-ticks' , "0,1,2,3,4,5,6,7,8,9,10");
		gaugeElement.setAttribute('data-max-value' , "10");
		gaugeElement.setAttribute('data-min-value' , "0");
	
		var gaugeElement = document.getElementById(('Canvas') + (WattsID));
		gaugeElement.setAttribute('data-value', Watts);
		gaugeElement.setAttribute('data-units' , "Watts");
		gaugeElement.setAttribute('data-color-major-ticks' , "yellow");
		gaugeElement.setAttribute('data-major-ticks' ,"0,200,400,600,800,1000,1200,1400,1600,1800,2000,2200,2400" );
		gaugeElement.setAttribute('data-max-value' , "2400");
		gaugeElement.setAttribute('data-min-value' , "0");
		
		//alert("test");
		
	}
	else if ((test["devices"][count]["type"]) === "enviormental"){
		
		var temp = parseFloat(test["devices"][count]["temp"]);
		var tempID = (test["devices"][count]["tempID"]);
		var CO2 = parseFloat(test["devices"][count]["CO2"]);
		var CO2ID = (test["devices"][count]["CO2ID"]);
		var TVOC = parseFloat(test["devices"][count]["TVOC"]);
		var TVOCID = (test["devices"][count]["TVOCID"]);
		//alert(inMbsID);
		var gaugeElement = document.getElementById(('Canvas') + (tempID));
		gaugeElement.setAttribute('data-value', temp);
		gaugeElement.setAttribute('data-units' , "C");
		gaugeElement.setAttribute('data-type' , "linear-gauge");
		gaugeElement.setAttribute('data-major-ticks' , "0,10,20,30,40");
		gaugeElement.setAttribute('data-max-value' , "40");
		gaugeElement.setAttribute('data-min-value' , "0");
	
		var gaugeElement = document.getElementById(('Canvas') + (CO2ID));
		gaugeElement.setAttribute('data-value', CO2);
		gaugeElement.setAttribute('data-units' , "PPM");
		gaugeElement.setAttribute('data-title' , "Carbon Dioxide");
		gaugeElement.setAttribute('data-major-ticks' ,"0,200,400,600,800,1000,1200,1400,1600,1800,2000,2200,2400" );
		gaugeElement.setAttribute('data-max-value' , "2400");
		gaugeElement.setAttribute('data-min-value' , "0");
		
		var gaugeElement = document.getElementById(('Canvas') + (TVOCID));
		gaugeElement.setAttribute('data-value', TVOC);
		gaugeElement.setAttribute('data-units' , "PPM");
		gaugeElement.setAttribute('data-title' , "TVOC");
		gaugeElement.setAttribute('data-major-ticks' ,"0,200,400,600,800,1000,1200,1400,1600,1800,2000,2200,2400" );
		gaugeElement.setAttribute('data-max-value' , "2400");
		gaugeElement.setAttribute('data-min-value' , "0");
	
	
	
	}
	count = count + 1;
		}


            }
		};
		function RequestJSON(){
		var timestamp = new Date();
		xhttp.open("GET", ("dashboard.json" + "?" + timestamp.getTime()), true);
		xhttp.send();

		}
function StartRequest(){
	setInterval(RequestJSON, 60000);
}
RequestJSON();
StartRequest();
clockTimer=0;


