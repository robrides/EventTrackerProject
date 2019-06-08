window.addEventListener('load', function(e) {
	  console.log('document loaded');
	  init();
	});

	function init() {
		console.log('get all rides in init');
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
		    rideEdit.reset();
		  })
		  
		  document.rideEdit.rideDelete.addEventListener('click', function(e){
			  if(confirm("Confirm Delete")){	  
			  deleteRide();
			  let rideEditForm = document.getElementByTagName('rideEdit');
			  rideEditForm.reset();
			  } else {
				  alert("Not Deleted");
			  }
		  });
		  
		}

	function updateRide(rideObj) {
		var xhr = new XMLHttpRequest();
		console.log(rideObj);
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
		console.log(rideObj);
		xhr.open('POST', 'api/rides/', true);
		xhr.setRequestHeader("Content-type", "application/json");

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status < 400) {
				var rideAdded = JSON.parse(xhr.responseText);
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
		console.log('in deleteRide');
		let rideEditForm = document.getElementById('rideEdit');
		let rideId = rideEditForm.id.value;
		
		var xhr = new XMLHttpRequest();
		
		xhr.open('DELETE', 'api/rides/' + rideId, true);
		
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status < 400) {
				var ride = JSON.parse(xhr.responseText);
				console.log(ride);
				let dataDiv = document.getElementById('rideData');
				dataDiv.textContent = 'Ride ' + rideId + ' deleted';
				getAllRides();
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
			console.log('get all rides func open');

			xhr.onreadystatechange = function() {
				console.log('get all rides func ready');
				if (xhr.readyState === 4 && xhr.status < 400) {
					var rides = JSON.parse(xhr.responseText);
					displayAllRides(rides);
					console.log('display all call at xhr');
					
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
		  
		  rides.forEach(function(val, idx, rides) {
		    console.log(val.name);
		    
		    let row = document.createElement('tr');
		    let d1 = document.createElement('td');
		    d1.textContent = val.name;
		    console.log(d1.textContent);
		    row.appendChild(d1);
		    row.id = val.id;
		    d1.id = val.id;
		    console.log(val);
		    
		    let d2 = document.createElement('td');
		    d2.textContent = val.rideDate;
		    row.appendChild(d2);
		    
		    let d = document.createElement('td');
		    d.textContent = val.rating;
		    row.appendChild(d);
		    tbl.appendChild(row);
		    
		    row.addEventListener("click", rideEdit);
		    
		    let r = document.createElement('tr');
		    let d3 = document.createElement('td');
		    d3.textContent = val.description;
		    row.appendChild(d3);
		    tbl.appendChild(r);
		    
		    let row2 = document.createElement('tr');
		    let d4 = document.createElement('td');
		    d4.textContent = val.bike;
		    row2.appendChild(d4);
		    let d5 = document.createElement('td');
		    d5.textContent = val.distance;
		    row2.appendChild(d5);
		    let d6 = document.createElement('td');
		    d6.textContent = val.duration;
		    row2.appendChild(d6);
		    let d7 = document.createElement('td');
		    d7.textContent = val.calories;
		    row2.appendChild(d7);
		    let d8 = document.createElement('td');
		    d8.textContent = val.avgPwr;
		    row2.appendChild(d8);
		    let d9 = document.createElement('td');
		    d9.textContent = val.avgHr;
		    row2.appendChild(d9);
		    tbl.appendChild(row2);
		    
		    let row3 =document.createElement('tr'); 
		    let d10 = document.createElement('td');
		    d10.textContent = val.courseUrl;
		    row3.appendChild(d10);
		    
		    let row4 =document.createElement('tr'); 
		    let d11 = document.createElement('td');
		    d11.textContent = val.activityUrl;
		    row4.appendChild(d11);
		    
		    let row5 =document.createElement('tr'); 
		    let d12 = document.createElement('td');
		    d12.textContent = val.comments;
		    row5.appendChild(d12);
		    
		    let hr = document.createElement('hr');
		    row5.appendChild(hr);

		    console.log('adding event listners');
		  });		  
		    ridesList.appendChild(tbl);	


	};
	
	function rideEdit(e) {
		console.log(e);
		
		let id = e.target.id;
		
		var xhr = new XMLHttpRequest();

		xhr.open('GET', 'api/rides/' + id, true);

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status < 400) {
				var ride = JSON.parse(xhr.responseText);
				console.log(ride);
				
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
				
			};

			if (xhr.readyState === 4 && xhr.status >= 400) {
				console.error(xhr.status + ': ' + xhr.responseText);
				  let dataDiv = document.getElementById('rideData');
				  dataDiv.textContent = 'ride not found';
			};
		};

		xhr.send(null);
		
	};
	

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
	  console.log('appended data');

	  
	}
