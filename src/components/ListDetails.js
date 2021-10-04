import React from 'react';
export default function ListDetails(props){
    return(
        <>
        <h2 className="text-center mt-5" style={{}}>List Details</h2>
        <div className="container-fluid">
            <table className="table mt-4  table-striped">
                <thead className="bg-info">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Department</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                {props.e1.map((emp,id) =>
                   
                        <tr key={id} >
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                            <td>{emp.dept}</td>
                            <td>{emp.location}</td>
                        </tr>
                  
                    )}
                </tbody>
            </table>
        </div>
        </>
    )
}