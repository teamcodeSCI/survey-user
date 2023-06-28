import { createSlice } from '@reduxjs/toolkit';
import { PUBLIC_URL } from '../../utils/const';

interface InitialState {
  logo: string;
  backgroundColor: string;
  phone: string;
  name: string;
}
const initialState: InitialState = { logo: '', backgroundColor: '', phone: '', name: '' };

const brandSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    getBrand: (state, action) => {
      const brand = action.payload.brandCode;
      switch (brand) {
        case 'PR':
          state.logo = `${PUBLIC_URL}/assets/logos/logoPR.svg`;
          state.backgroundColor = '#0ea5ed';
          state.phone = '19006900';
          state.name = 'Nha khoa Paris';
          break;
        case 'KN':
          state.logo = `${PUBLIC_URL}/assets/logos/logoKN.svg`;
          state.backgroundColor = '#d0a868';
          state.phone = '19006466';
          state.name = 'BVTM Kangnam';
          break;
        case 'HH':
          state.logo = `${PUBLIC_URL}/assets/logos/logoHH.svg`;
          state.backgroundColor = '#cb6da8';
          state.phone = '1900633988';
          state.name = 'Bệnh viện Hồng Hà';
          break;
        default:
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
