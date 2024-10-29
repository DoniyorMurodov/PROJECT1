import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
      <>

      <nav className='flex justify-center items-center p-[50px] gap-[200px]'>

        <img src="logo.svg" alt="" />

        <ul className='flex justify-around gap-[50px]'>
            <li><a href=""><h1>About Amid</h1></a></li>
            <li><a href=""><h1>Features</h1></a></li>
            <li><a href=""><h1>Portfolio</h1></a></li>
            <li><a href=""><h1>Reviews</h1></a></li>
        </ul>


        <button class={styles.goldenbutton}>
        <span class={styles.goldentext}>Login</span>
        </button>

        
      </nav>









      <div className='flex justify-center'>
        <div className={styles.nan}>

            <div className='flex items-center'>
                <div>

                <button className='w-[100px] rounded-lg h-[30px] text-orange-500 bg-yellow-100'><h1>it works!</h1></button>

                <h1 className='text-6xl pt-[80px]'>Try Our Business<br></br> Ideas to grow<br></br> Rapidly</h1>
                <h1 className='pt-[80px]'>We understand how desperatly you want to grow in<br></br> the business world & our motto is to help you with<br></br> practicale idea and plan </h1>

                <div className='flex justify-center items-center pr-[60px] gap-[30px] pt-[80px]'>

                <button class={styles.goldenbutton1}>
                <span class={styles.goldentext}>Get started</span>
                </button>

                <div className='flex items-center'>
                    <img src="Group 9.svg" alt="" />
                    <h1 className='text-orange-500'>DEMO VIDEO</h1>
                </div>

                </div>

                </div>
            </div>

            <div className='items-end flex'>
                <img src="m1.svg" alt="" />
            </div>

        </div>
      </div>









      
      </>
    )
  }
  
  export default Navbar;