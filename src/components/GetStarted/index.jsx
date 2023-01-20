import { arrowUp } from '../../assets'
import styles from "../../styles"

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-2 cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] rounded-full h-[100%]`}>
            <div className={`${styles.flexCenter} flex-row`}>
                <p className='font-poppins font-medium text-[18px] leading-[25px]'>
                    <span className='text-gradient'> Get </span>
                </p>
                <img src={arrowUp} alt="arrow-up" className='w-[23px] h-[23px] ' />
            </div>

            <p className='font-poppins font-medium text-[18px] leading-[25px]'>
                <span className='text-gradient'> Started </span>
              </p>
        </div>
    </div>
  )
}

export default GetStarted