import React from "react";

const StaffDirectory= (
    {
        directory = [
            {lastName: 'Abbot', firstName: 'Robin', title: 'Teacher', email: 'rabbott@wblc.org'},
            {lastName: 'Alfred', firstName: 'Joseph', title: 'Teacher', email: 'jalfred@wblc.org'},
            {lastName: 'Alterman', firstName: 'Sharon', title: 'Teacher', email: 'salterman@wblc.org'},
            {lastName: 'Anglin', firstName: 'Rachel', title: 'ELL Teacher', email: 'ranglin@wblc.org'}
        ]
    }
) => {
    return (
        <div>
            <h1>Staff Directory</h1>
            <ul className="list-group">
                {directory.map((staff) =>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <figure>
                                    <div className="row justify-content-center">
                                        <h1 className="justify-content-center display-1">
                                            {staff.firstName.charAt(0)}{staff.lastName.charAt(0)}
                                        </h1>
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
        </div>
    );
}
export default StaffDirectory;