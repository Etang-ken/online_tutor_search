const AddSubject = () => {
    return ( 
        <div className="add_subject">
            <div className="my-5 search">
                <input className="ms-5" type="text" placeholder="Search Subject..."/>
                <button className="border border-0 py-2 px-3 bg-secondary text-white search-icon"><i className="fa fa-search" aria-hiden="true"></i></button>
                <button className="border border-0 py-2 px-3 bg-secondary text-white search-icon float-end me-5">Add</button>

            </div>
            

            <section>
                <div className="tutor_d">
                    <table className="mt-5">
                        <tr className="heads">
                            <th className="py-3">Subject</th>
                            <th className="py-3">Budget</th>
                            <th className="py-3">Date - Time</th>
                        
                        </tr>

                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            
                        </tr>

                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            
                        </tr>

                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            
                        </tr>
                    </table>
                </div>
            </section>

          </div>
     );
}
 
export default AddSubject;