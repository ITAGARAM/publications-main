
// import Logo from '../../public/assets/images/loglab_Eln.svg';
import Logo from '../public/assets/images/loglab_Eln.svg';
import Image from "next/image";
export default function Summary(){
    return(

    <div>   
        
    <div id="last-container">
    <div className='py-4 solution_reg_bgcolor forthcontent_before forthcontent_after' >
      <h3 className="text-center fw-bold pt-4 sizechange">Ensure all checks and balances are in place</h3>
        <div className="job-button text-md Registor text-center mt-4">
          <a href="" className="solution_reg solutionregister_btn ">Register</a>
        </div> 
    </div>
    </div>
        
    <div className="Devepoe_space">
                  <div className="">
                    <div className='container tab2  py-5'>
                      <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                          <div className=" text-center">
                              {/* <img src="../assets/images/loglab_Eln.svg" className="img-fluid  elnimage_size" alt=""/> */}
                              <Image src={Logo} className="img-fluid  elnimage_size" alt=""/>
                              <h5 className="mt-2 logicsize">Ensure all checks and balances are in place</h5>
                              <div className="d-flex justify-content-center align-items-center mt-4"> 
                                  <a href="" className="btn btn--blue mx-3">Compare Plans</a>                                         
                                </div>
                               </div>
                        </div>
                          <div className="col-lg-6">                    
                            <img src="../assets/images/loginewimage.svg" className="img-fluid logiclab w-75 loglab_position" alt=""/>
                          </div>
                      </div>                     
                    </div>
                  </div>
              </div>
    </div>         
    );
}