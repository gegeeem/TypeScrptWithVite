import axios from "axios";

type UpdateUserResponse = {
  name: string;
  job: string;
  updatedAt: string;
};

async function updateUser() {
  try {
    // 👇️ const data: UpdateUserResponse
    const { data } = await axios.patch<UpdateUserResponse>(
      "https://reqres.in/api/users/2",
      { name: "John Smith", job: "manager" },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    console.log(JSON.stringify(data, null, 4));

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

updateUser();
