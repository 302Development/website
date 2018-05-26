
		var timestamp = new Date();
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
            let DashboardData;
            if (this.readyState == 4 && this.status == 200) {
                //alert (this.responseText);
				test = JSON.parse(this.responseText);
				//alert(test["devices"]["0"]["type"]);
				count = 0;
                count2 = 0;

				for ( count in test["devices"]){
				if ((test["devices"][count]["type"]) === "network") {
						//alert("test");
						var inMbs = parseFloat(test["devices"][count]["Mb/sIn"]);
						var outMbs = parseFloat(test["devices"][count]["Mb/sOut"]);

                    	var gaugeElement = document.getElementsByTagName('canvas')[count2];
                    	gaugeElement.setAttribute('data-value', inMbs);
                    	count2 = count2 + 1
                    	var gaugeElement = document.getElementsByTagName('canvas')[count2];
                    	gaugeElement.setAttribute('data-value', outMbs);
                    	gaugeElement.setAttribute('data-title' , "Upload");
                    	//animateGauges(inMbs);
                    	count2 = count2 + 1
						//alert (inMbs);
					}


				count = count + 1;
				}


            }
		};
		xhttp.open("GET", ("dashboard.json" + "?" + timestamp.getTime()), true);
		xhttp.send();


