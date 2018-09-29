/**
 * @desc 创建一个切片数组，去除array前面的n个元素（n默认值为1）
 * @param {Array}要查询的数组 要查询的数组
 * @param {Number} [n=1] 要去除的元素个数
 * @returns {Array} 返回array剩余切片
 * @example

    * drop([1, 2, 3])
    * // => [2, 3]
    *
    * drop([1, 2, 3], 2)
    * // => [3]
    *
    * drop([1, 2, 3], 5)
    * // => []
    *
    * drop([1, 2, 3], 0)
    * // => [1, 2, 3]
 */
function drop(array, n=1) {
    // 判断空数组
    const length = array == null ? 0 : array.length
    // 使用slice切割数组
    return length ? slice(array, n < 0 ? 0 : n , length) : []
}