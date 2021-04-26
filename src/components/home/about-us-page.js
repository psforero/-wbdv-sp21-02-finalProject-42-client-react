import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <div>
        <h1>A data tool for teachers and students</h1>
        <p>
          DaViz is a student data visualization tool that allows teachers and students to analyze
          academic data in a simple and quick way. It uses Google Sheets, a tool that most teachers
          already use, as a data input mechanism and provides a quick and efficient visualization of
          that data. It also provides a message-board that allows teachers to communicate with
          students and with other colleagues. This results in a centralized location for data and
          student communication that teachers can use to aid their students in their academic
          endeavors.
        </p>
      </div>
      <div>
        <h2>The issue</h2>
        <p>
          Most schools use a combination of software to keep track of student data. Many of these
          tools are admin-facing, meaning that they are intended for school administrators and
          inside
          use. Students and teachers don’t have a lot of options that allow them to communicate,
          analyze, and visualize student data at a glance, in fact, most tools present the data only
          as tables.
        </p>
        <p>
          Teachers need to understand and communicate student progress to colleagues,
          administrators,
          students, and families, however, many don't have the technical knowledge or time to
          implement data visualization methods to analyze data at different levels (classroom,
          department, grade level).
        </p>
        <p>
          The difficulty with providing such a service is that different schools have different
          organizational structures: homerooms, advisories, emphases, concentrations... Larger
          data management tools can only provide schools with a limited amount of customization,
          which
          doesn't always align with the schools' specific structure.
        </p>
      </div>
      <div>
        <h2>The solution</h2>
        <p>
          Most schools already use Google Sheets as a way of tracking many types of data (student,
          schedules, grade level trackers, etc.), which means that most teachers are proficient at
          using this service as a data input portal. DaViz gives the school the flexibility of
          entering student data in a set of Google Sheets in a way that fits their organizational
          structure and then presents it back to admins, teachers, and students in a way that is
          simple, usable, and effective.
        </p>
      </div>
      <div>
        <h2>The result</h2>
        <h3>For Students</h3>
        <p>
          A student can log into their account and see their own current data as well as their
          progress over time. Additionally, they are able to see messages and reminders left by
          their
          teachers.
        </p>
        <h3>For Teachers</h3>
        <p>
          Teachers are able to see all data for any student or grouped by advisory/homeroom,
          class, department, or the entire school. They can also create check-ins, events, and
          to-do's
          for students.
        </p>
        <h3>For Admins</h3>
        <p>Admins have all the tools available for teachers plus the ability to generate and manage
          additional accounts.</p>
      </div>
    </div>
  );
}
export default AboutUs;