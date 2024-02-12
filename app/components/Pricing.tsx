import { Button } from "@/components/ui/button"


const list = [
  {
    header: "Basic",
    header2: "$40/month",
    header3: "3.7% + 30¢ per transaction",
    header4: "Start selling online with a simple and easy to use platform. Create your first store in minutes..",
    button: "Get Started"
  },
  {
    header: "Standard",
    header2: "$80/month",
    header3: "2.9% + 30¢ per transaction",
    header4: "Level up your business with a powerful eCommerce platform. Get access to all the features you need to grow.",
    button: "Get Started"
  },
  {
    header: "Premium",
    header2: "$200/month",
    header3: "2.4% + 30¢ per transaction",
    header4: "For businesses that need more. Get access to all the features you need to grow.",
    button: "Get Started"
  }
]
const Pricing = () => {
  return (
    <div className='container pb-10'>
      <div className=' '>
        <h2 className='text-center bg-gradient-to-r from-black to-gray-500 text-transparent bg-clip-text text-4xl md:text-6xl font-bold pb-4'>Pricing</h2>
        <h3 className='text-center bg-gradient-to-r from-black to-gray-500 text-transparent bg-clip-text lg:text-4xl font-semibold text-sm'>Simple and transparent pricing.</h3>
        <div className='pt-8 flex flex-col lg:flex-row gap-x-4 gap-y-4 pb-4' >
            {
              list.map((item,index)=> (
                <div key={index} className="flex flex-col gap-y-4 border p-4 rounded-xl  w-full lg:w-1/3 bg-gray-400/30">
                  <h2 className="text-3xl font-semibold lg:text-3xl text-center leading-10 ">{item.header}</h2>
                  <h3 className="text-[20px] lg:text-lg md:text-center font-medium">{item.header2}</h3>
                  <h4 className="text-[20px] lg:text-lg md:text-center font-medium">{item.header3}</h4>
                  <h5 className="text-[20px] lg:text-lg md:text-center  row-span-2 flex items-center justify-start">{item.header4}</h5>
                  <div className="pt-2 w-full">
                  <Button className="bg-blue-500 hover:bg-blue-600 w-full ">{item.button}</Button>
                  </div>
                </div>
              ))
            }
        </div>
        <div className="flex justify-center w-full mt-16 ">
        <div className="border p-8 flex flex-col gap-y-4 rounded-lg  items-center w-full lg:w-[80%] bg-gray-400/30 ">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Start building with Bird today.</h2>
            <p className="text- text-center">Curious about how Bird can help your business? Let{"'"}s talk.</p>
            <Button className="bg-blue-500 hover:bg-blue-600 w-1/2 sm:w-1/4">Contact Sales</Button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing