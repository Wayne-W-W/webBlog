/**
 * @desc 裁剪数组array，从start位置开始到end结束，但不包括end本身位置
 * @param {Array} 要裁剪数组
 * @param {Number} 开始位置 [start=0]
 * @param {Number} 结束位置 [end=array.length]
 * @returns {Array} 返回数组array裁剪部分的新数组
 * @example 
 * var array = [1, 2, 3, 4]
 * _.slice(array, 2)
 * // => [3, 4]
 */
function slice(array, start, end) {
    // 判断array是否为空
    let length = array == null ? 0 : array.length
    if (!length) {
        return []
    }
    // 若为传参，初始化
    start = start == null ? 0 : start
    end = end === undefined ? length : end
    // 判断start小于
    // -start大于length ==> 0
    // 否则 ==> length + start (5+-2)  = 3
    if (start < 0) {
        start = -start > length ? 0 : (length + start)
    }
    end = end > length ? length : end
    //  end小于0话  end = end + length
    if (end < 0) {
        end += length
    }
    // 有点看不懂啊
    length = start > end ? 0 : ((end - start) >>> 0)
    start >>>= 0

    let index = -1
    const result = new Array(length)
    while( ++index < length) {
        return[index] = array[index + start]
    }
    return result
}