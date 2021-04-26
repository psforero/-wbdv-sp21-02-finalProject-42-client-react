import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ClassGradesBarChart from '../../charts/class-grades-bar-chart';
import ClassGradesLineChart from '../../charts/class-grades-line-chart';
import GeneralScoreChart from '../../charts/general-score-chart';
import Checkins from '../dashboard/checkins';
import StudentCard from '../dashboard/student-card';

const DetailsScreen = ({ student }) => {
  const { advisor } = useParams();
  return (
    <div>
      <br/>
      <br/>
      <div className="row">
        <div className="col-2">
          <img
            src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM="
            alt="Profile"
            width="200"
            height="150"/>
        </div>
        <div className="col">
          <StudentCard student={student}/>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <h5>Current Grades</h5>
          <ClassGradesBarChart student={student}/>
        </div>
        <div className="col-4">
          <h5>Grades Over Time</h5>
          <ClassGradesLineChart student={student}/>
        </div>
        <div className="col-2">
          <h5>General Score</h5>
          <GeneralScoreChart student={student}/>
        </div>
      </div>
      <Checkins student={student}/>
    </div>
  );
}

export default DetailsScreen;