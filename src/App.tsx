import React, { FC, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './components/Home';
import Home from './components/Home';
import Add from './components/Add';

interface Student {
    id: string,
    name: string,
    age: string,
    score: string
};

const App: FC<{ className: string }> = (props) => {

    const list: Array<Student> = [
        {
            id: '1',
            name: 'Tung',
            age: '12',
            score: '5.4'
        },
        {
            id: '2',
            name: 'Tung',
            age: '13',
            score: '5.6'
        }
    ];

    // const storedStudentList: Array<Student> =  JSON.parse(localStorage.getItem('studentList'));

    const student: Student = {
        id: '3',
        name: 'Tung',
        age: '14',
        score: '7.0'
    };

    const [studentList, setStudentList] = useState<Array<Student>>(list);
    const [studentEdit, setStudentEdit] = useState<Student>({
        id: '',
        name: '',
        age: '',
        score: ''
    });

    const handleUpdate = (id: string) => {
        const studentFind = studentList.find((item: Student) => {
            if (id === item.id) {
                return item;
            }
        })
        if (studentFind) setStudentEdit(studentFind)
    };

    const handleDelete = (id: string): void => {
        setStudentList(studentList.filter((e: Student) => {
            if (id !== e.id) {
                return e;
            }
        }));
    };

    const handleAdd = (student: Student): void => {
        if (studentEdit.id === '') {
            setStudentList([...studentList, student]);
        } else {
            const studentListEdit = studentList.map((item: Student) => {
                if (student.id === item.id) {
                    return student;
                }
                return item;
            });
            setStudentList([...studentListEdit]);
        }
        setStudentEdit({
            id: '',
            name: '',
            age: '',
            score: ''
        })
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <a className="navbar-brand text-light" href="/">TungTL</a>
                <Link to='/' className='nav-link text-light'>Home</Link>
                <Link to='/add' className='nav-link text-light'>Add</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home studentList={studentList} handleDelete={handleDelete} handleUpdate={handleUpdate} />} ></Route>
                <Route path='/add' element={<Add handleAdd={handleAdd} studentEdit={studentEdit} />} ></Route>
                <Route path='/edit' element={<Add handleAdd={handleAdd} studentEdit={studentEdit} />} ></Route>
            </Routes>
        </div>
    );
}

export default App;