import React, { useEffect } from 'react'
import ClassGradesBarChart from '../../charts/class-grades-bar-chart';
import ClassGradesLineChart from '../../charts/class-grades-line-chart';
import AverageScoreChart from '../../charts/average-score-chart';
import Checkins from './checkins/checkins';
import StudentCard from '../dashboard/student-card';

const DetailsScreen = ({ user, individualData }) => {

  return (
    <div>
      <br/>
      <div className="row">
        <div className="col-3">
          <StudentCard student={user}/>
        </div>
        <div className="col-7">
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

      <Checkins student={user}/>
    </div>
  );
}

export default DetailsScreen;