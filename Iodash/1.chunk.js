/**
 * @desc 将数组拆分成多个size长度的区块，并将这些区块组成一个新数组。如果arra无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 * 
 * @param {Array}  需要处理的数组
 * @param {Number} 每个数组区块的长度
 * @returns  {Array} 返回一个包含拆分区块的新数组（二位数组）
 * @example
 * 
 * 
 * chunk(['a', 'b', 'c', 'd', 'e'], 2)
 * // => [ ['a', 'b'], ['c', 'd'], ['e'] ]
 * 
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [ ['a', 'b', 'c'], ['d'] ]
 */

function chunk (array, size) {
    // 取size~0区间内最大值, size可能为小数、负数
    size = Math.max(size, 0)
    // 获取传入数组的长度
    const length = array == null ? 0 : array.length
    // array为空 或者 区块长度小于1 返回[]
    if ( !length || size < 1 ) {
        return []
    }
    let index = 0
    let resIndex = 0
    // 创建一个长度为Math.ceil向上取整（length/size）的空数组
    const result = new Array(Math.ceil(length / size))
    // 循环index次
    // index = index + size 要小于array.length
    while ( index < length ) {
        // result[0] = silce(array, 0, 0+size)
        result[resIndex++] = slice(array, index, (index += size))
    }
    return result
}

// 使用slice将目标数组按照区块长度切割，并将余数返回