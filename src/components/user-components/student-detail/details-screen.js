import React from 'react'
import { useParams } from 'react-router-dom'
import CheckingCard from './checkin-card';
import WidgetCard from './widget-card';
import ClassGradesBarChart from "../../charts/class-grades-bar-chart";
import ClassGradesLineChart from "../../charts/class-grades-line-chart";
import GeneralScoreChart from "../../charts/general-score-chart";


const eventsAndTasks = [
  {
    title: 'Permission Slip',
    date: '12/21/2021',
    text: 'Turn in permission slip for January trip',
    type: 'task',
  },
  {
    title: 'Late homework',
    date: '10/23/2021',
    text: 'Turn in math project before end of quarter',
    type: 'task',
  },
  {
    title: 'College Rep Visit',
    date: '05/10/2021',
    text: 'Meetings will take place during lunch, room 213',
    type: 'event',
  },
  {
    title: 'Family trip',
    date: '02/20/2021',
    text: 'Student will be out of the country and will miss ~2 weeks of class',
    type: 'event',
  },
  {
    title: 'History Checkin',
    date: '',
    text: 'Check in with Mrs. Someone to retake midterm exam',
    type: 'task',
  },
]

const checkIns = [
  {
    date: 'May 23',
    text: 'Nam iaculis odio vulputate ante venenatis, vel imperdiet odio egestas. Vivamus faucibus lacus a ante pharetra, vel porta dui gravida. Mauris mauris augue, cursus in mauris vel, rhoncus posuere tortor.',
    widgets: [eventsAndTasks[0], eventsAndTasks[1]]
  },
  {
    date: 'March 12',
    text: 'Fusce pretium odio sapien, sed gravida diam imperdiet eget. Pellentesque ac lectus quis diam ullamcorper scelerisque. Nam a arcu non neque faucibus sodales in quis felis.',
    widgets: [],
  },
  {
    date: 'February 21',
    text: 'Praesent et nisi vestibulum, imperdiet diam vitae, dapibus dui. Fusce quis urna lacus. Sed eros nisl, molestie sed nisl interdum, egestas ultrices urna. Mauris diam mi, pellentesque sit amet ex eu, ornare vestibulum sapien.',
    widgets: [eventsAndTasks[2]],
  },
  {
    date: 'December 10',
    text: 'Morbi vitae ultricies metus, ut semper elit. Sed dictum nisl a ligula mattis egestas. Sed dictum lectus eget lectus molestie, sed ultrices tortor elementum.',
    widgets: [eventsAndTasks[0], eventsAndTasks[1]]
  },
  {
    date: 'December 10',
    text: 'Mauris egestas efficitur urna, a egestas nunc tincidunt non. Etiam a viverra mauris, ut porttitor tellus.',
    widgets: [eventsAndTasks[0]],
  },
];

const DetailsScreen = ({ student }) => {
  const { advisor } = useParams();
  return (
      <div>
        <div className="row">
          <div className="col-2">
            <h2>{student.firstName} {student.lastName}</h2>
            <img
                src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM="
                alt="Profile"
                width="200"
                height="150"/>
            <ul className="list-group">
              <li className="list-group-item">
                Email: {student.email}
              </li>
              <li className="list-group-item">
                Advisor: {student.advisor}
              </li>
            </ul>
          </div>
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
        <div className="row">
          <div className="col-8">
            <h4>Check-ins</h4>
            <ul className="list-group">
              {
                checkIns.map(item => {
                  return (
                      <>
                        <CheckingCard item={item}/>
                        <br/>
                      </>
                  )
                })
              }
            </ul>
          </div>
          <div className="col-4">
            <h4>Events and Tasks</h4>
            <ul className="list-group">
              {
                eventsAndTasks.map(widget => {
                  return (
                      <>
                        <WidgetCard widget={widget}/>
                        <br/>
                      </>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
  );
}

export default DetailsScreen;