package com.skilldistillery.ridetracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.ridetracker.entities.Ride;
import com.skilldistillery.ridetracker.services.RideService;

@RestController
@RequestMapping("api")
public class RideController {

	@Autowired
	private RideService svc;


	@GetMapping("rides")
	public List<Ride> findAllRides() {
		return svc.findAll();
	}
	
	@GetMapping("rides/{id}")
	public Ride getRideById(@PathVariable("id") Integer id, HttpServletResponse resp) {
		return svc.fingdById(id);
	}
	

	@PostMapping("rides")
	public Ride addPost(@RequestBody Ride r, 
			HttpServletRequest req, 
			HttpServletResponse resp
			) {
		Ride created;
		try {
			created = svc.addRide(r);
			if (created != null) {
				resp.setStatus(201);
				StringBuffer url = req.getRequestURL();
				url.append("/").append(created.getId());
				resp.setHeader("Location", url.toString());
			}
		} catch (Exception e) {
			System.err.println(e);
			e.printStackTrace();
			created = null;
			resp.setStatus(400);
		}
		return created;

	}
	
	@PutMapping("rides/{id}") // can map the path variable by name @PathVariable("id") but apparently if you
	// name it the same you don't have to
	public Ride replace(@RequestBody Ride r, @PathVariable("id") int id, 
			HttpServletRequest req, 
			HttpServletResponse resp
			) {
		r = svc.replaceRide(id, r);
		if (r == null) {
			resp.setStatus(404);
		}
		return r;
	}
	
	@DeleteMapping("rides/{id}") // can map the path variable by name @PathVariable("id") but apparently if you
	// name it the same you don't have to
	public Boolean delete(@PathVariable("id") int id,
			HttpServletResponse resp
			) {
		Boolean success =svc.deletePost(id); 
		if(!success) {
			resp.setStatus(404);
		}
		return success;
	}
	
}
