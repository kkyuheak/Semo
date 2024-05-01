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

export interface IExhibit {
  DP_EX_NO: string;
  DP_SEQ: string;
  DP_NAME: string;
  DP_SUBNAME?: string;
  DP_PLACE: string;
  DP_START: string;
  DP_END: string;
  DP_HOMEPAGE?: string;
  DP_EVENT?: string;
  DP_SPONSOR: string;
  DP_VIEWTIME?: string;
  DP_VIEWCHARGE?: string;
  DP_ART_PART: string;
  DP_ART_CNT: string;
  DP_ARTIST: string;
  DP_VIEWPOINT: string;
  DP_INFO: string;
  DP_MAIN_IMG: string;
  DP_LNK: string;
  DP_DATE: string;
}

export interface IEducation {
  ACADMY_NO: string;
  EDU_NAME: string;
  EDU_TARGET: string;
  EDU_PLACE: string;
  EDU_START: string;
  EDU_END: string;
  EDU_TIME: string;
  EDU_DAY: string;
  APP_OPEN: string;
  APP_CLOSE: string;
  CAPA_NUM: number;
  ISFREE: string;
  EDU_CONTENT: string;
  TCHER_NAME: string;
  EDU_IMG: string;
  EDU_LNK: string;
  DP_DATE: string;
}

export const getArtList = async (item: string) => {
  try {
    const response = await axios.get(
      `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_API_KEY}/json/${item}`
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};
