/*
  obj = { key: { subkey: 'value' } }

  getByDottedKey(obj, 'key.subkey')

  => 'value'
*/

const getByDottedKey = (obj, keys) => {
  return keys.split('.').reduce((res, key) => {
    return res[key];
  }, obj)
};

export default getByDottedKey;
