package com.skilldistillery.ridetracker.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Ride {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String description;
	private String bike;
	private Double distance;
	private int duration;
	private int calories;
	@Column(name = "avg_pwr")
	private int avgPwr;
	@Column(name = "avg_hr")
	private int avgHr;
	@Column(name = "course_url")
	private String courseUrl;
	@Column(name = "activity_url")
	private String activityUrl;
	private String comments;
	private int rating;
	
	@Column(name="ride_date")
	@Temporal(TemporalType.DATE)
	private Date rideDate;
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "address_id")
	private Address address;
	
	public Ride() {
		super();
	}
	
	public Ride(int id, String name, String description, String bike, Double distance, int duration, int calories,
			int avgPwr, int avgHr, String courseUrl, String activityUrl, String comments, int rating, Date rideDate,
			Address address) {
		super();
		this.id = id;
		this.name = name;
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
		this.rideDate = rideDate;
		this.address = address;
	}



	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public Date getRideDate() {
		return rideDate;
	}
	public void setRideDate(Date rideDate) {
		this.rideDate = rideDate;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getBike() {
		return bike;
	}
	public void setBike(String bike) {
		this.bike = bike;
	}
	public Double getDistance() {
		return distance;
	}
	public void setDistance(Double distance) {
		this.distance = distance;
	}
	public int getDuration() {
		return duration;
	}
	public void setDuration(int duration) {
		this.duration = duration;
	}
	public int getCalories() {
		return calories;
	}
	public void setCalories(int calories) {
		this.calories = calories;
	}
	public int getAvgPwr() {
		return avgPwr;
	}
	public void setAvgPwr(int avgPwr) {
		this.avgPwr = avgPwr;
	}
	public int getAvgHr() {
		return avgHr;
	}
	public void setAvgHr(int avgHr) {
		this.avgHr = avgHr;
	}
	public String getCourseUrl() {
		return courseUrl;
	}
	public void setCourseUrl(String courseUrl) {
		this.courseUrl = courseUrl;
	}
	public String getActivityUrl() {
		return activityUrl;
	}
	public void setActivityUrl(String activityUrl) {
		this.activityUrl = activityUrl;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Ride other = (Ride) obj;
		if (id != other.id)
			return false;
		return true;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Ride [id=");
		builder.append(id);
		builder.append(", name=");
		builder.append(name);
		builder.append(", description=");
		builder.append(description);
		builder.append(", bike=");
		builder.append(bike);
		builder.append(", distance=");
		builder.append(distance);
		builder.append(", duration=");
		builder.append(duration);
		builder.append(", calories=");
		builder.append(calories);
		builder.append(", avgPwr=");
		builder.append(avgPwr);
		builder.append(", avgHr=");
		builder.append(avgHr);
		builder.append(", courseUrl=");
		builder.append(courseUrl);
		builder.append(", activityUrl=");
		builder.append(activityUrl);
		builder.append(", comments=");
		builder.append(comments);
		builder.append(", rating=");
		builder.append(rating);
		builder.append(", rideDate=");
		builder.append(rideDate);
		builder.append(", address=");
		builder.append(address);
		builder.append("]");
		return builder.toString();
	}
	
	
	
}
