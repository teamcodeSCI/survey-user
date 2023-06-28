import { createSlice } from '@reduxjs/toolkit';
import { PUBLIC_URL } from '../../utils/const';

interface InitialState {
  logo: string;
  backgroundColor: string;
  phone: string;
}
const initialState: InitialState = { logo: '', backgroundColor: '', phone: '' };

const brandSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    getBrand: (state, action) => {
      const brand = action.payload.brandCode;
      switch (brand) {
        case 'PR':
          state.logo = `${PUBLIC_URL}/assets/logos/logoPR.svg`;
          state.backgroundColor = 'linear-gradient(to right, #2A7CD6, #0ea5ed)';
          state.phone = '0123456789';
          break;
        case 'KN':
          state.logo = `${PUBLIC_URL}/assets/logos/logoKN.svg`;
          state.backgroundColor = 'linear-gradient(to right, #fb4b14, #ff6618)';
          state.phone = '0123458689';
          break;
        case 'HH':
          state.logo = `${PUBLIC_URL}/assets/logos/logoHH.svg`;
          state.backgroundColor = '#cb6da8';
          state.phone = '02113868451';
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
