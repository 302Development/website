
//var timestamp = new Date();
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
let DashboardData;
if (this.readyState == 4 && this.status == 200) {

	DashboardData = JSON.parse(this.responseText);

	count = 0;
        

	for ( count in DashboardData["devices"]){
	
	if ((DashboardData["devices"][count]["type"]) === "network") {

		//Mbs in
		var inMbs = parseFloat(DashboardData["devices"][count]["Mb/sIn"]["value"]);
		var inMbsID = (DashboardData["devices"][count]["Mb/sIn"]["ID"]);
		//Mbs out
		var outMbs = parseFloat(DashboardData["devices"][count]["Mb/sOut"]["value"]);
		var outMbsID = (DashboardData["devices"][count]["Mb/sOut"]["ID"]);

		//Mbs in
		var gaugeElement = document.getElementById(('Canvas') + (inMbsID));
		if (gaugeElement !==null){
		gaugeElement.setAttribute('data-title' , "Download");
		gaugeElement.setAttribute('data-color-bar-progress' , "rgb(175,238,238)");
		
		if(inMbs <= 100) {
			gaugeElement.setAttribute('data-value', inMbs);
			gaugeElement.setAttribute('data-units' , "Mb/s");

		} else if (inMbs <=1000){
			gaugeElement.setAttribute('data-value', inMbs);
			gaugeElement.setAttribute('data-units' , "Mb/s");	
			gaugeElement.setAttribute('data-major-ticks' ,"0,100,200,300,400,500,600,700,800,900,1000" );
			gaugeElement.setAttribute('data-max-value' , "1000");
			gaugeElement.setAttribute('data-min-value' , "0");
		} else if (inMbs <= 10000){
			inMbs = inMbs / 1000;
			gaugeElement.setAttribute('data-value', inMbs);
			gaugeElement.setAttribute('data-units' , "Gb/s");	
			gaugeElement.setAttribute('data-major-ticks' ,"0,1,2,3,4,5,6,7,8,9,10" );
			gaugeElement.setAttribute('data-max-value' , "10");
			gaugeElement.setAttribute('data-min-value' , "0");
		} else {
			inMbs = inMbs / 1000;
			gaugeElement.setAttribute('data-value', inMbs);
			gaugeElement.setAttribute('data-units' , "Gb/s");	
			gaugeElement.setAttribute('data-major-ticks' ,"0,10,20,30,40,50" );
			gaugeElement.setAttribute('data-max-value' , "50");
			gaugeElement.setAttribute('data-min-value' , "0");
		}
		} else {
			alert("MBSIN: Error GageID:" + inMbsID + " Does Not Exist");
		}
		
		//Mbs out
		var gaugeElement = document.getElementById(('Canvas') + (outMbsID));
		if (gaugeElement !==null){
		gaugeElement.setAttribute('data-title' , "Upload");
		gaugeElement.setAttribute('data-color-bar-progress' , "rgb(221,160,221)");
		
		if(outMbs <= 100) {
			gaugeElement.setAttribute('data-value', outMbs);
			gaugeElement.setAttribute('data-units' , "Mb/s");

		} else if (outMbs <=1000){
			gaugeElement.setAttribute('data-value', outMbs);
			gaugeElement.setAttribute('data-units' , "Mb/s");	
			gaugeElement.setAttribute('data-major-ticks' ,"0,100,200,300,400,500,600,700,800,900,1000" );
			gaugeElement.setAttribute('data-max-value' , "1000");
			gaugeElement.setAttribute('data-min-value' , "0");
		} else if (outMbs <= 10000){
			outMbs = outMbs / 1000;
			gaugeElement.setAttribute('data-value', outMbs);
			gaugeElement.setAttribute('data-units' , "Gb/s");	
			gaugeElement.setAttribute('data-major-ticks' ,"0,1,2,3,4,5,6,7,8,9,10" );
			gaugeElement.setAttribute('data-max-value' , "10");
			gaugeElement.setAttribute('data-min-value' , "0");
		} else {
			outMbs = outMbs / 1000;
			gaugeElement.setAttribute('data-value', outMbs);
			gaugeElement.setAttribute('data-units' , "Gb/s");	
			gaugeElement.setAttribute('data-major-ticks' ,"0,10,20,30,40,50" );
			gaugeElement.setAttribute('data-max-value' , "50");
			gaugeElement.setAttribute('data-min-value' , "0");
		}
		} else {
			alert("MBSOUT: Error GageID:" + outMbsID + " Does Not Exist");
		}

		
		
		} else if ((DashboardData["devices"][count]["type"]) === "power"){
		
		//amps
		var Amps = parseFloat(DashboardData["devices"][count]["currentUsedAmps"]["value"]);
		var AmpsID = (DashboardData["devices"][count]["currentUsedAmps"]["ID"]);
		//watts
		var Watts = parseFloat(DashboardData["devices"][count]["Watts"]["value"]);
		var WattsID = (DashboardData["devices"][count]["Watts"]["ID"]);

		//amps gage
		var gaugeElement = document.getElementById(('Canvas') + (AmpsID));
		if (gaugeElement !==null){
		gaugeElement.setAttribute('data-value', Amps);
		gaugeElement.setAttribute('data-units' , "amps");
		gaugeElement.setAttribute('data-color-bar-progress' , "yellow");
		gaugeElement.setAttribute('data-major-ticks' , "0,2,4,6,8,10,12,14,16");
		gaugeElement.setAttribute('data-max-value' , "16");
		gaugeElement.setAttribute('data-min-value' , "0");
		} else {
			alert("AMP: Error GageID:" + AmpsID + " Does Not Exist");
		}
		
		//watts gage
		var gaugeElement = document.getElementById(('Canvas') + (WattsID));
		if (gaugeElement !==null){
		gaugeElement.setAttribute('data-color-bar-progress' , "black");
		if (Watts <= 1000) {
			gaugeElement.setAttribute('data-value', Watts);
			gaugeElement.setAttribute('data-units' , "watts");
			gaugeElement.setAttribute('data-major-ticks' ,"0,100,200,300,400,500,600,700,800,900,1000" );
			gaugeElement.setAttribute('data-max-value' , "1000");
			gaugeElement.setAttribute('data-min-value' , "0");
			//gaugeElement.setAttribute('data-highlights' , '[{"from": 0, "to": 250, "color": "green"},{"from": 250, "to": 500, "color": "yellow"},{"from": 500, "to": 750, "color": "orange"},{"from": 750, "to": 1000, "color": "red"}]');
		} else if (Watts <= 10000) {
			Watts = Watts / 1000;
			gaugeElement.setAttribute('data-value', Watts);
			gaugeElement.setAttribute('data-units' , "Kw");
			gaugeElement.setAttribute('data-major-ticks' ,"0,1,2,3,4,5,6,7,8,9,10" );
			gaugeElement.setAttribute('data-max-value' , "10");
			gaugeElement.setAttribute('data-min-value' , "0");
		} else {
			Watts = Watts / 1000;
			gaugeElement.setAttribute('data-value', Watts);
			gaugeElement.setAttribute('data-units' , "Kw");
			gaugeElement.setAttribute('data-major-ticks' ,"0,2,4,6,8,10,12,14,16,18,20" );
			gaugeElement.setAttribute('data-max-value' , "20");
			gaugeElement.setAttribute('data-min-value' , "0");
		}
		} else {
			alert("WATT: Error GageID:" + WattsID + " Does Not Exist");
		}
		

		
	} 
	else if ((DashboardData["devices"][count]["type"]) === "environmental"){
		
		//temp
		var temp = parseFloat(DashboardData["devices"][count]["temp"]["value"]);
		var tempID = (DashboardData["devices"][count]["temp"]["ID"]);
		//TVOC
		var CO2 = parseFloat(DashboardData["devices"][count]["CO2"]["value"]);
		var CO2ID = (DashboardData["devices"][count]["CO2"]["ID"]);
		//C02
		var TVOC = parseFloat(DashboardData["devices"][count]["TVOC"]["value"]);
		var TVOCID = (DashboardData["devices"][count]["TVOC"]["ID"]);
		
		//Temp
		var gaugeElement = document.getElementById(('Canvas') + (tempID));
		if (gaugeElement !==null){
		gaugeElement.setAttribute('data-value', temp);
		gaugeElement.setAttribute('data-units' , "°C");
		gaugeElement.setAttribute('data-color-bar-progress' , "red");
		gaugeElement.setAttribute('data-type' , "linear-gauge");
		gaugeElement.setAttribute('data-major-ticks' , "0,10,20,30,40");
		gaugeElement.setAttribute('data-max-value' , "40");
		gaugeElement.setAttribute('data-min-value' , "0");
		gaugeElement.setAttribute('data-font-style-value' , "sans-serif");
		gaugeElement.setAttribute('data-font-weight-value' , "bold");
		gaugeElement.setAttribute('data-font-value-size' , 14);
		gaugeElement.setAttribute('data-font-units-size' , 10);
		gaugeElement.setAttribute('data-font-numbers-size' , 10);
		} else {
			alert("TEMP: Error GageID:" + tempID + " Does Not Exist");
		}
		
		//Carbon Dioxide 
		var gaugeElement = document.getElementById(('Canvas') + (CO2ID));
		if (gaugeElement !==null){
		gaugeElement.setAttribute('data-value', CO2);
		gaugeElement.setAttribute('data-units' , "PPM");
		gaugeElement.setAttribute('data-color-bar-progress' , "rgb(255,165,0)");
		gaugeElement.setAttribute('data-title' , "CO2");
		gaugeElement.setAttribute('data-major-ticks' ,"0,10000,20000,30000,40000,50000,60000" );
		gaugeElement.setAttribute('data-max-value' , "60000");
		gaugeElement.setAttribute('data-min-value' , "0");
		gaugeElement.setAttribute('data-highlights' , '[{"from": 50000, "to": 60000, "color": "red"}]');
		} else {
			alert("CO2: Error GageID:" + CO2ID + " Does Not Exist");
		}
		
		//Toxic Volatile Organic Compunds 
		var gaugeElement = document.getElementById(('Canvas') + (TVOCID));
		if (gaugeElement !==null){
		gaugeElement.setAttribute('data-value', TVOC);
		gaugeElement.setAttribute('data-units' , "PPM");
		gaugeElement.setAttribute('data-title' , "TVOC");
		gaugeElement.setAttribute('data-major-ticks' ,"500, 1000,1500,2000,2500,3000" );
		gaugeElement.setAttribute('data-max-value' , "3000");
		gaugeElement.setAttribute('data-min-value' , "0");
		} else {
			alert("TVOC: Error GageID:" + TVOCID + " Does Not Exist");
		}
		
		
		
		}else if ((DashboardData["devices"][count]["type"]) === "performance"){
		//Get Storage Vars
		var storageSizeGB = parseInt(DashboardData["devices"][count]["storage"]["storageSizeGB"]);
		var storagePercUsed = parseInt(DashboardData["devices"][count]["storage"]["storagePercUsed"]);
		var storageID = (DashboardData["devices"][count]["storage"]["ID"]); 
		//Get Mem Vars
		var memSizeGB = parseFloat(DashboardData["devices"][count]["mem"]["memSize"]);
		var memPercUsed = parseFloat(DashboardData["devices"][count]["mem"]["memPercUsed"]);
		var memID = (DashboardData["devices"][count]["mem"]["ID"]);
		//Get Up Time Vars
		var upTimeDays = parseFloat(DashboardData["devices"][count]["upTimeDays"]["value"]);
		var upTimeDaysID = (DashboardData["devices"][count]["upTimeDays"]["ID"]);
		//Get Proc Vars
		var procPercCore = (DashboardData["devices"][count]["procPercPerCore"]["value"]);
		var procPercCoreID = (DashboardData["devices"][count]["procPercPerCore"]["ID"]);
		
		//Storage Use
		var gaugeElement = document.getElementById(('Canvas') + (storageID));
		if (gaugeElement !==null){
		if (storageSizeGB <=1000){
			var used = (storageSizeGB /100) * storagePercUsed;
			var cardTitleStorage = parseFloat(used).toFixed(2) + "/" + storageSizeGB + " GB";
		}else {
			var used = ((storageSizeGB /100) * storagePercUsed) /1024;
			storageSizeGB = storageSizeGB / 1024
			var cardTitleStorage = parseFloat(used).toFixed(2) + "/" + parseFloat(storageSizeGB).toFixed(2) + " TB";
		}
		gaugeElement.setAttribute('data-value', storagePercUsed);
		gaugeElement.setAttribute('data-units' , "Storage %");
		gaugeElement.setAttribute('data-title' , cardTitleStorage);
		gaugeElement.setAttribute('data-major-ticks' ,"0, 10,20,30,40,50,60,70,80,90,100" );
		gaugeElement.setAttribute('data-max-value' , "100");
		gaugeElement.setAttribute('data-min-value' , "0");
		} else {
			alert("STOR: Error GageID:" + storageID + " Does Not Exist");
		}
		
		//Memeory Use
		var gaugeElement = document.getElementById(('Canvas') + (memID));
		if (gaugeElement !==null){
		var used = (memSizeGB /100) * memPercUsed;
		var cardTitlemem = parseFloat(used).toFixed(2) + "/" + memSizeGB + " GB";
		gaugeElement.setAttribute('data-value', memPercUsed);
		gaugeElement.setAttribute('data-units' , "Memory %");
		gaugeElement.setAttribute('data-title' , cardTitlemem);
		gaugeElement.setAttribute('data-major-ticks' ,"0, 10,20,30,40,50,60,70,80,90,100" );
		gaugeElement.setAttribute('data-max-value' , "100");
		gaugeElement.setAttribute('data-min-value' , "0");
		} else {
			alert("MEM: Error GageID:" + memID + " Does Not Exist");
		}
		
		//Up Time
		var gaugeElement = document.getElementById(('CanvasGage') + (upTimeDaysID));
		if (gaugeElement !==null){
		gaugeElement.innerHTML ="<h1 text-align:centre; ></br></br></br></br> Up Time: </br></br>" + upTimeDays + " </br></br> Days</br></br></br></br></br></br></h1>";
		} else {
			alert("UPTIME: Error GageID:" + upTimeDaysID + " Does Not Exist")
		}
		
		//CPU usage
		var gaugeElement = document.getElementById(('Canvas') + (procPercCoreID));
		if (gaugeElement !==null){
		CPUStr = "";
		avgProc = 0;
		for (count = 0; count < (procPercCore.length); count++){
			avgProc = avgProc + procPercCore[count];
			CPUStr = CPUStr + "C" + count + ":" + procPercCore[count] + "%  " 
		}
		avgProc = (avgProc / procPercCore.length);
		gaugeElement.setAttribute('data-value', avgProc);
		gaugeElement.setAttribute('data-units' , "CPU %");
		gaugeElement.setAttribute('data-title' , CPUStr);
		gaugeElement.setAttribute('data-major-ticks' ,"0, 10,20,30,40,50,60,70,80,90,100" );
		gaugeElement.setAttribute('data-max-value' , "100");
		gaugeElement.setAttribute('data-min-value' , "0");
		}
		else {
			alert("CORE: Error GageID:" + procPercCoreID + " Does Not Exist");
		}
		
		
		}
		
	count = count + 1;
		}
		}
		
		};
		
var getPollTimexhttp = new XMLHttpRequest();
getPollTimexhttp.onreadystatechange = function() {
	let DashboardData;
	if (this.readyState == 4 && this.status == 200) {

		DashboardData = JSON.parse(this.responseText);
		  
		pollTime = (DashboardData["System"]["pollTime"]);
		pollTime = pollTime * 1000;
		startBackgroundRequests(pollTime);
            }

		};
		
function RequestAllJSON(){
		var timestamp = new Date();
		pollTime = xhttp.open("GET", ("/dashboard.json" + "?" + timestamp.getTime()), true);
		xhttp.send();
		}
		
function startBackgroundRequests(pollTime){
	RequestAllJSON();
	setInterval(RequestAllJSON, pollTime);
	}

var timestamp = new Date();
getPollTimexhttp.open("GET", ("/dashboard.json" + "?" + timestamp.getTime()), true);
getPollTimexhttp.send();



