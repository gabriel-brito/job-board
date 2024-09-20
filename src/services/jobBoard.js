import Service from "services/apiConfig";

export const getIdList = async () => {
  try {
    const response = await Service.get("/jobstories.json");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getJob = async (id) => {
  try {
    const response = await Service.get(`/item/${id}.json`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
