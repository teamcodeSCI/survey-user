import { ReactIcon } from '@/models/utils';

export const PUBLIC_URL = process.env.PUBLIC_URL;
export const API_URL: string = 'https://scigroup.com.vn/app/survey-web/api/';
export const TOKEN: string = '9a9af5b8174facde56cdb07e803c9f16';
export const reactIcon: ReactIcon[] = [
  { name: 'Không hài lòng', icon: `${PUBLIC_URL}/assets/icons/angry-react.svg`, value: 1 },
  { name: 'Chấp nhận được', icon: `${PUBLIC_URL}/assets/icons/accept-react.svg`, value: 2 },
  { name: 'Đạt mong đợi', icon: `${PUBLIC_URL}/assets/icons/expectations-react.svg`, value: 3 },
  { name: 'Thỏa mãn ước muốn', icon: `${PUBLIC_URL}/assets/icons/satisfy-react.svg`, value: 4 },
  { name: 'Trên cả ước muốn', icon: `${PUBLIC_URL}/assets/icons/happy-react.svg`, value: 5 },
  { name: 'Quá tuyệt vời', icon: `${PUBLIC_URL}/assets/icons/perfect-react.svg`, value: 6 },
];

export const formatPhoneNumber = (phoneNumber: string) => {
  const cleaned = phoneNumber.replace(/\D/g, '');
  const isValidVietnameseNumber = /^0\d{8,9}$/.test(cleaned);
  if (isValidVietnameseNumber) {
    const areaCode = cleaned.substr(0, 2);
    const prefix = cleaned.substr(2, 3);
    const suffix = cleaned.substr(5);
    if (cleaned.length === 8) {
      return `${areaCode} ${prefix} ${suffix}`;
    } else if (cleaned.length === 9) {
      return `${areaCode} ${prefix} ${suffix.substr(0, 3)} ${suffix.substr(3)}`;
    }
  }
  return phoneNumber;
};
