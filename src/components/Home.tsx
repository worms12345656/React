import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

interface Student {
    id: string,
    name: string,
    age: string,
    score: string
};

interface Props {
    studentList: Array<Student>,
    handleUpdate(id: string): void,
    handleDelete(id: string): void
}

const Home: FC<Props> = (props) => {

    return (
        <div className='home'>
            <h1>Student List</h1>
            <table className="table table-light">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Score</th>
                        <th>Action </th>
                    </tr>
                </thead>
                <tbody>
                    {props.studentList.map((student,index) => {
                        return (
                            <tr key={index}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.score}</td>
                                <td>
                                    <Link to='/edit' onClick={() => { props.handleUpdate(student.id) }}>Update</Link>
                                    <p onClick={() => { props.handleDelete(student.id) }}>Delete</p>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {/* <table className="table table-dark">
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Score</td>
                    <td>Action </td>
                </tr>
                {console.log(localStorage.getItem('studentList'))}
                {props.studentList.map(student => {
                    return (
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.score}</td>
                            <td>
                                <Link to='/edit' onClick={() => { props.handleUpdate(student.id) }}>Update</Link>
                                <p onClick={() => { props.handleDelete(student.id) }}>Delete</p>
                            </td>
                        </tr>
                    );
                })}
            </table> */}
        </div>
    );
}

export default Home;