import { apiClient } from "../axios/api";

//Add Souvenier
export const addSouvenier = async (
  title,
  maindescription,
  description,
  image,
  image1,
  threedimage,
  video,
  price,
  Quatity,
  Address,
  Address1,
  rating,
  username,
  useremail,
  usertel
) => {
  try {
    const rating = 0;
    const response = await apiClient.post("/souvenier/create-souvenier", {
      title,
      maindescription,
      description,
      image,
      image1,
      threedimage,
      video,
      price,
      Quatity,
      Address,
      Address1,
      rating,
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

//Get All Souveniers
export const getAllSouveniers = async () => {
  try {
    const response = await apiClient.get("/souvenier/get-all-souveniers");
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Get Souvenier By Id
export const getSouvenierById = async (id) => {
  try {
    const response = await apiClient.get(
      `/souvenier/get-single-souvenier/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Delete Hotel By Id
export const deleteHotelById = async (id) => {
  try {
    const response = await apiClient.delete(`/hotel/delete-hotel/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Update Souvenier By Id
export const updateSouvenierById = async (
  id,
  title,
  maindescription,
  description,
  image,
  image1,
  threedimage,
  video,
  price,
  Quatity,
  Address,
  Address1,
  rating,
  username,
  useremail,
  usertel
) => {
  try {
    const response = await apiClient.patch(
      `/souvenier/update-souvenier/${id}`,
      {
        title,
        maindescription,
        description,
        image,
        image1,
        threedimage,
        video,
        price,
        Quatity,
        Address,
        Address1,
        rating,
        username,
        useremail,
        usertel,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
