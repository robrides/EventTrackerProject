package com.skilldistillery.ridetracker.services;

import java.util.List;
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

	@Override
	public List<Ride> findAll() {
		return repo.findAll();
	}

	@Override
	public Ride addRide(Ride r) {
		return repo.saveAndFlush(r);
	}

	@Override
	public Ride replaceRide(int id, Ride r) {
		Optional<Ride> opt = repo.findById(id);
		if (opt.isPresent()) {
			r.setId(id);
			return repo.saveAndFlush(r);
		}
		else {
			return null;
		}
	}

	@Override
	public Boolean deletePost(int id) {
			Boolean success = false;
			if(repo.existsById(id)) {
				try {
					repo.deleteById(id);
					success = true;
				} catch (Exception e) {
					System.err.println(e);
					success = null;
				}
			}
			return success;
		}

}
