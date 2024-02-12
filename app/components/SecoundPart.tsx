import Image from "next/image"

const features = [
    {
        name: "Customizable",
        description:
          "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
        image: "/images/icon-cloud.png",
        alt: "Customizable",
        color: "blue"
      },
      {
        name: "Fast ",
        description:
          "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
        image: "/images/icon-fast.png",
        alt: "Customizable",
      },
      {
        name: "Integrations",
        description:
          "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
        image: "/images/icon-journey.png",
        alt: "Customizable",
      },
      {
        name: "Full Stack",
        description:
          "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
        image: "/images/icon-layer.png",
        alt: "Customizable",
      },
      {
        name: "Loyalty",
        description:
          "Set up your loyalty program and start rewarding your customers for their purchases and actions they take on your site.",
        image: "/images/icon-location.png",
        alt: "Customizable",
      },
      {
        name: "Support",
        image: "/images/icon-support-1.png",
        description: "Get 24/7 support from our team to help you with any issues you have.",
        alt: "Customizable",
      },
    ]

const SecoundPart = () => {
  return (
    <div className="pt-6 px-8 md:px-20 xl:px-30 2xl:px-48">
        <h2 className="pb-10 text-center bg-gradient-to-r font-bold from-purple-400 to-blue-800 bg-clip-text text-transparent text-4xl md:text-6xl">Product Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto  gap-4 ">
            
                {features.map((item,index)=>(
                    <div key={index} className="border rounded-lg hover:scale-105 duration-500 ease-out p-4  bg-gray-400/30">
                        <div className="flex items-center justify-center pb-4">
                        <Image  src={item.image} alt={item.alt} width={80} height={80}  />
                        </div>
                        <h2 className="text-2xl bg-gradient-to-r from-black to-gray-100 bg-clip-text text-transparent font-bold pb-4 text-center">{item.name}</h2>
                        <p className="bg-gradient-to-r from-gray-800 to-gray-600 text-transparent bg-clip-text text-lg font-bold text-center">{item.description}</p>
                    </div>
                ))}
            

        </div>
    </div>
  )
}

export default SecoundPart