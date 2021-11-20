import axios from "axios";

const END_POINT = `https://script.googleusercontent.com/macros/echo?user_content_key=yr0fZLkHgdgamrh5IG1dM7x07JDW2FvXLNn26q6F5xHhDd2GsmJ08X4AtZ3dQamfEuWISofO9_hY-A_vADdzjR6RorE3nN66m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMnlFFJdsZ45o9OHBZtd23PRzGqnMMtwVXxZatTcZ_ElWWQARivlerawy0qOn_ogddlOaIY5A3XJYuWNj0SVUwM&lib=MQ5y52npMqnCycenuTos7mqgLslxuhQuA`;

export const getRequest = async (url) => {
  try {
    const response = await axios.get(url);
    if (response.status === 404) {
      throw Error("There would be error in requesting.");
    }
    if (response.status === 500) {
      throw Error("Internal Server Error :: 500 .");
    }
    const result = response.data;
    return result;
  } catch (e) {
    console.error(e);
    // return e;
    return undefined;
  }
};

export const animalsAPI = {
  get: async () => {
    const res = await getRequest(END_POINT);
    return res;
  },
};
