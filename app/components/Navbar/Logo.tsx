import Logoe from "@/public/images/logo/logo.svg"
import Image from "next/image"

const Logo = () => {
  return (
    <div>
        <Image src={Logoe} alt="logo" width={100} height={100}/>
    </div>
  )
}

export default Logo