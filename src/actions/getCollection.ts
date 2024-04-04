import axios from "axios";

export interface ICollection {
  prdct_cl_nm: string;
  manage_no_year: string;
  prdct_nm_korean: string;
  prdct_nm_eng: string;
  prdct_stndrd: string;
  mnfct_year: string;
  matrl_technic: string;
  prdct_detail: string;
  writr_nm: string;
  main_image: string;
  thumb_image: string;
}

export const getCollection = async () => {
  try {
    const response = await axios.get(
      `http://openapi.seoul.go.kr:8088/${process.env.API_KEY}/json/SemaPsgudInfoKorInfo/1/20/`
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};
