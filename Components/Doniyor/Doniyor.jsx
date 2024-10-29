import styles from "../../styles/Doniyor.module.css"

const Doniyor = () => {
  return (
    <>
    <div className="mt-[100px]">
    <h1 className="text-center text-4xl p-8" >We Publish Blogs Every Week</h1>d
    <h1 className="text-center text-gray-500 " >We understand how desperatly you want to grow in the business world & our motto <br /> is to help you with practicale idea and plan </h1>
    


    <div className="flex justify-center gap-[200px] w-[100%] h-[500px] mt-[100px]">
        <div className="w-[30%] h-[90%]">
            <div className="h-[50%]">
            <h1 className="w-8 h-12  bg-green-900 text-white rounded-lg ml-[89%]" >22 Dec</h1>
                <img className="w-[400px] absolute" src="dcard1.jpg" alt="" />
            </div>
            <div className="">
                <h1 className="text-2xl p-5 mt-12">Upgrowing Economy Needs More  Startups</h1>
                <h1 className="text-gray-500">We understand how desperatly you want to grow in the <br /> business world & our motto is to help you with practicale idea <br /> and plan </h1>
                <button className="bg-orange-600 p-3 rounded-3xl pl-7 pr-7 m-5">Learn More</button>
            </div>
        </div>
        <div className="w-[30%] h-[90%]">
            <div className="h-[50%]">
            <h1 className="w-8 h-12 bg-green-900 text-white rounded-lg ml-[89%]" >16 Dec</h1>
                <img  className="w-[400px] absolute" src="dcard2.jpg" alt="" />
            </div>
            <div className="">
                <h1 className="text-2xl p-5 mt-12">Team Has Some Unique Feature - What Yours?</h1>
                <h1 className="text-gray-500">We understand how desperatly you want to grow in the <br /> business world & our motto is to help you with practicale idea <br /> and plan </h1>
                <button className="bg-orange-600 p-3 rounded-3xl pl-7 pr-7 m-5">Learn More</button>
            </div>
        </div>
    </div>


        

    </div>

    </>
  )
}

export default Doniyor