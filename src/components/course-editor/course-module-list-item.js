import React from 'react'

const ModuleListItem = ({module, editing}) =>
    <div>
        {
            !editing(module) &&
            <li className={`list-group-item ${module.status}`}>
                <div className="row">
                    <div className="col">
                        {module.title}
                    </div>
                    <div className="col-auto">
                        <span className="float-right">
                            <i className={"fas fa-pencil-alt"}></i>
                        </span>
                    </div>
                </div>
            </li>
        }
        {
            editing(module) &&
            <li className={"list-group-item active"}>
                <div className="row">
                    <div className="col">
                        <input className="form-control" type="text" placeholder={`editing ${module.title}`}/>
                    </div>
                    <div className="col-form-label col-auto">
                        <span className="float-right">
                            <i className={"fas fa-times wbdv-tab"}></i>
                        </span>
                                <span className="float-right">
                            <i className={"fas fa-check"}></i>
                        </span>
                    </div>
                </div>
            </li>
        }
    </div>

export default ModuleListItem
