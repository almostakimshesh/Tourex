import Hero from "./Hero"
import Brand from "./Brand"
import Destination from "./Destination"
import Listing from "./Listing"
import Process from "./Process"

import Testimonial from "./Testimonial"
import Cta from "./Cta"
import HeaderFour from "../../../layouts/headers/HeaderFour"
import BannerFormFour from "../../common/banner-form/BannerFormFour"
import FooterThree from "../../../layouts/footers/FooterThree"

const HomeFour = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Hero />
        <BannerFormFour />
        <Brand />
        <Destination />
        <Cta />
        <Listing />
        <Process />
        <Testimonial style={false} />
      </main>
      <FooterThree />
    </>
  )
}

export default HomeFour
