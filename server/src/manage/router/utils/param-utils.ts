/**
 * @param object 验证的对象
 * @param strict 严格模式
 * 验证对象的属性是否有效，非对象直接返回false
 * 普通模式：只有有一个属性有效，则返回true
 * 严格模式: 所有属性均有效才返回true，否则false
 */
function validateProperty(obj: Object, strict = false): boolean {
  if (!(obj instanceof Object)) {
    return false;
  }
  let _validNo = 0; // 有效属性的个数
  let _invalidNo = 0; // 无效属性的个数
  for (const key in obj) {
    if (obj[key]) {
      _validNo++;
    } else {
      _invalidNo++;
    }
  }
  let flag = false;
  if (strict) {
    flag = _invalidNo > 0 ? false : true;
  } else {
    flag = _validNo > 0 ? true : false;
  }

  return flag;
}

function validateJSON(jsonStr): boolean | any {
  if (!jsonStr) {
    return false;
  }
  let json;
  try {
    json = JSON.parse(jsonStr);
  } catch (e) {
    json = false;
  }
  return json;
}

function strToJSON(str: string) {
  let jsonData = [];
  if (str === null || str === undefined || str === 'null' || str === '') {
    return jsonData;
  }
  try {
    jsonData = JSON.parse(str);
  } catch (e) {
    jsonData = [];
  }
  return jsonData;
}

function JSONToStr(json: any) {
  try {
    return JSON.stringify(json);
  } catch (e) {
    return '';
  }
}

function strToNumber(str: string): number {
  const strNum = parseInt(str, 10);
  if (isNaN(strNum)) {
    return null;
  }
  return strNum;
}

function toBoolean(str: string): boolean {
  if (str === 'false' || str === '0' || str === '-0' || str === 'NaN') {
    return false;
  }
  return Boolean(str);
}

function formatFileSize(value) {
  // 1KB = 1024 Bytes
  // 1MB = 1024 * 1024 = 1,048,576 Bytes
  // 1GB = 1024 * 1024 * 1024 = 1,073,741,824 Bytes
  // 1TB = 1024 * 1024 * 1024 * 1024 = 1,099,511,627,776 Bytes
  // 1PB = 1024 * 1024 * 1024 * 1024 * 1024 = 1,125,899,906,842,624 Bytes
  // 1EB = 1024 * 1024 * 1024 * 1024 * 1024 * 1024 = 1,152,921,504,606,846,976 Bytes (!!!NOT SUPPORT in JS!!!)
  if (value === null || value === '' || value === undefined) {
    return '-';
  } else {
    if (value < 1024) {
      return `${value}B`;
    } else if (value < 1048576) {
      return `${(value / 1024).toFixed(2)}KB`;
    } else if (value < 1073741824) {
      return `${(value / 1048576).toFixed(2)}MB`;
    } else if (value < 1099511627776) {
      return `${(value / 1073741824).toFixed(2)}GB`;
    } else if (value < 1125899906842624) {
      return `${(value / 1099511627776).toFixed(2)}TB`;
    } else {
      return `${(value / 1125899906842624).toFixed(2)}PB`;
    }
  }
}

export const paramUtils = {
  validateProperty,
  validateJSON,
  formatFileSize,
  JSONToStr,
  strToJSON,
  strToNumber,
  toBoolean
};
