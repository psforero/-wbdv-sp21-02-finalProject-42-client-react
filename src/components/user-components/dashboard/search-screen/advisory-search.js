// import React, { useEffect, useState } from 'react'
// import { connect } from 'react-redux'
// import sheetsService from '../../../../services/gsheets-service';
// import StudentCard from '../student-card';
// import { Link, Route } from 'react-router-dom';
// import TableView from './table-view';
// import DetailsScreen from '../../student-detail/details-screen';
//

//
// useEffect(() => {
//   getAdvisoryList()
// }, [getAdvisoryList])
//
// const checkIfExists = () => {
//   const keys = Object.keys(advisories)
//   if (keys.includes(advisoryToSearch)) {
//     setExists(true)
//     getAdvisoryRows(advisoryToSearch)
//   } else {
//     setExists(false)
//     alert(`Theres no advisory named ${advisoryToSearch} \n available advisories are: ${keys}`)
//   }
// }
//
// const checkStudent = () => {
//   getAllStudents(advisories)
//   let exists = false
//   for (let student in students) {
//     let rec = students[student]
//     if (rec.Name === advisoryToSearch) {
//       setSelectedStudent(rec)
//       exists = true
//       break;
//     }
//   }
//   if (!exists) {
//     setSelectedStudent(null)
//     alert(`There is no student named ${advisoryToSearch}`)
//   }
// }
//
// const AdvisorySearch = () => {
//
//   {
//     searchType === 'Advisory' &&
//     <Route path="/profile/search/:advisor" exact={true}>
//       {
//         searchType === 'Advisory' &&
//         <>
//           <h1>Existing Advisories</h1>
//           <ul className="list-group">
//             {
//               Object.keys(advisories).map((name) =>
//                 <li key={name}>
//                   {name}
//                 </li>
//               )
//             }
//           </ul>
//           {
//             exists &&
//             <>
//               <h1>Students for {advisoryToSearch}</h1>
//               <div className="row">
//                 {
//                   advisoryRows.map((row) =>
//                     <StudentCard row={row}
//                                  advisor={advisoryToSearch}
//                                  setStudent={setStudent}/>
//                   )
//                 }
//               </div>
//             </>
//           }
//         </>
//       }
//     </Route>
//   }
//   {
//     (searchType === 'Student' && selectedStudent !== null) &&
//     <div className="row">
//       <StudentCard row={selectedStudent}
//                    advisor={selectedStudent.Advisor}
//                    setStudent={setStudent}/>
//     </div>
//
//   }
// </>
// </div>
//
// <TableView/>
//
// <Route path="/profile/search/:advisor/:studentName" exact={true}>
// <DetailsScreen student={student}/>
// </Route>
//
//
//
// return (
// <></>
// )
// }
//
//
