import { City } from '../redux/types';

const host = 'https://opendata.cwb.gov.tw/';
const api = 'api/v1/rest/datastore/';

export const keyDecode = (key: string): string => {
  const decodedKey = key.split('-').reduce((acc, curVal, index) => {
    if (index === 0) {
      return `${curVal}`;
    }
    return `${curVal}-${acc}`;
  }, '');
  return decodedKey;
};

const key = keyDecode('3464175CBF50-A7B1-4C39-0DEF-E9975C57-CWB');
export const getFetchCurrentUrl = (city: City): string => {
  const item = 'O-A0001-001';
  return `${host}${api}${item}?Authorization=${key}&locationName=${encodeURI(
    city.currentUsed
  )}`;
};

export const getFetch36hoursUrl = (city: City): string => {
  const item = 'F-C0032-001';
  return `${host}${api}${item}?Authorization=${key}&locationName=${encodeURI(
    city.hour36Used
  )}`;
};
