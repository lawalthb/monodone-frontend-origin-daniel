import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Modal.module.css';

const Table = () => {
    const handleEdit = () =>{
        document.getElementById('myModal').style.display = 'block';
    }
    const closeModal = () =>{
        document.getElementById('myModal').style.display = 'none';
    }
  return (
    <div className='container'>
        {/* Header  */}
        <div className="row justify-content-center align-items-center">
            <div className="col-lg-10 col-sm-10">
                <div className="row col-md-4 col-lg-4 col-sm-12">
                    <div className="form-group col-6">
                        <select name="sort" id="sort" className='form-control'>
                            <option value="Date">Date</option>
                        </select>
                    </div>
                    <div className="form-group col-6">
                        <select name="sort" id="sort" className='form-control'>
                            <option value="City">City</option>
                        </select>
                    </div>
                </div>
                <div className="d-flex col-lg-5 col-sm-12 mt-3">
                    <span className='m-3'>Date: &nbsp;&nbsp;&nbsp;</span>
                    <input type="date" disabled className="form-control m-2" />
                    <input type="date" disabled className="form-control m-2" />
                </div>
            </div>
            <div className=" col-lg-2 col-sm-2 mt-2">
                <div className="d-flex form-group ">
                <span className='m-3'>Sort by </span>
                    <select className='form-control'>
                        <option value="Date">Date</option>
                    </select>
                </div>
            </div>
        </div>

        {/* Users Table  */}
        <div className="container bg-white table-responsive p-2 mt-4 pb-2">
            
            <table className="table table-hover mt-3">
                <thead>
                    <tr className='text-secondary'>
                        <th scope="col" className='text-secondary'>Name</th>
                        <th scope="col" className='text-secondary'>E-mail</th>
                        <th scope="col" className='text-secondary'>Address</th>
                        <th scope="col" className='text-secondary'>Phone number</th>
                        <th scope="col" className='text-secondary'>Date of operation</th>
                        {/* <th>Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Alex Ekwueme</td>
                        <td>AlexEkwueme.900108@gmail.com</td>
                        <td>21 Alex Ekwueme Way, Jabi 900108, Abuja</td>
                        <td>898 432 44 44</td>
                        <td>22 Jul 2022</td>
                        <td>
                            <div className="row align-items-center justify-content-center">
                                <button href="#" className="btn btn-white col-4 text-center d-flex align-items-center justify-content-center">
                                    <Image src={'/img/button-icon-eye.png'} width={"24"} height={'24'} alt='' />
                                </button>                            
                                <button href="#" className="btn btn-white col-4 text-center d-flex align-items-center justify-content-center" onClick={handleEdit}>
                                    <Image src={'/img/button-icon-edit.png'} width={"24"} height={'24'} alt='' />
                                </button>                            
                                <button href="#" className="btn btn-white col-4 text-center d-flex align-items-center justify-content-center">
                                    <Image src={'/img/button-icon-block.png'} width={"24"} height={'24'} alt='' />
                                </button>                            
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Alex Ekwueme</td>
                        <td>AlexEkwueme.900108@gmail.com</td>
                        <td>21 Alex Ekwueme Way, Jabi 900108, Abuja</td>
                        <td>898 432 44 44</td>
                        <td>22 Jul 2022</td>
                        <td>
                            <div className="row align-items-center justify-content-center">
                                <button href="#" className="btn btn-white col-4 text-center d-flex align-items-center justify-content-center">
                                    <Image src={'/img/button-icon-eye.png'} width={"24"} height={'24'} alt='' />
                                </button>                            
                                <button href="#" className="btn btn-white col-4 text-center d-flex align-items-center justify-content-center" onClick={handleEdit}>
                                    <Image src={'/img/button-icon-edit.png'} width={"24"} height={'24'} alt='' />
                                </button>                            
                                <button href="#" className="btn btn-white col-4 text-center d-flex align-items-center justify-content-center">
                                    <Image src={'/img/button-icon-block.png'} width={"24"} height={'24'} alt='' />
                                </button>                            
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Alex Ekwueme</td>
                        <td>AlexEkwueme.900108@gmail.com</td>
                        <td>21 Alex Ekwueme Way, Jabi 900108, Abuja</td>
                        <td>898 432 44 44</td>
                        <td>22 Jul 2022</td>
                        <td>
                            <div className="row align-items-center justify-content-center">
                                <button href="#" className="btn btn-white col-4 text-center d-flex align-items-center justify-content-center">
                                    <Image src={'/img/button-icon-eye.png'} width={"24"} height={'24'} alt='' />
                                </button>                            
                                <button href="#" className="btn btn-white col-4 text-center d-flex align-items-center justify-content-center" onClick={handleEdit}>
                                    <Image src={'/img/button-icon-edit.png'} width={"24"} height={'24'} alt='' />
                                </button>                            
                                <button href="#" className="btn btn-white col-4 text-center d-flex align-items-center justify-content-center">
                                    <Image src={'/img/button-icon-block.png'} width={"24"} height={'24'} alt='' />
                                </button>                            
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Alex Ekwueme</td>
                        <td>AlexEkwueme.900108@gmail.com</td>
                        <td>21 Alex Ekwueme Way, Jabi 900108, Abuja</td>
                        <td>898 432 44 44</td>
                        <td>22 Jul 2022</td>
                        <td>
                            <div className="row align-items-center justify-content-center">
                                <button href="#" className="btn btn-white col-4 text-center d-flex align-items-center justify-content-center">
                                    <Image src={'/img/button-icon-eye.png'} width={"24"} height={'24'} alt='' />
                                </button>                            
                                <button href="#" className="btn btn-white col-4 text-center d-flex align-items-center justify-content-center" onClick={handleEdit}>
                                    <Image src={'/img/button-icon-edit.png'} width={"24"} height={'24'} alt='' />
                                </button>                            
                                <button href="#" className="btn btn-white col-4 text-center d-flex align-items-center justify-content-center">
                                    <Image src={'/img/button-icon-block.png'} width={"24"} height={'24'} alt='' />
                                </button>                            
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Alex Ekwueme</td>
                        <td>AlexEkwueme.900108@gmail.com</td>
                        <td>21 Alex Ekwueme Way, Jabi 900108, Abuja</td>
                        <td>898 432 44 44</td>
                        <td>22 Jul 2022</td>
                        <td>
                            <div className="row align-items-center justify-content-center">
                                <button href="#" className="btn btn-white col-4 text-center d-flex align-items-center justify-content-center">
                                    <Image src={'/img/button-icon-eye.png'} width={"24"} height={'24'} alt='' />
                                </button>                            
                                <button href="#" className="btn btn-white col-4 text-center d-flex align-items-center justify-content-center" onClick={handleEdit}>
                                    <Image src={'/img/button-icon-edit.png'} width={"24"} height={'24'} alt='' />
                                </button>                            
                                <button href="#" className="btn btn-white col-4 text-center d-flex align-items-center justify-content-center">
                                    <Image src={'/img/button-icon-block.png'} width={"24"} height={'24'} alt='' />
                                </button>                            
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Alex Ekwueme</td>
                        <td>AlexEkwueme.900108@gmail.com</td>
                        <td>21 Alex Ekwueme Way, Jabi 900108, Abuja</td>
                        <td>898 432 44 44</td>
                        <td>22 Jul 2022</td>
                        <td>
                            <div className="row align-items-center justify-content-center">
                                <button href="#" className="btn btn-white col-lg-4 col-sm-4 text-center d-flex align-items-center justify-content-center">
                                    <Image src={'/img/button-icon-eye.png'} width={"24"} height={'24'} alt='' />
                                </button>                            
                                <button href="#" className="btn btn-white col-lg-4 col-sm-4 text-center d-flex align-items-center justify-content-center" onClick={handleEdit}>
                                    <Image src={'/img/button-icon-edit.png'} width={"24"} height={'24'} alt='' />
                                </button>                            
                                <button href="#" className="btn btn-white col-lg-4 col-sm-4 text-center d-flex align-items-center justify-content-center">
                                    <Image src={'/img/button-icon-block.png'} width={"24"} height={'24'} alt='' />
                                </button>                            
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            
        </div>
        {/* Pagination */}
        <div className="row pb-5">
            <div className="col-lg-6 col-sm-12"></div>
            <div className="col-lg-6 col-sm-12 align-items-center justify-content-center">
                <div className="pagination">
                    <a href="#">&laquo;</a>
                    <a href="#">1</a>
                    <a href="#" className="active">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                    <a href="#">&raquo;</a>
                </div>
            </div>
        </div>

        {/* Modal */}
        <div id="myModal" className={styles.modal}>
            <span className={styles.close} onClick={closeModal}>&times;</span>
            <div className={styles.modalContent}>
                <div className="modal-header">
                    <h4 className="text-dark text-center">Edit Customers</h4>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="form-group col-6">
                            <label htmlFor="fname">First name</label>
                            <input type="text" value={"Alex"} className="form-control" />
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="lname">Last name</label>
                            <input type="text" value={"Ekwueme"} className="form-control" />
                        </div>
                    </div>
                    
                    <div className="form-group mt-3">
                        <label htmlFor="lname">Address</label>
                        <input type="text" value={"21 Alex Ekwueme Way, Jabi 900108, Abuja"} className="form-control" />
                    </div>
                    
                    <div className="form-group mt-3">
                        <label htmlFor="lname">Phone Number</label>
                        <input type="text" value={"898 432 44 44"} className="form-control" />
                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="lname">E-mail</label>
                        <input type="text" value={"AlexEkwueme.900108@gmail.com"} className="form-control" />
                    </div>

                    <button className="btn btn-success d-block mx-auto mt-35">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Table















