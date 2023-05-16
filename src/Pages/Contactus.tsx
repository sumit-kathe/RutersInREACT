import { Link } from "react-router-dom";

const Contactus =()=>{


    return(

        <>
        <h1> this is my contact us page</h1>
        
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi dolore similique magni, quaerat fuga architecto et, corporis dolorum nihil molestiae laborum, maiores eum totam delectus.</p>
        <button>ONE </button>
        <button>TWo </button>
        <button>THREE </button>
        <button>FOUr </button>

        <br/>
        <br/>

        <Link to ='/about' >GO to ABOUT</Link>

        <br></br>
            <Link to ='/contact' >GO to Contasct</Link>
        </>
    )
}

export default  Contactus ;