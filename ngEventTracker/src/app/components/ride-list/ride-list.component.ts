import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Ride } from 'src/app/models/ride';
import { RideService } from 'src/app/services/ride.service';

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.css']
})
export class RideListComponent implements OnInit {

  editRide: Ride = null;
  showComplete = false;
  selected = null;
  newRide = new Ride();
  rides: Ride[] = [];

  title = 'Ride Tracker';

  addRide(form: NgForm) {  // no way data binding
    this.newRide = form.value;
    this.rideService.create(this.newRide).subscribe(
      success => {
        this.reloadRides();
        form.reset();
      },
      err => {
        console.error(err);
      }
    );
    this.newRide = new Ride();
    this.reloadRides();
  }

  setEditRide() {
    this.editRide = Object.assign({}, this.selected);
  }

  cancelEdit() {
    this.editRide = null;
  }

  // updateRide(ride: Ride) {  // Two way data binding
  //   this.rideService.update(ride).subscribe(
  //     success => {
  //       this.reloadRides();
  //       this.editRide = null;
  //       this.selected = null;
  //     },
  //     err => {
  //       console.error(err);
  //     }
  //   );
  //   }

  displayRide(ride: Ride): void {
    this.selected = ride;
  }

  displayTable() {
    this.selected = null;
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
  }

  ngOnInit() {
    if (!this.selected && this.inboundRoute.snapshot.paramMap.get('id')) {
      this.rideService.show(this.inboundRoute.snapshot.paramMap.get('id')).subscribe(
        data => {
          if (data) {
            console.log(data);
            this.displayRide(data);
            this.reloadRides();
          } else {
            this.outboundRouter.navigateByUrl('notfound');
          }
        },
        err => {
          console.error('Observer got an error: ' + err);
        }
      );
      console.log(this.inboundRoute.snapshot.paramMap.get('id'));
    } else {
      this.reloadRides();
    }
  }

}

