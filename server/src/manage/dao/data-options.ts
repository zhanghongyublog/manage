export function DataOptions<T>(options: T, tableName?: string): T {
  const targetObj = Object.assign({}, options);
  for (const key in targetObj) {
    if (targetObj[key] !== undefined) {
      if (tableName) {
        targetObj[`${tableName}.${key}`] = options[key];
        delete targetObj[key];
      } else {
        targetObj[key] = options[key];
      }
    } else {
      delete targetObj[key];
    }
  }
  return targetObj;
}
