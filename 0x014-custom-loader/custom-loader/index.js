/**
 * NAME : index
 * USER : FollowWinter
 * DATE : 2017/11/9
 * SUMMARY :
 */

/**
 * 实现一个函数
 * 作用是将`var`替换成`let`
 * @param content 字符串
 * @returns string 字符串
 */
module.exports = function (content) {
    console.log('元数据', content)
    content = content.replace(/var/g, 'let')
    console.log('处理之后', content)
    return content;
};