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

import com.skilldistillery.ridetracker.entities.Address;

public class AddressTests {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Address addy;

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
		addy = em.find(Address.class, 1);
	}

	@AfterEach
	public void tearDown() {
		em.close();
		addy = null;
	}
	
	@Test
	public void test_address_getAddress() {
		assertEquals("4400 S Quebec St", addy.getAddress());
	}
	
	@Test
	public void test_address_getCity() {
		assertEquals("Denver", addy.getCity());
	}
	
	@Test
	public void test_address_getState() {
		assertEquals("CO", addy.getState());
	}
	
}
