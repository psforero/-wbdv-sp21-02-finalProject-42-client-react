import React, { useEffect, useState } from 'react'
import ClassGradesBarChart from '../../charts/class-grades-bar-chart';
import ClassGradesLineChart from '../../charts/class-grades-line-chart';
import AverageScoreChart from '../../charts/average-score-chart';
import Checkins from './checkins/checkins';
import StudentCard from '../dashboard/student-card';
import { useParams } from 'react-router-dom';
import usersService from '../../../services/users-service';

const DetailsScreenTeacherView = ({ user, studentData }) => {
  const [student, setStudent] = useState(undefined)
  const [individualData, setIndividualData] = useState()
  const { lastName, firstName } = useParams()

  useEffect(() => {
    const data = studentData.find(student => student.firstName === firstName && student.lastName === lastName)
    setIndividualData(data)
  }, [firstName, lastName, studentData])

  useEffect(() => {
    usersService.findUserByName({ firstName: firstName, lastName: lastName })
      .then((user) => {
        setStudent(user[0])
      })
  }, [])

  return (
    student !== undefined &&
    <div>
      <br/>
        <div className="row">
          <div className="col-2">
            <StudentCard student={student}/>
          </div>
          <div className="col-8">
            <h5>Current Grades</h5>
            <ClassGradesBarChart student={individualData}/>
          </div>
          <div className="col-2">
            <h5>Average</h5>
            <AverageScoreChart student={individualData}/>
          </div>
        </div>

        <br/>

        <div className="row">
          <div className="col-4">
            <h5>Grades Over Time</h5>
            <ClassGradesLineChart student={individualData}/>
          </div>
        </div>

        <br/>

        <Checkins student={student}/>
    </div>
  );
}

export default DetailsScreenTeacherView;