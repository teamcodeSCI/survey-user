export const PUBLIC_URL = process.env.PUBLIC_URL;

export const formatPhoneNumber = (phoneNumber: string) => {
  const cleaned = phoneNumber.replace(/\D/g, '');
  const isValidVietnameseNumber = /^0\d{9,10}$/.test(cleaned);
  if (isValidVietnameseNumber) {
    const areaCode = cleaned.substr(0, 2);
    const prefix = cleaned.substr(2, 3);
    const suffix = cleaned.substr(5);
    if (cleaned.length === 10) {
      return `${areaCode} ${prefix} ${suffix}`;
    } else if (cleaned.length === 11) {
      return `${areaCode} ${prefix} ${suffix.substr(0, 3)} ${suffix.substr(3)}`;
    }
  }

  return phoneNumber;
};
