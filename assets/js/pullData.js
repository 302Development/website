//var timestamp = new Date();
$(document).ready(function() {
    $(window).load(function() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            let DashboardData;
            if (this.readyState == 4 && this.status == 200) {

                DashboardData = JSON.parse(this.responseText);
                var count = 0;

                console.log(DashboardData["devices"]);

                for (count in DashboardData["devices"]) {

                    var data = DashboardData["devices"][count];

                    console.log("Processing: " + count);
                    console.log(data);

                    if (data["type"] === "network") {

                        var inMbs = parseFloat(data["Mb/sIn"]["value"]);
                        var inMbsID = (data["Mb/sIn"]["ID"]);
                        var outMbs = parseFloat(data["Mb/sOut"]["value"]);
                        var outMbsID = (data["Mb/sOut"]["ID"]);

                        var gaugeElement = document.getElementById(('Canvas') + (inMbsID));

                        if (gaugeElement != null) {
                            gaugeElement.setAttribute('width', gaugeElement.clientWidth);
                            gaugeElement.setAttribute('data-title', "Download");
                            gaugeElement.setAttribute('data-color-bar-progress', "rgb(175,238,238)");

                            if (inMbs <= 100) {
                                gaugeElement.setAttribute('data-value', inMbs);
                                gaugeElement.setAttribute('data-units', "Mb/s");

                            } else if (inMbs <= 1000) {
                                gaugeElement.setAttribute('data-value', inMbs);
                                gaugeElement.setAttribute('data-units', "Mb/s");
                                gaugeElement.setAttribute('data-major-ticks', "0,100,200,300,400,500,600,700,800,900,1000");
                                gaugeElement.setAttribute('data-max-value', "1000");
                                gaugeElement.setAttribute('data-min-value', "0");

                            } else if (inMbs <= 10000) {
                                inMbs = inMbs / 1000;
                                gaugeElement.setAttribute('data-value', inMbs);
                                gaugeElement.setAttribute('data-units', "Gb/s");
                                gaugeElement.setAttribute('data-major-ticks', "0,1,2,3,4,5,6,7,8,9,10");
                                gaugeElement.setAttribute('data-max-value', "10");
                                gaugeElement.setAttribute('data-min-value', "0");

                            } else {
                                inMbs = inMbs / 1000;
                                gaugeElement.setAttribute('data-value', inMbs);
                                gaugeElement.setAttribute('data-units', "Gb/s");
                                gaugeElement.setAttribute('data-major-ticks', "0,10,20,30,40,50");
                                gaugeElement.setAttribute('data-max-value', "50");
                                gaugeElement.setAttribute('data-min-value', "0");
                            }
                        }


                        var gaugeElement = document.getElementById(('Canvas') + (outMbsID));

                        if (gaugeElement != null) {
                            gaugeElement.setAttribute('width', gaugeElement.clientWidth);
                            gaugeElement.setAttribute('data-title', "Upload");
                            gaugeElement.setAttribute('data-color-bar-progress', "rgb(221,160,221)");

                            if (outMbs <= 100) {
                                gaugeElement.setAttribute('data-value', outMbs);
                                gaugeElement.setAttribute('data-units', "Mb/s");

                            } else if (outMbs <= 1000) {
                                gaugeElement.setAttribute('data-value', outMbs);
                                gaugeElement.setAttribute('data-units', "Mb/s");
                                gaugeElement.setAttribute('data-major-ticks', "0,100,200,300,400,500,600,700,800,900,1000");
                                gaugeElement.setAttribute('data-max-value', "1000");
                                gaugeElement.setAttribute('data-min-value', "0");

                            } else if (outMbs <= 10000) {
                                outMbs = outMbs / 1000;
                                gaugeElement.setAttribute('data-value', outMbs);
                                gaugeElement.setAttribute('data-units', "Gb/s");
                                gaugeElement.setAttribute('data-major-ticks', "0,1,2,3,4,5,6,7,8,9,10");
                                gaugeElement.setAttribute('data-max-value', "10");
                                gaugeElement.setAttribute('data-min-value', "0");

                            } else {
                                outMbs = outMbs / 1000;
                                gaugeElement.setAttribute('data-value', outMbs);
                                gaugeElement.setAttribute('data-units', "Gb/s");
                                gaugeElement.setAttribute('data-major-ticks', "0,10,20,30,40,50");
                                gaugeElement.setAttribute('data-max-value', "50");
                                gaugeElement.setAttribute('data-min-value', "0");
                            }
                        }

                    } else if (data["type"] === "performance") {
                        var storageSizeGB = parseInt(data["storage"]["storageSizeGB"]);
                        var storagePercUsed = parseInt(data["storage"]["storagePercUsed"]);
                        var storageID = (data["storage"]["ID"]);
                        //alert(storageID); parse
                        var OS = data["sysName"];

                        var memSizeGB = parseFloat(data["mem"]["memSize"]);
                        var memPercUsed = parseFloat(data["mem"]["memPercUsed"]);
                        var memID = (data["mem"]["ID"]);

                        var upTimeDays = parseFloat(data["upTimeDays"]["value"]);
                        var upTimeDaysID = (data["upTimeDays"]["ID"]);

                        var procPercPerCore = (data["procPercPerCore"]["value"]);
                        procPercPerCore = procPercPerCore.map(function(e, i) {
                            return "Core #" + ([...Array(procPercPerCore.length).keys()][i] + 1) + ": " + e ;
                        }).join("<br/>");
                        
                        var procPercPerCoreID = (data["procPercPerCore"]["ID"]);

                        var gaugeElement = document.getElementById(('Canvas') + (storageID));

                        if (gaugeElement != null) {
                            gaugeElement.setAttribute('width', gaugeElement.clientWidth);
                            if (storageSizeGB <= 1000) {
                                var used = (storageSizeGB / 100) * storagePercUsed;
                                var cardTitleStorage = parseFloat(used).toFixed(2) + "/" + storageSizeGB + " GB";

                            } else {
                                var used = ((storageSizeGB / 100) * storagePercUsed) / 1024;
                                storageSizeGB = storageSizeGB / 1024
                                var cardTitleStorage = parseFloat(used).toFixed(2) + "/" + parseFloat(storageSizeGB).toFixed(2) + " TB";
                            }

                            gaugeElement.setAttribute('data-value', storagePercUsed);
                            gaugeElement.setAttribute('data-units', "Storage %");
                            gaugeElement.setAttribute('data-title', cardTitleStorage);
                            gaugeElement.setAttribute('data-major-ticks', "0,10,20,30,40,50,60,70,80,90,100");
                            gaugeElement.setAttribute('data-max-value', "100");
                            gaugeElement.setAttribute('data-min-value', "0");

                            if (OS != null && OS.length > 0) {
                                gaugeElement.parentElement.parentElement.parentElement.children[0].children[1].innerText += (" (" + OS + ")");
                            }
                        }


                        var gaugeElement = document.getElementById(('Canvas') + (memID));
                        if (gaugeElement != null) {
                            gaugeElement.setAttribute('width', gaugeElement.clientWidth);
                            var used = (memSizeGB / 100) * memPercUsed;
                            var cardTitlemem = parseFloat(used).toFixed(2) + "/" + memSizeGB + " GB";
                            gaugeElement.setAttribute('data-value', memPercUsed);
                            gaugeElement.setAttribute('data-units', "Memory %");
                            gaugeElement.setAttribute('data-title', cardTitlemem);
                            gaugeElement.setAttribute('data-major-ticks', "0,10,20,30,40,50,60,70,80,90,100");
                            gaugeElement.setAttribute('data-max-value', "100");
                            gaugeElement.setAttribute('data-min-value', "0");

                            if (OS != null && OS.length > 0) {
                                gaugeElement.parentElement.parentElement.parentElement.children[0].children[1].innerText =  gaugeElement.parentElement.parentElement.parentElement.children[0].children[1].innerText + (" (" + OS + ")");
                            }
                        }

                        
                        var gaugeElement = document.getElementById(('Canvas') + (upTimeDaysID));
                        if (gaugeElement != null) {
                            gaugeElement.setAttribute('width', gaugeElement.clientWidth);

                            if (OS != null && OS.length > 0) {
                                gaugeElement.parentElement.parentElement.parentElement.children[0].children[1].innerText += (" (" + OS + ")");
                            }

                            gaugeElement.parentElement.innerHTML =`
                                <div id="Canvas${upTimeDaysID}" style="width: 380px; height: 380px;">
                                    <div class="center-text-card">
                                        <h1>Uptime:<br/>${upTimeDays} days</h1>
                                    </div>
                                </div>
                                `;
                        }

                        var gaugeElement = document.getElementById(('Canvas') + (procPercPerCoreID));
                        if (gaugeElement != null) {
                            gaugeElement.setAttribute('width', gaugeElement.clientWidth);

                            if (OS != null && OS.length > 0) {
                                gaugeElement.parentElement.parentElement.parentElement.children[0].children[1].innerText += (" (" + OS + ")");
                            }

                            gaugeElement.parentElement.innerHTML =`
                                <div id="Canvas${procPercPerCoreID}" style="width: 380px; height: 380px;">
                                    <div class="center-text-card">
                                        <h1>Processes Per Core:<br/>${procPercPerCore}</h1>
                                    </div>
                                </div>
                                `;
                        }
                        //{"sysName": "sit-esxi.murdoch.edu.au", "storage": {"storageSizeGB": 3726.0, "storagePercUsed": 46}, "deviceID": "7", "mem": {"memPercUsed": 54, "ID": "52", "memSize": 36.0}, "OS": "vmware", "procPercPerCore": {"ID": "53", "value": [7, 77, 76, 23]}, "type": "performance", "upTimeDays": {"ID": "51", "value": 89.0}}

        	        } else if (data["type"] === "power") {

        		        var Amps = parseFloat(data["currentUsedAmps"]["value"]);
        		        var AmpsID = (data["currentUsedAmps"]["ID"]);
        		        var Watts = parseFloat(data["Watts"]["value"]);
        		        var WattsID = (data["Watts"]["ID"]);
        		        //alert(inMbsID);

        		        var gaugeElement = document.getElementById(('Canvas') + (AmpsID));
        		        if (gaugeElement != null) {
                            gaugeElement.setAttribute('width', gaugeElement.clientWidth);
        		            gaugeElement.setAttribute('data-value', Amps);
        		            gaugeElement.setAttribute('data-units', "amps");
        		            gaugeElement.setAttribute('data-color-bar-progress', "yellow");
        		            gaugeElement.setAttribute('data-major-ticks', "0,2,4,6,8,10,12,14,16");
        		            gaugeElement.setAttribute('data-max-value', "16");
        		            gaugeElement.setAttribute('data-min-value', "0");
        		        }

        		        var gaugeElement = document.getElementById(('Canvas') + (WattsID));
        		        if (gaugeElement != null) {
                            gaugeElement.setAttribute('width', gaugeElement.clientWidth);
        		            gaugeElement.setAttribute('data-color-bar-progress', "black");

        		            if (Watts <= 1000) {
        		                gaugeElement.setAttribute('data-value', Watts);
        		                gaugeElement.setAttribute('data-units', "watts");
        		                gaugeElement.setAttribute('data-major-ticks', "0,100,200,300,400,500,600,700,800,900,1000");
        		                gaugeElement.setAttribute('data-max-value', "1000");
        		                gaugeElement.setAttribute('data-min-value', "0");
        		                //gaugeElement.setAttribute('data-highlights' , '[{"from": 0, "to": 250, "color": "green"},{"from": 250, "to": 500, "color": "yellow"},{"from": 500, "to": 750, "color": "orange"},{"from": 750, "to": 1000, "color": "red"}]');
        		            } else if (Watts <= 10000) {
        		                Watts = Watts / 1000;
        		                gaugeElement.setAttribute('data-value', Watts);
        		                gaugeElement.setAttribute('data-units', "Kw");
        		                gaugeElement.setAttribute('data-major-ticks', "0,1,2,3,4,5,6,7,8,9,10");
        		                gaugeElement.setAttribute('data-max-value', "10");
        		                gaugeElement.setAttribute('data-min-value', "0");
        		            } else {
        		                Watts = Watts / 1000;
        		                gaugeElement.setAttribute('data-value', Watts);
        		                gaugeElement.setAttribute('data-units', "Kw");
        		                gaugeElement.setAttribute('data-major-ticks', "0,2,4,6,8,10,12,14,16,18,20");
        		                gaugeElement.setAttribute('data-max-value', "20");
        		                gaugeElement.setAttribute('data-min-value', "0");
        		            }
        		        }

        		    } else if (data["type"] === "environmental") {

        		        var temp = parseFloat(data["temp"]["value"]);
        		        var tempID = (data["temp"]["ID"]);
        		        var CO2 = parseFloat(data["CO2"]["value"]);
        		        var CO2ID = (data["CO2"]["ID"]);
        		        var TVOC = parseFloat(data["TVOC"]["value"]);
        		        var TVOCID = (data["TVOC"]["ID"]);
        		        //alert(inMbsID);

        		        var gaugeElement = document.getElementById(('Canvas') + (tempID));
        		        if (gaugeElement != null) {
                            gaugeElement.setAttribute('width', gaugeElement.clientWidth);
        		            gaugeElement.setAttribute('data-value', temp);
        		            gaugeElement.setAttribute('data-units', "°C");
        		            gaugeElement.setAttribute('data-color-bar-progress', "red");
        		            gaugeElement.setAttribute('data-type', "linear-gauge");
        		            gaugeElement.setAttribute('data-major-ticks', "0,10,20,30,40");
        		            gaugeElement.setAttribute('data-max-value', "40");
        		            gaugeElement.setAttribute('data-min-value', "0");
        		            gaugeElement.setAttribute('data-font-style-value', "sans-serif");
        		            gaugeElement.setAttribute('data-font-weight-value', "bold");
        		            gaugeElement.setAttribute('data-font-value-size', 14);
        		            gaugeElement.setAttribute('data-font-units-size', 10);
        		            gaugeElement.setAttribute('data-font-numbers-size', 10);
        		        }


        		        var gaugeElement = document.getElementById(('Canvas') + (CO2ID));
        		        if (gaugeElement != null) {
                            gaugeElement.setAttribute('width', gaugeElement.clientWidth);
        		            gaugeElement.setAttribute('data-value', CO2);
        		            gaugeElement.setAttribute('data-units', "PPM");
        		            gaugeElement.setAttribute('data-color-bar-progress', "rgb(255,165,0)");
        		            gaugeElement.setAttribute('data-title', "CO2");
        		            gaugeElement.setAttribute('data-major-ticks', "0,10000,20000,30000,40000,50000,60000");
        		            gaugeElement.setAttribute('data-max-value', "60000");
        		            gaugeElement.setAttribute('data-min-value', "0");
        		            gaugeElement.setAttribute('data-highlights', '[{"from": 50000, "to": 60000, "color": "red"}]');
        		        }


        		        var gaugeElement = document.getElementById(('Canvas') + (TVOCID));
        		        if (gaugeElement != null) {
                            gaugeElement.setAttribute('width', gaugeElement.clientWidth);
        		            gaugeElement.setAttribute('data-value', TVOC);
        		            gaugeElement.setAttribute('data-units', "PPM");
        		            gaugeElement.setAttribute('data-title', "TVOC");
        		            gaugeElement.setAttribute('data-major-ticks', "500,1000,1500,2000,2500,3000");
        		            gaugeElement.setAttribute('data-max-value', "3000");
        		            gaugeElement.setAttribute('data-min-value', "0");
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

        function RequestAllJSON() {
            var timestamp = new Date();
            pollTime = xhttp.open("GET", ("/dashboard.json" + "?" + timestamp.getTime()), true);
            xhttp.send();
        }

        function startBackgroundRequests(pollTime) {
            RequestAllJSON();
            setInterval(RequestAllJSON, pollTime);
        }

        var timestamp = new Date();
        getPollTimexhttp.open("GET", ("/dashboard.json" + "?" + timestamp.getTime()), true);
        getPollTimexhttp.send();
    });
});