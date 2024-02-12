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
                <div className=' lg:w-[1400px] w-full'>
                    <video loop autoPlay muted className='rounded-xl'>
                        <source src="./content/video-3.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='border rounded-lg '>
                    <h1 className=' text-center bg-gradient-to-r from-yellow-300 to-blue-300 text-4xl md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-transparent bg-clip-text pt-4'>Fully customizable eCommerce.</h1>
                    {
                        text.map((item, index) => (
                            <div key={index} className="px-4 flex container my-5 gap-x-6 justify-center">
                                <Image src={item.image} alt="img" width={80} height={80} className="w-[90px] h-[90px] lg:w-[70px] lg:h-[70px] xl:w-[80px] xl:h-[80px]" />
                                <p className="text-lg lg:text-sm  xl:text-lg w-[53%]">{item.description}</p>
                            </div>


                        ))
                    }

                </div>
            </div>
            <div className="container pt-16">
                <h2 className="bg-gradient-to-r from-blue-800 to-purple-300 text-transparent bg-clip-text pb-10 lg:pb-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">Content Management System. Made Simple.</h2>
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