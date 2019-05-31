package com.skilldistillery.ridetracker.tests;

import static org.junit.jupiter.api.Assertions.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.ridetracker.entities.Ride;

class RideTests {

//	@Test
//	void test() {
//		fail("Not yet implemented");
//	}

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Ride ride;

	@BeforeAll
	public static void setupAll() {
		emf = Persistence.createEntityManagerFactory("RideTracker");
	}
	
	@AfterAll
	public static void teardownAll() {
		emf.close();
	}
	
	@BeforeEach
	public void setUp() {
		em = emf.createEntityManager();
		ride = em.find(Ride.class, 1);
	}

	@AfterEach
	public void tearDown() {
		em.close();
		ride = null;
	}
	
	@Test
	public void test_ride_getName() {
		assertEquals("Gravel Run", ride.getName());
	}
	
	@Test
	public void test_ride_getDescription() {
		assertEquals("description", ride.getDescription());
	}
	
}
