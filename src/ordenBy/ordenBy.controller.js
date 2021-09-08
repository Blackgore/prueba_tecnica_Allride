// eslint-disable-next-line max-len
import {requestAllride, ordenByDistrict, distance} from '../helper/RequestService';

export const ByDateEarly = async (req, res) => {
  try {
    const data = await requestAllride();
    const dataOrder = data.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateA > dateB ? 1 : -1;
    });
    const result = await ordenByDistrict(dataOrder);
    res.status(200).json({
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Error desconocido',
      error,
    });
  };
};

export const ByDateOld = async (req, res) => {
  try {
    const data = await requestAllride();
    const dataOrder = data.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateA < dateB ? 1 : -1;
    });
    const result = await ordenByDistrict(dataOrder);
    res.status(200).json({
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Error desconocido',
      error,
    });
  };
};

export const ByDistanceLong = async (req, res) => {
  try {
    const data = await requestAllride();

    const pf = {
      lat: '-33.437673',
      long: '-70.650479',
    };

    const dataOrder = data.sort((a, b) => {
      const dA = Number(distance(a.lat, a.lon, pf.lat, pf.long));
      const dB = Number(distance(b.lat, b.lon, pf.lat, pf.long));
      return dA < dB ? 1 : -1;
    });

    const result = await ordenByDistrict(dataOrder);

    res.status(200).json({
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Error desconocido',
      error,
    });
  };
};

export const ByDistanceShort = async (req, res) => {
  try {
    const data = await requestAllride();

    const pf = {
      lat: '-33.437673',
      long: '-70.650479',
    };

    const dataOrder = data.sort((a, b) => {
      const dA = Number(distance(a.lat, a.lon, pf.lat, pf.long));
      const dB = Number(distance(b.lat, b.lon, pf.lat, pf.long));
      return dA > dB ? 1 : -1;
    });

    const result = await ordenByDistrict(dataOrder);

    res.status(200).json({
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Error desconocido',
      error,
    });
  };
};
