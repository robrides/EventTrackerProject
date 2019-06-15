package com.skilldistillery.ridetracker.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.ridetracker.entities.Ride;

public interface RideRepository extends JpaRepository<Ride, Integer> {

	
}
