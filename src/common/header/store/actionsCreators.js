import * as constants from './constants';
import axios from "axios";
import { fromJS } from "immutable";
import { contants } from '.';

export const searchFocus = () => ({
    type:constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type :constants.SEARCH_BLUR
});

const search = (data) => (
  {
    type:contants.SEARCH_HISTORY,
    data:fromJS(data)
  }
)

export const searchHistory = () => {
  return (dispatch)=> {
     axios.get("/api/searchHistory.json").then((res) => {
       const data = res.data;
       dispatch(search(data.data));
     }).catch(()=>{
       console.log("error");
     });
  }
}