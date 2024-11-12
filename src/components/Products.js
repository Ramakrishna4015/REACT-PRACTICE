import { Fragment } from "react";
// import React {Fragment} from "react";



export default function Product(){
    return(
        // <div>
        //     <h3>product 1</h3>
        //     <p>product description</p>
        // </div>

        //to avoid using div we can use fragments as below 
        /*  <React.Fragment>
        //         <h3>product 1</h3>
        //         <p>product description</p>
          </React.Fragment>*/
           
          //another way
           /*<Fragment>
                 <h3>product 1</h3>
                 <p>product description</p>
                </Fragment>
                */

                ///amother way

            <>
                <h3 id="header" className="Product-Header ">product 1</h3>
                <p>product description</p>
            </>
            
    )
}