/**
 * @desc 创建一个切片数组，去除array尾部的n个元素（n默认值为1）
 * @param {Array} 要查询的数组
 * @param {Number} [n=1] 要去除的元素个数
 * @returns {Arrya} 返回array剩余切片
 * 
 * @example 
 * dropRight([1, 2, 3])
 * // => [1, 2]
 * dropRight([1, 2, 3], 2)
 * // => [1]
 * dropRight([1, 2, 3], 0)
 * // => [1, 2, 3]
 */
function dropRight(array, n=1) {
    const length = array == null ? 0 : array.length
    return length ? slice(array, 0 , n < 0 ? 0 : -n) : []
}