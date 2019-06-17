import { FilterPipe } from './../../pipes/filter.pipe';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Ride } from 'src/app/models/ride';
import { RideService } from 'src/app/services/ride.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.css']
})
export class RideListComponent implements OnInit {


  totalAvgPwr = 0;
  totalMiles = 0;
  mode = 'summary';
  editRide: Ride = null;
  showComplete = false;
  selected = null;
  newRide = new Ride();
  newAddress = new Address();
  rides: Ride[] = [];
  addRideToggle = null;
  displayToggle = false;
  searchResults: Ride[] = [];
  nameSort = 0;
  bikeSort = 0;

  title = 'Ride Tracker';

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  transformDate(newDay) {
  }

  showSearch() {
    this.mode = 'search';
  }
  showAddRide() {
    this.mode = 'add';
  }

  sort(by: string) {
    if (by === 'name') {
      if (this.nameSort === 0) {
      this.rides.sort((a, b) => a.name.localeCompare(b.name));
      this.nameSort = 1;
      } else {
        this.rides.sort((b, a) => b.name.localeCompare(a.name));
        this.nameSort = 0;
      }
    }
    if (by === 'rideDate') {
    this.rides.sort((a, b) => a.rideDate.localeCompare(b.name));
    }
    // if (by === 'distance') {
    // this.rides.sort((a, b) => a.distance.localeCompare(b.name));
    // }
    if (by === 'bike') {
      this.rides.sort((a, b) => a.bike.localeCompare(b.name));
      this.nameSort = 1;
      } else {
        this.rides.sort((b, a) => b.bike.localeCompare(a.name));
        this.bikeSort = 0;
      }
    if (by === 'city') {
    this.rides.sort((a, b) => a.address.city.localeCompare(b.name));
    }
    if (by === 'state') {
    this.rides.sort((a, b) => a.address.state.localeCompare(b.name));
    }
  }

  search(form: NgForm) {
    this.searchResults = [];
    this.searchResults = this.filterPipe.transform(this.rides, form.value.keyword);
    this.mode = 'searchResults';
    form.reset();
  }

  addRide(form: NgForm) {  // no way data binding
    let seconds: number = form.value.hours * 3600;
    seconds += form.value.minutes * 60;
    console.log(seconds);
    this.newAddress = new Address('', '', '', '', '');
    this.newRide = new Ride ('', '', '', '', 0, '', 0, 0, 0, '', '', '', 1, this.newAddress);
    this.newAddress.address = form.value.address;
    this.newAddress.address2 = form.value.address2;
    this.newAddress.city = form.value.city;
    this.newAddress.state = form.value.state;
    this.newAddress.zipcode = form.value.zip;
    this.newRide.address = this.newAddress;
    this.newRide.name = form.value.name;
    this.newRide.rideDate = form.value.rideDate;
    this.newRide.rating = form.value.rating;
    this.newRide.duration = seconds;
    this.newRide.distance = form.value.distance;
    this.newRide.bike = form.value.bike;
    this.newRide.avgPwr = form.value.avgPwr;
    this.newRide.avgHr = form.value.avgHr;
    this.newRide.description = form.value.description;
    this.newRide.comments = form.value.comments;
    this.newRide.courseUrl = form.value.courseUrl;
    this.newRide.activityUrl = form.value.activityUrl;
    console.log(this.newRide);
    this.rideService.create(this.newRide).subscribe(
      success => {
        this.reloadRides();
        this.mode = 'summary';
        this.newRide = new Ride();
        form.reset();
      },
      err => {
        console.error(err);
      }
    );
    this.reloadRides();
    this.mode = 'summary';
  }

  setEditRide(ride: Ride) {
    console.log(ride);
    this.editRide = ride;
    this.mode = 'edit';
  }

  cancelEdit() {
    this.editRide = null;
  }

  updateRide(ride: Ride) {  // Two way data binding
    this.rideService.update(ride).subscribe(
      success => {
        this.reloadRides();
        this.editRide = null;
        this.selected = null;
        this.mode = 'summary';
      },
      err => {
        console.error(err);
      }
    );
    }

  displayRide(ride: Ride): void {
    console.log(ride.id);

    this.selected = ride;
    this.mode = 'details';
    console.log(this.mode);
    console.log(ride);
    console.log(this.selected.name);

  }

  displayTable() {
    console.log(this.selected.name);
    this.selected = null;
    this.mode = 'summary';
    this.ngOnInit();
  }

  destroy(id: number): void {
    this.rideService.destroy(id).subscribe(
      success => {
        this.reloadRides();
        this.mode = 'summary';
      },
      err => {
        console.error(err);
      }
    );
    this.reloadRides();
    this.mode = 'summary';
  }

  constructor(private rideService: RideService, private datePipe: DatePipe,
              private inboundRoute: ActivatedRoute,
              private outboundRouter: Router, private filterPipe: FilterPipe) { }

   secondsToHHmmss(totalSeconds) {
    let hours   = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    let seconds = totalSeconds - (hours * 3600) - (minutes * 60);
    // round seconds
    seconds = Math.round(seconds * 100) / 100;
    let result = (hours < 10 ? '0' + hours : hours);
    result += ':' + (minutes < 10 ? '0' + minutes : minutes);
    result += ':' + (seconds  < 10 ? '0' + seconds : seconds);
    return result;
  }

  reloadRides(): void {
    this.totalMiles = 0;
    this.totalAvgPwr = 0;
    this.rideService.index().subscribe(
      data => {
        this.rides = data;
        let count = 0;
        for (const ride of this.rides) {
          this.totalMiles += ride.distance;
          this.totalAvgPwr += ride.avgPwr;
          count += 1;
          ride.duration = this.secondsToHHmmss(ride.duration);
        }
        this.totalAvgPwr = this.totalAvgPwr / count;
      },
      err => {
        console.error('Observer got an error: ' + err);
      }
    );
  }

  ngOnInit() {
      this.reloadRides();
      this.mode = 'summary';
  }

}

