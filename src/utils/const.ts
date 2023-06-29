export const PUBLIC_URL = process.env.PUBLIC_URL;
export const API_URL: string = 'https://scigroup.com.vn/app/survey-web/api/';
export const TOKEN: string = '9a9af5b8174facde56cdb07e803c9f16';

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
