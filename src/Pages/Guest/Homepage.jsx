import Slider from "../../Slider"
import Insights from "../../Insights"
import AboutSection from "../../AboutSection"

const Homepage = () => {
    return(
        <div className=" bg-white">
        

        {/*Slider*/}
         <Slider /> 

         {/*Insights*/}
         <Insights/>

        {/*AboutSection*/}
         <AboutSection  />

         {/* your other sections */}
      

         

      </div>
    )
}



export default Homepage;