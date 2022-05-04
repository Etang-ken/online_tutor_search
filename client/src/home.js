import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div className="home">
             
             <div class="contain">
        <div class="row">

            <div class="col-sm-2 ml-0 left-head"></div>
            <div class="col-sm-1"></div>

            <div class="col-sm-6 bg-success center-head">

                    <div class="row">
                        <div class="col-sm-2"></div>
                        <div class="col-sm-8"> <h3 class=" display-5 text-dark text-center mx-0 px-0 mt-5 answer">
                            Answer Educator</h3></div>
                        <div class="col-sm-2"></div>
                </div>
            </div>

            <div class="col-sm-1"></div>

            <div class="col-sm-2 ml-0 right-head"></div>
       </div>
    </div>



    <div class="container">
        <div class="row mt-5">

            <div class="col-sm-4 text-center buttons">
                <Link to="/parent_login" className="btn button-link text-center text-primary border border-dark p-3 px-4">
                    Login As Parent
                </Link>
            </div>

            <div class="col-sm-4 text-center buttons">
                <Link to="/admin_login" className="btn button-link text-center text-primary border border-dark p-3 px-4">
                    Login As Admin
                </Link>
            </div>

            <div class="col-sm-4 text-center buttons">
                <Link to="/tutor_login" className="btn button-link text-center text-primary border border-dark p-3 px-4">
                    Login As Tutor
                </Link>
            </div>
        </div>
    </div>


    <div class="opac"></div>
        </div>
     );
}
 
export default Home;