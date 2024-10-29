import styles from "../../styles/Doniyor.module.css"

const Doniyor = () => {
  return (
    <>
    <h1 className="text-center text-4xl p-8" >We Publish Blogs Every Week</h1>
    <h1 className="text-center text-gray-500 " >We understand how desperatly you want to grow in the business world & our motto <br /> is to help you with practicale idea and plan </h1>
    


    <div className="flex justify-center gap-[200px] w-[100%] h-[500px] mt-[100px]">
        <div className="w-[20%] h-[90%] bg-slate-500">
            <div className="h-[50%]">
                <img src="dcard1.jpg" alt="" />
                <h1 className="w-3 h-3 bg-green-900 text-white" >22<br />Dec</h1>
            </div>
            <div className="">
                <h1 className="text-2xl p-5">Upgrowing Economy Needs More  Startups</h1>
                <h1 className="text-gray-500">We understand how desperatly you want to grow in the <br /> business world & our motto is to help you with practicale idea <br /> and plan </h1>
                <button className="bg-orange-600 p-3 rounded-3xl pl-7 pr-7">Learn More</button>
            </div>
        </div>
        <div className="w-[20%] h-[90%] bg-slate-500">
            <div className="h-[50%]">
                <img  src="dcard2.jpg" alt="" />
                <h1 className="w-3 h-3 bg-green-900 text-white" >16<br />Dec</h1>
            </div>
            <div className="">
                <h1 className="text-2xl p-5">Team Has Some Unique Feature - What Yours?</h1>
                <h1 className="text-gray-500">We understand how desperatly you want to grow in the <br /> business world & our motto is to help you with practicale idea <br /> and plan </h1>
                <button className="bg-orange-600 p-3 rounded-3xl pl-7 pr-7">Learn More</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Doniyor