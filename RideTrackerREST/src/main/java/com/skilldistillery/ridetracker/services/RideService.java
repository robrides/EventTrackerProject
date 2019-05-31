package com.skilldistillery.ridetracker.services;

import java.util.List;

import com.skilldistillery.ridetracker.entities.Ride;

public interface RideService {

//	public List<Ride> getAllRides(Integer id);
	public Ride fingdById(Integer id);

	public List<Ride> findAll();

	public Ride addRide(Ride r);

	public Ride replaceRide(int id, Ride r);

	public Boolean deletePost(int id);

}
