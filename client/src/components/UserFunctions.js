import axios from "axios";

export const register = newPlanner => {
  return axios
    .post("planners/register", {
      firstName: newPlanner.firstName,
      lastName: newPlanner.lastName,
      phoneNumber: newPlanner.phoneNumber,
      email: newPlanner.email,
      password: newPlanner.password,
      city: newPlanner.city,
      state: newPlanner.state,
      title: newPlanner.title,
      image: newPlanner.image,
      bio: newPlanner.bio,
      category: newPlanner.category,
      priceRange: newPlanner.priceRange
    })
    .then(response => {
      console.log("Registered");
    });
};

export const login = planner => {
  return axios
    .post("planners/login", {
      email: planner.email,
      password: planner.password
    })
    .then(response => {
      localStorage.setItem("plannertoken", response.data);
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const getProfile = planner => {
  return axios
    .get("planners/profile", {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response);
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};
