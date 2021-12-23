import React, { FC, useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    handleAdd(student: Student): void,
    studentEdit: Student
};

interface Student {
    id: string,
    name: string,
    age: string,
    score: string
};

const Add: FC<Props> = (props) => {

    const [student, setStudent] = useState({
        id: '',
        name: '',
        age: '',
        score: ''
    });
    const redirect = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        props.handleAdd(student);
        // setStudent({ id: '',
        // name: '',
        // age: '',
        // score: ''});
        redirect('/');
    };

    const handleChange = (event: any) => {
        var name = event.target.name;
        setStudent({ ...student, [name]: event.target.value })
    };

    console.log('running');
    useEffect(() => {
        setStudent(props.studentEdit);
    }, [props.studentEdit]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>ID</td>
                        <td><input type='text' placeholder='input id' name='id' value={student.id} onChange={handleChange}></input></td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td><input type='text' placeholder='input name' name='name' value={student.name} onChange={handleChange}></input></td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td><input type='text' placeholder='input age' name='age' value={student.age} onChange={handleChange}></input></td>
                    </tr>
                    <tr>
                        <td>Score</td>
                        <td><input type='text' placeholder='input score' name='score' value={student.score} onChange={handleChange}></input></td>
                    </tr>
                    <tr>
                        <td><button type='submit'>{props.studentEdit.id !== '' ? 'Edit' : 'Add'}</button></td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default Add;