package com.skilldistillery.ridetracker.controllers;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.ridetracker.entities.Ride;
import com.skilldistillery.ridetracker.services.RideService;

@RestController
@RequestMapping("api")
public class RideController {

	@Autowired
	private RideService svc;


//	@GetMapping("rides/")
//	public List<Ride> getAllRides(@PathVariable("id") Integer id, HttpServletResponse resp) {
//			List<Ride> rList = new ArrayList<>();
//			rList = svc.getAllRides(id);
//			if (rList == null) {
//				resp.setStatus(404);
//				return null;
//			} else {
//				return rList;
//			}
//	}
	
	@GetMapping("rides/{id}")
	public Ride getRideById(@PathVariable("id") Integer id, HttpServletResponse resp) {
		return svc.fingdById(id);
	}
	
}
