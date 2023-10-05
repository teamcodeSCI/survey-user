import { createSlice } from '@reduxjs/toolkit';
import { PUBLIC_URL } from '../../utils/const';

interface InitialState {
  logo: string;
  backgroundColor: string;
  phone: string;
  name: string;
  loaded: boolean;
}
const initialState: InitialState = { logo: '', backgroundColor: '', phone: '', name: '', loaded: true };

const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {
    getBrand: (state, action) => {
      const brand = action.payload.brandCode;
      switch (brand) {
        case 'PR':
          state.loaded = true;
          state.logo = `${PUBLIC_URL}/assets/logos/logoPR.svg`;
          state.backgroundColor = '#0ea5ed';
          state.phone = '19006900';
          state.name = 'Nha khoa Paris';
          break;
        case 'KN':
          state.loaded = true;
          state.logo = `${PUBLIC_URL}/assets/logos/logoKN.png`;
          state.backgroundColor = '#d0a868';
          state.phone = '19006466';
          state.name = 'BVTM Kangnam';
          break;
        case 'HH':
          state.loaded = true;
          state.logo = `${PUBLIC_URL}/assets/logos/logoHH.svg`;
          state.backgroundColor = '#cb6da8';
          state.phone = '1900633988';
          state.name = 'Bệnh viện Hồng Hà';
          break;
        default:
          state.loaded = false;
          break;
      }
    },
  },
});
export default brandSlice;
export const logoSelector = (state: any) => state.brand.logo;
export const backgroundSelector = (state: any) => state.brand.backgroundColor;
export const phoneSelector = (state: any) => state.brand.phone;
export const nameSelector = (state: any) => state.brand.name;
export const loadedSelector = (state: any) => state.brand.loaded;
