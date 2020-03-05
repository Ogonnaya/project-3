import axios from "axios";

export default {
  // Get all planners
  getPlanners: function () {
    return axios.get("/api/planners/saved");
  }
};
