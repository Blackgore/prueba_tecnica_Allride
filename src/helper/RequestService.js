/* eslint-disable indent */
import axios from 'axios';

export const requestAllride = async () => {
  const request = await axios.get('https://stage.allrideapp.com/ext/api/v1/recruiting/points', {
    headers: {
      // eslint-disable-next-line max-len
      Authorization: `Bearer 250bd75493c59e8146798e43fff8370893b1bd76052533a7428a4e182eddd8b4fd1eed201dbfdd19491b0595cd9b2acda44fc47fff0f0e28d5fe17c662ace665`,
    },
  });
  return request.data;
};

export const ordenByDistrict = async (array) => {
  const result = array.reduce((r, a) => {
    r[a.district] = r[a.district] || [];
    r[a.district].push(a);
    return r;
  }, Object.create(null));
  return result;
};

export const distance = (lat1, lon1, lat2, lon2) => {
  const rad = (x) => x * Math.PI/180;

  const R = 6378.137; // Radio de la tierra en km
  const dLat = rad( lat2 - lat1 );
  const dLong = rad( lon2 - lon1 );

  const a = Math.sin(dLat/2) *
            Math.sin(dLat/2) +
            Math.cos(rad(lat1)) *
            Math.cos(rad(lat2)) *
            Math.sin(dLong/2) *
            Math.sin(dLong/2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  const d = R * c;

  return d.toFixed(3); // Retorna tres decimales
 };
