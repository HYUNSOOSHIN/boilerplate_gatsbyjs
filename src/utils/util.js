import { useSelector } from "react-redux"
import { configureStore } from "../store"
import reducer from "../reducers/config"

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

export function WidthToDP(px) {
  const screenWidth = configureStore.getState().ConfigReducer.screenWidth
  // 제플린 화면 넓이가 360 일 때
  return (screenWidth / 360) * px
}
