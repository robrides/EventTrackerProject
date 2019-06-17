import { Address } from './address';

export class Ride {

id: number;
name: string;
rideDate: string;
description: string;
bike: string;
distance: number;
duration: number;
calories: number;
avgPwr: number;
avgHr: number;
courseUrl: string;
activityUrl: string;
comments: string;
rating: number;
address: Address;

  constructor(
    name?: string,
    rideDate?: string,
    description?: string,
    bike?: string,
    distance?: number,
    duration?: number,
    calories?: number,
    avgPwr?: number,
    avgHr?: number,
    courseUrl?: string,
    activityUrl?: string,
    comments?: string,
    rating?: number,
    address?: Address
  ) {
    this.name = name;
    this.rideDate = rideDate;
    this.description = description;
    this.bike = bike;
    this.distance = distance;
    this.duration = duration;
    this.calories = calories;
    this.avgPwr = avgPwr;
    this.avgHr = avgHr;
    this.courseUrl = courseUrl;
    this.activityUrl = activityUrl;
    this.comments = comments;
    this.rating = rating;
    this.address = address;
  }
}

