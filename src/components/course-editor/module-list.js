import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../../services/module-service"

const ModuleList = (
    {
        myModules=[],
        createModule,
        deleteModule,
        updateModule,
        findModulesForCourse=(courseId) => console.log(courseId),
        layout
    }) => {
    const {courseId, moduleId} = useParams();
    useEffect(() => {
        // alert(courseId)
        findModulesForCourse(courseId)
    }, [])

    return(
        <ul className = "list-group">
            {
                myModules.map(
                    (module) =>
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/${module._id}`}
                            updateItem={updateModule}
                            deleteItem={deleteModule}
                            item={module}
                            type='module'/>
                )
            }
            <li className="list-group-item text-center">
                <a onClick={() => createModule(courseId)} className="fas fa-plus fa-3x"></a>
            </li>
        </ul>
    )

}

const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}
const dtpm = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModuleForCourse(courseId, {title: "New Module"})
                .then(theActualModule => dispatch({
                    type: "CREATE_MODULE",
                    module: theActualModule
                }))
        },
        deleteModule: (item) =>
        {
            console.log("here")
            moduleService.deleteModule(item._id)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: item
                }))
        },
        updateModule: (module) =>
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                    type: "UPDATE_MODULE",
                    module
                })),
        findModulesForCourse: (courseId) => {
            // alert(courseId);
            moduleService.findModulesForCourse(courseId)
                .then(theModules => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: theModules
                }))
        }
    }
}

export default connect(stpm, dtpm) (ModuleList)