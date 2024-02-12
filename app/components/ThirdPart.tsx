import Image from "next/image"


const text = [
    {
        description: "Choose from a variety of store templates to get started. And customize your store to fit your brand.",
        image: "/images/icon-store.png"
    },
    {
        description: "Track your products and orders with our powerful inventory management system.",
        image: "/images/icon-product.png"
    },
    {
        description: "Gain valuable insights into your customers and products with our analytics tools.",
        image: "/images/icon-analytics.png"
    },
    {
        description: "Best in class security to protect your data and your customers.",
        image: "/images/icon-shield.png"
    }
]
const ThirdPart = () => {
    return (
        <div>

            <div className=' pt-8 flex flex-col lg:flex-row gap-y-4 px-2 md:px-20 gap-x-6 pb-4'>
                <div className=' lg:w-[1400px] w-full p-4 md:p-0'>
                    <video loop autoPlay muted className='rounded-xl'>
                        <source src="./content/video-3.mp4" type="video/mp4" />
                    </video>
                </div>
                    <h1 className=' text-center bg-gradient-to-r from-yellow-300 to-blue-300 text-4xl md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-transparent bg-clip-text pt-4 lg:hidden'>Fully customizable  <span> E-Commerce.</span></h1>
                <div className='border rounded-lg mx-4 bg-gray-400/30 lg:bg-white'>
                    <h1 className=' text-center bg-gradient-to-r from-yellow-300 to-blue-300 text-4xl md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-transparent bg-clip-text pt-4 hidden lg:block'>Fully customizable  <span> E-Commerce.</span></h1>
                    {
                        text.map((item, index) => (
                            <div key={index} className="px-4 flex container my-5 gap-x-6 justify-center">
                                <Image src={item.image} alt="img" width={80} height={80} className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] xl:w-[80px] xl:h-[80px]" />
                                <p className="text-sm xl:text-lg w-[53%] font-medium">{item.description}</p>
                            </div>


                        ))
                    }

                </div>
            </div>
            <div className="container pt-4">
                <h2 className="bg-gradient-to-r from-blue-800 to-purple-300 text-transparent bg-clip-text pb-7 lg:pb-20 text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">Content Management System. Made Simple.</h2>
                <div className=" pb-5">
                    <video loop autoPlay muted className="rounded-xl ">
                        <source src="/content/video-4.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default ThirdPart