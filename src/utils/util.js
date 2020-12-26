import { useSelector } from "react-redux"

// 전화번호에 - 붙이는 함수
export function phoneNumFormat(num, type) {
  if (num === null) return ""

  let formatNum = ""
  if (num.length === 11) {
    if (type === 0) {
      formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, "$1-****-$3")
    } else {
      formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
    }
  } else if (num.length === 8) {
    formatNum = num.replace(/(\d{4})(\d{4})/, "$1-$2")
  } else {
    if (num.indexOf("02") === 0) {
      if (type === 0) {
        formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, "$1-****-$3")
      } else {
        formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, "$1-$2-$3")
      }
    } else {
      if (type === 0) {
        formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, "$1-***-$3")
      } else {
        formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
      }
    }
  }

  return formatNum
}
