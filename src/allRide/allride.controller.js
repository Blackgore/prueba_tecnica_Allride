import {requestAllride, ordenByDistrict} from '../helper/RequestService';

export const allRideList = async (req, res) => {
  try {
    const data = await requestAllride();
    const result = await ordenByDistrict(data);
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
