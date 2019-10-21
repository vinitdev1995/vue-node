import axios from "axios"
import {API_URL} from "../utilities/CONST"

export const submitForm = async (user) => {
  try {
    const result = await axios.post(`${API_URL}items/add`, user)
    return { success: false, data: result.data }
  }catch (error) {
    console.log(error)
    return { success: true, message: "Something went wrong", error }
  }
}