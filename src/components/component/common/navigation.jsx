// import React from "react"
// import { navigate } from "gatsby"
// import styled from "styled-components"

// import icon_search_on from "../../../images/icon_search_on.png"
// import icon_search_off from "../../../images/icon_search_off.png"
// import icon_list_on from "../../../images/icon_list_on.png"
// import icon_list_off from "../../../images/icon_list_off.png"
// import icon_calender_on from "../../../images/icon_calender_on.png"
// import icon_calender_off from "../../../images/icon_calender_off.png"
// import icon_like_on from "../../../images/icon_like_on.png"
// import icon_like_off from "../../../images/icon_like_off.png"
// import { P6Bold } from "./text"
// const Navigation = props => {
//   const { isNavigation, naviIndex = 0 } = props

//   const tabName = [
//     { title: "봉사조회", onIcon: icon_search_on, offIcon: icon_search_off },
//     { title: "맞춤봉사", onIcon: icon_list_on, offIcon: icon_list_off },
//     { title: "캘린더", onIcon: icon_calender_on, offIcon: icon_calender_off },
//     { title: "마이", onIcon: icon_like_on, offIcon: icon_like_off },
//   ]

//   const tabClickHandler = t => {
//     switch (t) {
//       case 0:
//         navigate("/app/mainSearch")
//         break
//       case 1:
//         navigate("/app/mainCustom")
//         break
//       case 2:
//         navigate("/app/mainCalendar")
//         break
//       case 3:
//         navigate("/app/mainMy")
//         break
//       default:
//         break
//     }
//   }

//   return (
//     <Tab on={isNavigation ? "on" : "off"}>
//       {tabName.map((i, idx) => (
//         <TabItem key={idx} onClick={() => tabClickHandler(idx)}>
//           <Icon src={naviIndex === idx ? i.onIcon : i.offIcon} alt={"버튼 이미지"} />

//           <P6Bold style={{ marginTop: "5px" }} color={naviIndex === idx ? "#ff499a" : "#5e6a79"}>
//             {i.title}
//           </P6Bold>
//         </TabItem>
//       ))}
//     </Tab>
//   )
// }

// export default Navigation

// const Tab = styled.div`
//   display: ${props => (props.on === "on" ? "flex" : "none")};
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 50px;
// `

// const TabItem = styled.button`
//   background-color: #f6f7f9;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   flex: 1;
//   width: 100%;
//   height: 50px;
// `

// const Icon = styled.img`
//   width: 24px;
//   height: 24px;
// `
