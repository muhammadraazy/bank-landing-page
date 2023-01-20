import { stats } from "../../constants"
import styles from "../../styles"

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        {stats.map(stat => (
          <div key={stat.id} className='flex flex-1 justify-center items-center flex-row mt-[35px]'>
              <h4 className="font-poppins font-semibold xs-[40px] text-[30px] text-white xs:leading-[43px] leading-[53px]"> {stat.value} </h4>
              <p className="font-poppins font-normal xs-[25px] text-[15px] text-white xs:leading-[26px] leading-[21px] uppercase ml-3 text-gradient"> {stat.title} </p>
          </div>
        ))}
    </section>
  )
}

export default Stats