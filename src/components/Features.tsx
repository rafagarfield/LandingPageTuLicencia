import Image from "next/image";
import "./styles/featuresStyles.css"
import Steps from "./Steps";
import StepsMobile from "./StepsMobile";
const Features = () => {
  return (
    <div className="relative flex justify-center items-center w-full lg:h-[1000px] h-[520px] bg-[url('/icon/purple.svg')] bg-cover bg-custom-position-mobile md:bg-custom-position-lg lg:bg-custom-position-lg  bg-no-repeat waveContainer waveContainerMobile mb-16 lg:bg-siz">
      <Image
        src="/icon/carIcon.svg"
        alt="Purple Background"
        width={150}
        height={150}
        className="carIcon carIconFirst carIconSecond carIconThird carIconFourth carIconFifth carIconSixth  "
      />
      
      <StepsMobile />
      <Steps />
    </div>
  );
};

export default Features;
