import { allseekerdata, seekersData } from "../Store/Slices/RequestSlice";
import ApiInstance from "./axiosinstance";

export const createSeeker = async (url, data , dispatch) => {
  try {
    const response = await ApiInstance.post(url , data)
    dispatch(seekersData(response.data.seekers));
    return response

  } catch (err) {
    console.log(err);
  }
};
export const getAlldata = async (url,dispatch) => {
  try{
    const response = await ApiInstance.get(url)
    dispatch(allseekerdata(response.data.seekers))
    return response
  }catch(err){
    console.log(err)
  }
}
export const signup = async (url , data) => {
  try{
    const response = await ApiInstance.post(url , data)
    return response

  }catch(err){
    console.log(err)
  }
}
export const signin = async (url , data) => {
  try{
    const response = await ApiInstance.post(url , data)
    const token = response?.data?.token
    localStorage.setItem('token' , token)
    return response

  }catch(err){
    console.log(err)
  }
}