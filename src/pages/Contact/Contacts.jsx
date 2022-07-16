import React from 'react';
import { Link } from 'react-router-dom';
import WebLayout from '../../layouts/WebLayout';

const Contacts = () => {
  return (
    <>
    <WebLayout />

    <section className="contacts-area my-100">
        <div className="container">
            <div className="col-12">
                <div className="mb-5">
                    <Link to="/user/create-contact" className="btn btn-primary">Add Contact</Link>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>SL No.</th>
                                <th>Name</th>
                                <th>Company</th>
                                <th>Address</th>
                                <th>Phone No.</th>
                                <th>Email Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Muhaimin Shihab</td>
                                <td>Grow Tech</td>
                                <td>2001/3 North Ibrahimpur, Kafrul, Dhaka - 1206</td>
                                <td>+880 1829-004863</td>
                                <td>hostforshihab@gmail.com</td>
                                <td>
                                    <div className="btn-group">
                                        <Link to="" className="btn btn-warning btn-sm">Edit</Link>
                                        <Link to="" className="btn btn-danger btn-sm">Delete</Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Muhaimin Shihab</td>
                                <td>Grow Tech</td>
                                <td>2001/3 North Ibrahimpur, Kafrul, Dhaka - 1206</td>
                                <td>+880 1829-004863</td>
                                <td>hostforshihab@gmail.com</td>
                                <td>
                                    <div className="btn-group">
                                        <Link to="" className="btn btn-warning btn-sm">Edit</Link>
                                        <Link to="" className="btn btn-danger btn-sm">Delete</Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Muhaimin Shihab</td>
                                <td>Grow Tech</td>
                                <td>2001/3 North Ibrahimpur, Kafrul, Dhaka - 1206</td>
                                <td>+880 1829-004863</td>
                                <td>hostforshihab@gmail.com</td>
                                <td>
                                    <div className="btn-group">
                                        <Link to="" className="btn btn-warning btn-sm">Edit</Link>
                                        <Link to="" className="btn btn-danger btn-sm">Delete</Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Muhaimin Shihab</td>
                                <td>Grow Tech</td>
                                <td>2001/3 North Ibrahimpur, Kafrul, Dhaka - 1206</td>
                                <td>+880 1829-004863</td>
                                <td>hostforshihab@gmail.com</td>
                                <td>
                                    <div className="btn-group">
                                        <Link to="" className="btn btn-warning btn-sm">Edit</Link>
                                        <Link to="" className="btn btn-danger btn-sm">Delete</Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Muhaimin Shihab</td>
                                <td>Grow Tech</td>
                                <td>2001/3 North Ibrahimpur, Kafrul, Dhaka - 1206</td>
                                <td>+880 1829-004863</td>
                                <td>hostforshihab@gmail.com</td>
                                <td>
                                    <div className="btn-group">
                                        <Link to="" className="btn btn-warning btn-sm">Edit</Link>
                                        <Link to="" className="btn btn-danger btn-sm">Delete</Link>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contacts