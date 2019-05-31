package com.skilldistillery.ridetracker.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.ridetracker.entities.Ride;
import com.skilldistillery.ridetracker.repositories.RideRepository;

@Service
public class RideServiceImpl implements RideService {

	@Autowired
	RideRepository repo;

	@Override
	public Ride fingdById(Integer id) {
		Optional<Ride> opt = repo.findById(id);
		if (opt.isPresent()) {
			return opt.get();
		}
		return null;
	
	}
	
//	@Override
//	public List<Ride> getAllRides(Integer id) {
//		List<Ride> rList = new ArrayList<>();
//		
//		
//		rList = repo.findById(id);
//		if (repo.existsById(id)) {
//			return rList;
//		} else {
//			return null;
//		}
//	}

}
