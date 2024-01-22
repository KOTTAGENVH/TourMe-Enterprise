import { apiClient } from "../axios/api";

//Add Destination
export const addDestination = async (
  title,
  maindescription,
  description,
  image,
  image1,
  price,
  NoTickets,
  Address,
  Address1,
  location,
  username,
  useremail,
  usertel
) => {
  try {
    const rating = 0;
    const response = await apiClient.post("/destination/add-destination", {
      title,
      maindescription,
      description,
      image,
      image1,
      price,
      NoTickets,
      Address,
      Address1,
      rating,
      location,
      username,
      useremail,
      usertel,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
