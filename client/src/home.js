import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div className="home">
             
             <div className="contain">
        <div className="row">

            <div className="col-sm-2 ml-0 left-head"></div>
            <div className="col-sm-1"></div>

            <div className="col-sm-6 bg-success center-head">

                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8"> <h3 className=" display-5 text-dark text-center mx-0 px-0 mt-5 answer">
                            Answer Educator</h3></div>
                        <div className="col-sm-2"></div>
                </div>
            </div>

            <div className="col-sm-1"></div>

            <div className="col-sm-2 ml-0 right-head"></div>
       </div>
    </div>



    <div className="container">
        <div className="row mt-5">

            <div className="col-sm-4 text-center buttons">
                <Link to="/parent_login" className="btn button-link text-center text-primary border border-dark p-3 px-4">
                    Login As Parent
                </Link>
            </div>

            <div className="col-sm-4 text-center buttons">
                <Link to="/admin_login" className="btn button-link text-center text-primary border border-dark p-3 px-4">
                    Login As Admin
                </Link>
            </div>

            <div className="col-sm-4 text-center buttons">
                <Link to="/tutor_login" className="btn button-link text-center text-primary border border-dark p-3 px-4">
                    Login As Tutor
                </Link>
            </div>
        </div>
    </div>


    <div className="opac"></div>
        </div>
     );
}
 
export default Home;