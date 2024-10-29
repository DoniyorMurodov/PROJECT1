

const Footer = () => {
  return (
    <>
    <div className="bg-cyan-500 mt-[100px]">
        <h1 className="text-center text-4xl p-10">Subscribe To Our Newsletter <br />
Get The Best Offers</h1>
<div className="flex justify-center items-center gap-[50px]">
    <h1 className="text-orange-600">With One Click</h1>
    <button className="bg-orange-600 p-3 rounded-3xl pl-7 pr-7 m-5">Subscribe</button>
</div>



<div className="flex justify-center items-center mt-[30px]">
    <img className="mr-[100px] w-[200px]" src="amid-removebg-preview.png" alt="" />
    <div className=" gap-[50px]">
        <a className="p-8" href="">About</a>
        <a className="p-8" href="">Terms</a>
        <a className="p-8" href="">Blogs</a>
        <a className="p-8" href="">Contact</a>
    </div>
     <div className=" ml-[100px]">
        <h1>+998 1276 234</h1>
        <h1>82/93 Boeind Street. NY</h1>
        <h1>info@amid.mail.com</h1>
     </div>
</div>



<div className="bg-green-950 flex justify-between p-5">
    <h1>All Rights Reserved @Debzui2020</h1>
    <div className="flex gap-5">
        <img className="w-5" src="twitter.png" alt="" />
        <img className="w-5" src="twitter.png" alt="" />
        <img className="w-5" src="twitter.png" alt="" />
        <img className="w-5" src="twitter.png" alt="" />
        <img className="w-5" src="twitter.png" alt="" />
    </div>
</div>
    </div>
    </>
  )
}

export default Footer