window.addEventListener('load', function(e) {
	  console.log('document loaded');
	  init();
	});

	function init() {
	  getAllRides();
		
	  document.rideForm.lookup.addEventListener('click', function(event) {
	    event.preventDefault();
	    var rideId = document.rideForm.rideId.value;
	    if (!isNaN(rideId) && rideId > 0) {
	      getRide(rideId);
	    }
	  })
	  
	  document.rideAdd.submit.addEventListener('click', function(event) {
	  event.preventDefault();
	    
	   let rideObj = {
			   
	    "name": document.rideAdd.name.value,
	    "rideDate": document.rideAdd.rideDate.value,
	    "description": document.rideAdd.description.value,
	    "bike": document.rideAdd.bike.value,
	    "distance": document.rideAdd.distance.value,
	    "duration": document.rideAdd.duration.value,
	    "calories": document.rideAdd.calories.value,
	    "avgPwr": document.rideAdd.avgPwr.value,
	    "avgHr": document.rideAdd.avgHr.value,
	    "courseUrl": document.rideAdd.courseUrl.value,
	    "activityUrl": document.rideAdd.activityUrl.value,
	    "comments": document.rideAdd.comments.value,
	    "rating": document.rideAdd.rating.value,
        "address": {
            "address": document.rideAdd.address.value,
            "address2": document.rideAdd.address2.value,
            "city": document.rideAdd.city.value,
            "state": document.rideAdd.state.value,
            "zipcode": document.rideAdd.zipcode.value
        }
	   };
	    addRide(rideObj);
	    
	  })
	
	 document.rideEdit.submit.addEventListener('click', function(event) {
		  event.preventDefault();
		    
		   let rideObj = {
		    "id": document.rideEdit.id.value,
		    "name": document.rideEdit.name.value,
		    "rideDate": document.rideEdit.rideDate.value,
		    "description": document.rideEdit.description.value,
		    "bike": document.rideEdit.bike.value,
		    "distance": document.rideEdit.distance.value,
		    "duration": document.rideEdit.duration.value,
		    "calories": document.rideEdit.calories.value,
		    "avgPwr": document.rideEdit.avgPwr.value,
		    "avgHr": document.rideEdit.avgHr.value,
		    "courseUrl": document.rideEdit.courseUrl.value,
		    "activityUrl": document.rideEdit.activityUrl.value,
		    "comments": document.rideEdit.comments.value,
		    "rating": document.rideEdit.rating.value,
	        "address": {
	        	"id": document.rideEdit.addressId.value,
	            "address": document.rideEdit.address.value,
	            "address2": document.rideEdit.address2.value,
	            "city": document.rideEdit.city.value,
	            "state": document.rideEdit.state.value,
	            "zipcode": document.rideEdit.zipcode.value
	        }
		   };
		    updateRide(rideObj);
		    document.getElementById('rideEdit').reset();
		    document.getElementById('editRideDiv').innerHTML = "";
		  })
		  
		  document.rideEdit.rideDelete.addEventListener('click', function(e){
			  if(confirm("Confirm Delete")){	  
			  deleteRide();
			  document.getElementById('rideEdit').reset();
			  document.getElementById('editRideDiv').innerHTML = "";
			  } else {
				  alert("Not Deleted");
			  }
		  });
		  
		}

	function updateRide(rideObj) {
		var xhr = new XMLHttpRequest();
		xhr.open('PUT', 'api/rides/' + rideObj.id, true);
		xhr.setRequestHeader("Content-type", "application/json");

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status < 400) {
				var rideUpdated = JSON.parse(xhr.responseText);
				getAllRides();
			};

			if (xhr.readyState === 4 && xhr.status >= 400) {
				console.error(xhr.status + ': ' + xhr.responseText);
				  let dataDiv = document.getElementById('rideData');
				  dataDiv.textContent = 'Ride not added';
			};
		};

		xhr.send(JSON.stringify(rideObj));	
	};
	
	function addRide(rideObj) {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'api/rides/', true);
		xhr.setRequestHeader("Content-type", "application/json");

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status < 400) {
				var rideAdded = JSON.parse(xhr.responseText);
				getAllRides();
			    document.getElementById('rideAdd').reset();
			};

			if (xhr.readyState === 4 && xhr.status >= 400) {
				console.error(xhr.status + ': ' + xhr.responseText);
				  let dataDiv = document.getElementById('rideData');
				  dataDiv.textContent = 'Ride not added';
			};
		};

		xhr.send(JSON.stringify(rideObj));	
	};

	function getRide(rideId) {
		
		var xhr = new XMLHttpRequest();

		xhr.open('GET', 'api/rides/' + rideId, true);

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status < 400) {
				var ride = JSON.parse(xhr.responseText);
				displayRide(ride);
				return ride;
				
			};

			if (xhr.readyState === 4 && xhr.status >= 400) {
				console.error(xhr.status + ': ' + xhr.responseText);
				  let dataDiv = document.getElementById('rideData');
				  dataDiv.textContent = 'ride not found';
			};
		};

		xhr.send(null);

	}
	function deleteRide() {
		let rideEditForm = document.getElementById('rideEdit');
		let rideId = rideEditForm.id.value;
		
		var xhr = new XMLHttpRequest();
		
		xhr.open('DELETE', 'api/rides/' + rideId, true);
		
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status < 400) {
				var ride = JSON.parse(xhr.responseText);
				let dataDiv = document.getElementById('rideData');
				dataDiv.textContent = 'Ride ' + rideId + ' deleted';
				getAllRides();
				document.getElementById('rideEdit').reset();
				document.getElementById('editRideDiv').textContent = '';
				
			};
			
			if (xhr.readyState === 4 && xhr.status >= 400) {
				console.error(xhr.status + ': ' + xhr.responseText);
				let dataDiv = document.getElementById('rideData');
				dataDiv.textContent = 'ride not deleted';
			};
		};
		
		xhr.send(null);
		
	}
	
	function getAllRides() {
			
			var xhr = new XMLHttpRequest();

			xhr.open('GET', 'api/rides', true);

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4 && xhr.status < 400) {
					var rides = JSON.parse(xhr.responseText);
					displayAllRides(rides);
					
				};

				if (xhr.readyState === 4 && xhr.status >= 400) {
					console.error(xhr.status + ': ' + xhr.responseText);
					  let dataDiv = document.getElementById('rideData');
					  dataDiv.textContent = 'Ride list not found';
				};
			};

			xhr.send(null);

		}
	
	function displayAllRides(rides) {
		var ridesList = document.getElementById('ridesList');
		ridesList.textContent = '';
		
		  var tbl = document.createElement('table');
		  let hrTotal = 0;
		  let count = 0;
		  
		  let fRow = document.createElement('tr')
		  let fData1 = document.createElement('td');
		  let fData3 = document.createElement('td');
		  let fData4 = document.createElement('td');
		  fData1.textContent = 'ID   | Name';
		  fData3.textContent = 'Date';
		  fData4.textContent = 'Rating';
		  fRow.appendChild(fData1);
		  fRow.appendChild(fData3);
		  fRow.appendChild(fData4);
		  tbl.appendChild(fRow);
		  
		  rides.forEach(function(val, idx, rides) {
		    count += 1;
		    hrTotal += val.avgHr;
		    
		    let row = document.createElement('tr');
		    let d1 = document.createElement('td');
		    d1.textContent = "ID: " + val.id + " | " + val.name;
		    row.appendChild(d1);
		    row.id = val.id;
		    d1.id = val.id;
		    
		    let d2 = document.createElement('td');
		    d2.textContent = val.rideDate;
		    row.appendChild(d2);
		    let d = document.createElement('td');
		    d.textContent = val.rating;
		    row.appendChild(d);
		    tbl.appendChild(row);
		    row.addEventListener("click", rideEdit);
		    
		  });	
		  
		  let avgHeart = hrTotal/count;
		  let hRateRow = document.createElement('tr');
		  let hRateData = document.createElement('td');
		  let hRateHead = document.createElement('h3');
		  hRateHead.textContent = 'Average heart rate across ' + count + ' rides is:' + avgHeart; 
		  hRateData.appendChild(hRateHead);	
		  hRateData.colSpan = '6';
		  hRateRow.appendChild(hRateData);	
		  tbl.appendChild(hRateRow);	
		  ridesList.appendChild(tbl);	

	};
	
	function rideEdit(e) {
		
		let id = e.target.id;
		
		var xhr = new XMLHttpRequest();

		xhr.open('GET', 'api/rides/' + id, true);

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status < 400) {
				var ride = JSON.parse(xhr.responseText);
				
				let rideEditForm = document.getElementById('rideEdit');
				rideEditForm.id.value = ride.id;
				rideEditForm.name.value = ride.name;
				rideEditForm.rideDate.value = ride.rideDate;
				rideEditForm.description.value = ride.description;
				rideEditForm.bike.value = ride.bike;
				rideEditForm.distance.value = ride.distance;
				rideEditForm.duration.value = ride.duration;
				rideEditForm.calories.value = ride.calories;
				rideEditForm.avgPwr.value = ride.avgPwr;
				rideEditForm.avgHr.value = ride.avgHr;
				rideEditForm.courseUrl.value = ride.courseUrl;
				rideEditForm.activityUrl.value = ride.activityUrl;
				rideEditForm.comments.value = ride.comments;
				rideEditForm.rating.value = ride.rating;
				rideEditForm.addressId.value = ride.address.id;
				rideEditForm.address.value = ride.address.address;
				rideEditForm.address2.value = ride.address.address2;
				rideEditForm.city.value = ride.address.city;
				rideEditForm.state.value = ride.address.state;
				rideEditForm.zipcode.value = ride.address.zipcode;
				
				paintRideDetail(ride);
				
			};

			if (xhr.readyState === 4 && xhr.status >= 400) {
				console.error(xhr.status + ': ' + xhr.responseText);
				  let dataDiv = document.getElementById('rideData');
				  dataDiv.textContent = 'ride not found';
			};
		};

		xhr.send(null);
		
	};
	
	var paintRideDetail = (function(ride){
		
		let editRideDiv = document.getElementById('editRideDiv');
		editRideDiv.textContent = '';
		let head = document.createElement('h2');
		head.textContent = 'Ride Detail';
		let tblEditRide = document.createElement('table');
		
		  let fRow = document.createElement('tr')
		  let fData1 = document.createElement('td');
		  let fData3 = document.createElement('td');
		  let fData4 = document.createElement('td');
		  fData1.textContent = 'ID   | Name';
		  fData3.textContent = 'Date';
		  fData4.textContent = 'Rating';
		  fRow.appendChild(fData1);
		  fRow.appendChild(fData3);
		  fRow.appendChild(fData4);
		  let sRow = document.createElement('tr')
		  let sData1 = document.createElement('td');
		  sData1.textContent = 'Description';
		  sData1.colSpan = '6';
		  sRow.appendChild(sData1);
		  
		  let tRow = document.createElement('tr')
		  let tData1 = document.createElement('td');
		  let tData2 = document.createElement('td');
		  let tData3 = document.createElement('td');
		  let tData4 = document.createElement('td');
		  let tData5 = document.createElement('td');
		  let tData6 = document.createElement('td');
		  tData1.textContent = 'Bike';
		  tData2.textContent = 'Distance';
		  tData3.textContent = 'Duration';
		  tData4.textContent = 'Calories';
		  tData5.textContent = 'Avg Power';
		  tData6.textContent = 'Avg HR';
		  tRow.appendChild(tData1);
		  tRow.appendChild(tData2);
		  tRow.appendChild(tData3);
		  tRow.appendChild(tData4);
		  tRow.appendChild(tData5);
		  tRow.appendChild(tData6);
		  let fourthRow = document.createElement('tr')
		  let fourthData1 = document.createElement('td');
		  fourthData1.textContent = 'Course URL';
		  fourthData1.colSpan = '6';
		  fourthRow.appendChild(fourthData1);
		  let fifthRow = document.createElement('tr')
		  let fifthData1 = document.createElement('td');
		  fifthData1.textContent = 'Activity URL';
		  fifthData1.colSpan = '6';
		  fifthRow.appendChild(fifthData1);
		  let sixthRow = document.createElement('tr')
		  let sixthData1 = document.createElement('td');
		  sixthData1.textContent = 'Comments';
		  sixthData1.colSpan = '6';
		  sixthRow.appendChild(sixthData1);
		  
		  tblEditRide.appendChild(fRow);
		  tblEditRide.appendChild(sRow);
		  tblEditRide.appendChild(tRow);
		  tblEditRide.appendChild(fourthRow);
		  tblEditRide.appendChild(fifthRow);
		  tblEditRide.appendChild(sixthRow);
		
		
		
		
		
		
		let tr = document.createElement('tr');
		let td1 = document.createElement('td');
		let td2 = document.createElement('td');
		let td3 = document.createElement('td');
		td1.textContent = "ID: " + ride.id + " | " + ride.name;
	    td2.textContent = ride.rideDate;
	    td3.textContent = ride.rating;
	    tr.appendChild(td1);
	    tr.appendChild(td2);
	    tr.appendChild(td3);
	    tblEditRide.appendChild(tr);
	    let tr2 = document.createElement('tr');
	    let td4 = document.createElement('td');
	    td4.textContent = ride.description;
	    td4.colSpan = '6';
	    tr2.appendChild(td4);	    
	    tblEditRide.appendChild(tr2);

	    let tr3 = document.createElement('tr');
	    let d4 = document.createElement('td');
	    d4.textContent = ride.bike;
	    tr3.appendChild(d4);
	    let d5 = document.createElement('td');
	    d5.textContent = ride.distance;
	    tr3.appendChild(d5);
	    let d6 = document.createElement('td');
	    d6.textContent = ride.duration;
	    tr3.appendChild(d6);
	    let d7 = document.createElement('td');
	    d7.textContent = ride.calories;
	    tr3.appendChild(d7);
	    let d8 = document.createElement('td');
	    d8.textContent = ride.avgPwr;
	    tr3.appendChild(d8);
	    let d9 = document.createElement('td');
	    d9.textContent = ride.avgHr;
	    tr3.appendChild(d9);
	    tblEditRide.appendChild(tr3);
	    
	    let tr4 =document.createElement('tr'); 
	    let d10 = document.createElement('td');
	    d10.textContent = ride.courseUrl;
	    d10.colSpan = '6';
	    tr4.appendChild(d10);
	    tblEditRide.appendChild(tr4);
	    
	    let tr5 =document.createElement('tr'); 
	    let d11 = document.createElement('td');
	    d11.textContent = ride.activityUrl;
	    d11.colSpan = '6';
	    tr5.appendChild(d11);
	    tblEditRide.appendChild(tr5);
	    
	    let tr6 =document.createElement('tr'); 
	    let d12 = document.createElement('td');
	    d12.textContent = ride.comments;
	    d12.colSpan = '6';
	    tr6.appendChild(d12);
	    tblEditRide.appendChild(tr6);	    
	    
		editRideDiv.appendChild(tblEditRide);
		let br = document.createElement('br');
		editRideDiv.appendChild(br);
		
	});
	

	function displayRide(ride) {
	  var dataDiv = document.getElementById('rideData');
	  dataDiv.textContent = '';

	  let head1 = document.createElement('h1');
	  let head2 = document.createElement('h4');
	  head1.textContent = ride.name;
	  head2.textContent = ride.rideDate;
	  dataDiv.appendChild(head1);
	  dataDiv.appendChild(head2);
	  let desc = document.createElement('blockquote');
	  desc.textContent = ride.description;
	  dataDiv.appendChild(desc);

	  
	}