import { Link } from 'react-router-dom';

const ParentLogin = () => {
    return ( 
                <div className="parent_login">
                    <div className="row head_div">
                        <div className="mx-0 px-0 mt-3"> <h3 className="display-5 text-dark text-center admin_login_head">Parent
                        LogIn Form</h3></div>
                        </div>

                        <div className="admin_box">
                            <h4 className="display-7 pt-5">Parent</h4>
                            <br/>
                            <form action="" className="admin_login_form">
                                
                                <input type="email" name="username" className="pl-2 input_forms" placeholder="E-mail..."/>
                                
                                <br/><br/>
                                
                                <input type="password" className="mt-4 pl-2 input_forms" placeholder="Password..."/>


                                <br/>
                                <Link  to="/dashboard"><input type="submit" value="LogIn" className="mt-4 p-2 px-3 submit_button text-primary"/></Link>
                            </form>
                                <br/>
                            <div className="row">
                                <div className="col-sm-1">
                                    
                                </div>

                                <div className="col-sm-6 text-left option_buttons">
                                    <Link to="#" className="btn button-link text-left text-primary p-3 px-4">
                                        Forgotten Password?
                                    </Link>
                                </div>

                    <div className="col-sm-4 text-left option_buttons">
                        <Link to="/register" className="btn button-link text-left text-primary p-3 px-4">
                            Sign Up
                        </Link>
                    </div>

            </div>
                <br/><br/>

                <div><Link to="/" className="back_icon"><i className="far fa-arrow-alt-circle-left delete"></i> Back</Link></div>
            </div>
        </div>
     );
}
 
export default ParentLogin;