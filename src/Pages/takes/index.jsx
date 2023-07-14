import HeaderHome from "../../Components/HeaderHome"; 
// import './style.css';
import {v4 as uuidv4} from 'uuid';
import FooterNavBar from "../../Components/FooterNavbar"; 
import { useState } from 'react';


const inicialValues = {

    id:'',
    titule:'',
    description:'',
    day:'',
    time:''
}
const myid = uuidv4();

const Home = ()=>{

    const { state, setState } = useState(inicialValues);


        return <>
                <HeaderHome />
                <div className="home bg-dark d-flex flex-column align-items-center pt-3">
                        <form action="" onSubmit={handleDate} className="row w-75">
                            <div className="col-12">
                                <label htmlFor="">Title</label>
                                <input type="text" className="fs-1 bg-secondary" />
                            </div>
                            <div className="col-12 d-flex flex-column">
                                <label htmlFor="">Description</label>
                                <input type="textarea" className="fs-1 bg-secondary" />
                            </div>
                            <div className="col-12 d-flex flex-column">
                                <label htmlFor="">Day</label>
                                <input type="date" className="fs-1 bg-secondary" />
                            </div>
                            <div className="col-12 d-flex flex-column">
                                <label htmlFor="">Time</label>
                                <input type="time" className="fs-1 bg-secondary" />
                            </div>
                            <div className=" mt-2 mx-auto">
                                <button className="btn btn-primary col-12">Add</button>
                            </div>
                        </form>
                </div>
                        <FooterNavBar/>
                </>
        
    
}
export default Home;