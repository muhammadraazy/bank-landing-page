import styles from "../../styles"
import { logo } from "../../assets"
import { footerLinks, socialMedia } from "../../constants"

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className="flex flex-1 flex-col mr-10 justify-start">
               <img src={logo} alt="bank-logo" className='w-[266px] h-[72px] object-contain ' />
               <p className={`${styles.paragraph} mt-4 max-w-[310px]`}> A new way to make the payments easy, reliable and secure. </p>
            </div>

            <div className="flex flex-[1.5] flex-row flex-wrap w-full justify-between md:mt-0 mt-10">
                { footerLinks.map((footerLink, index) => (
                  <div key={index} 
                      className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                      <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white"> {footerLink.title} </h4>
                      <ul className="list-none mt-4">
                         { footerLink.links.map(link => (
                            <li key={link.name} className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer"> { link.name } </li>
                         )) }
                      </ul>
                  </div>
                )) }
            </div>
        </div>

        <div className="flex justify-between w-full sm:flex-row flex-col items-center pt-6 border-t-[1px] border-t-[#3f3e45]">
           <p className="font-poppins font-normal text-[18px] leading-[27px] text-white "> 2023 HooBank. All Right Reserved 
           </p>

           <div className="flex flex-row md:mt-0 mt-6 gap-[20px]">
              { socialMedia.map(social => (
                <img key={social.id} src={social.icon} alt="social-media" className="w-[21px] h-[21px] object-contain cursor-pointer" />
              )) }
           </div>
        </div>
    </section>
  )
}

export default Footer