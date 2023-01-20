import { feedback } from "../../constants"
import FeedbackCard from "../FeedbackCard"
import styles from "../../styles"

const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.paddingX} ${styles.flexCenter} flex-col relative`}>
       <div className="absolute z-[0] -right-[50%] w-[60%] h-[60%] rounded-full blue__gradient" />

       <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <h1 className={styles.heading2}> What people are <br className="sm:block hidden" /> saying about us </h1>
          <div className="w-full md:mt-0 mt-6">
            <p className={`text-left max-w-[470px] ${styles.paragraph}`}> Everything you need to accept card payments and grow your business anywhere on the planet. </p>
          </div>
       </div>

       <div className="flex md:flex-nowrap flex-wrap flex-row sm:justify-start justify-center w-full feedback-container relative z-[1]">
           { feedback.map(feed => (
               <FeedbackCard key={feed.id} {...feed} />
           )) }
       </div>
    </section>
  )
}

export default Testimonials