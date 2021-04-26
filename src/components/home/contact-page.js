import React from 'react'

const directory = [
    { description: 'Technical Support', lastName: 'Abbot', firstName: 'Robin', title: 'Tech Support Specialist', email: 'rabbott@DaViz.com' },
    { description: 'Business Inquiries', lastName: 'Smith', firstName: 'Josie', title: 'Outreach Lead', email: 'jalfred@DaViz.com' },
  ]

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <ul className="list-group">
        {directory.map((staff) =>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <figure>
                  <div className="row justify-content-center">
                    <h4 className="justify-content-center display-4">
                      {staff.description}
                    </h4>
                  </div>
                </figure>
              </div>

              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{staff.lastName}, {staff.firstName}</h5>
                  <p className="card-text">{staff.title}</p>
                  <a className="fas fa-envelope fa-2x"> {staff.email}</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </ul>

      <h5>*** For questions regarding account access please contact your school administrator.</h5>
    </div>
  )
}

export default Contact
