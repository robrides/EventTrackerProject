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

  mode = 'summary';
  editRide: Ride = null;
  showComplete = false;
  selected = null;
  newRide = new Ride();
  newAddress = new Address();
  rides: Ride[] = [];
  addRideToggle = null;
  displayToggle = false;

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

  showAddRide() {
    this.mode = 'add';
    // this.newAddress = new Address('', '', '', '', '');
    // this.newRide = new Ride ('', '', '', '', 0, '', 0, 0, 0, '', '', '', 1, this.newAddress);
    // return this.newRide;
  }

  // addRide(form: NgForm) {  // no way data binding
  //   this.mode = 'add';
  //   console.log(form.value);

  //   this.newRide = form.value;
  //   console.log(this.newRide);

  //   this.rideService.create(this.newRide).subscribe(
  //     success => {
  //       this.reloadRides();
  //       form.reset();
  //     },
  //     err => {
  //       console.error(err);
  //     }
  //   );
  //   this.newRide = new Ride();
  //   this.reloadRides();
  // }

  addRide(form: NgForm) {  // no way data binding
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
    this.newRide.duration = form.value.duration;
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
        this.newRide = new Ride();
      },
      err => {
        console.error(err);
      }
    );
    this.reloadRides();
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
      },
      err => {
        console.error(err);
      }
    );
    this.reloadRides();
  }

  constructor(private rideService: RideService, private datePipe: DatePipe,
              private inboundRoute: ActivatedRoute,
              private outboundRouter: Router) { }

  reloadRides(): void {
    this.rideService.index().subscribe(
      data => {
        this.rides = data;
      },
      err => {
        console.error('Observer got an error: ' + err);
      }
    );
    this.mode = 'summary';
  }

  ngOnInit() {
      this.reloadRides();
  }

}

