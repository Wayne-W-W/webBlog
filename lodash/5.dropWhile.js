/**
 * @desc 创建一个切片数组，去除array中从起点开始到predicate返回假值结束部分。
 * predicate会传入3个参数（value，index，array）
 * @param {Array} 要查询的数组
 * @param {Function} predicate这个函数会在每一次迭代调用
 * @returns {Array} 返回array剩余切片
 * @example
 * 
 * const users = [
 *    { 'user': 'barney',  'active': true },
 *    { 'user': 'fred',    'active': true },
 *    { 'user': 'pebbles', 'active': false }
 * ]
 * dropWhile(users, ({active}) => active)
 *  // => objects for ['pebbles']
 */

function dropWhile(array, predicate) {
    return (array != null && array.length)
      ? baseWhile(array, predicate, true)
      : []
}