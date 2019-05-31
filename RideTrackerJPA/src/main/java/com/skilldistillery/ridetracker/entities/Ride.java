package com.skilldistillery.ridetracker.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Ride {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String description;
	private String bike;
	@Column(name="address_start")
	private String addressStart;
	@Column(name="city_start")
	private String cityStart;
	@Column(name="state_start")
	private String stateStart;
	@Column(name="zipcode_start")
	private String zipcodeStart;
	@Column(name="address_end")
	private String addressEnd;
	@Column(name="city_end")
	private String cityEnd;
	@Column(name="state_end")
	private String stateEnd;
	@Column(name="zipcode_end")
	private String zipcodeEnd;
	private Double distance;
	private Date duration;
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
	
	
	
	public Ride() {
		super();
	}
	public Ride(int id, String name, String description, String bike, String addressStart, String cityStart,
			String stateStart, String zipcodeStart, String addressEnd, String cityEnd, String stateEnd,
			String zipcodeEnd, Double distance, Date duration, int calories, int avgPwr, int avgHr, String courseUrl,
			String activityUrl, String comments, int rating) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.bike = bike;
		this.addressStart = addressStart;
		this.cityStart = cityStart;
		this.stateStart = stateStart;
		this.zipcodeStart = zipcodeStart;
		this.addressEnd = addressEnd;
		this.cityEnd = cityEnd;
		this.stateEnd = stateEnd;
		this.zipcodeEnd = zipcodeEnd;
		this.distance = distance;
		this.duration = duration;
		this.calories = calories;
		this.avgPwr = avgPwr;
		this.avgHr = avgHr;
		this.courseUrl = courseUrl;
		this.activityUrl = activityUrl;
		this.comments = comments;
		this.rating = rating;
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
	public String getAddressStart() {
		return addressStart;
	}
	public void setAddressStart(String addressStart) {
		this.addressStart = addressStart;
	}
	public String getCityStart() {
		return cityStart;
	}
	public void setCityStart(String cityStart) {
		this.cityStart = cityStart;
	}
	public String getStateStart() {
		return stateStart;
	}
	public void setStateStart(String stateStart) {
		this.stateStart = stateStart;
	}
	public String getZipcodeStart() {
		return zipcodeStart;
	}
	public void setZipcodeStart(String zipcodeStart) {
		this.zipcodeStart = zipcodeStart;
	}
	public String getAddressEnd() {
		return addressEnd;
	}
	public void setAddressEnd(String addressEnd) {
		this.addressEnd = addressEnd;
	}
	public String getCityEnd() {
		return cityEnd;
	}
	public void setCityEnd(String cityEnd) {
		this.cityEnd = cityEnd;
	}
	public String getStateEnd() {
		return stateEnd;
	}
	public void setStateEnd(String stateEnd) {
		this.stateEnd = stateEnd;
	}
	public String getZipcodeEnd() {
		return zipcodeEnd;
	}
	public void setZipcodeEnd(String zipcodeEnd) {
		this.zipcodeEnd = zipcodeEnd;
	}
	public Double getDistance() {
		return distance;
	}
	public void setDistance(Double distance) {
		this.distance = distance;
	}
	public Date getDuration() {
		return duration;
	}
	public void setDuration(Date duration) {
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
		builder.append(", addressStart=");
		builder.append(addressStart);
		builder.append(", cityStart=");
		builder.append(cityStart);
		builder.append(", stateStart=");
		builder.append(stateStart);
		builder.append(", zipcodeStart=");
		builder.append(zipcodeStart);
		builder.append(", addressEnd=");
		builder.append(addressEnd);
		builder.append(", cityEnd=");
		builder.append(cityEnd);
		builder.append(", stateEnd=");
		builder.append(stateEnd);
		builder.append(", zipcodeEnd=");
		builder.append(zipcodeEnd);
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
		builder.append("]");
		return builder.toString();
	}
	
	
	
}
