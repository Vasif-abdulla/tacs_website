import React from 'react'
import styles from './CardView.module.css'
import { Card } from './Components/Card/Card'
import { faEarthAmericas,faAward,faCalendarCheck, faChalkboardTeacher, faCalendarDays, faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';

export const CardView = () => {

  const CardItems = [
    {
        icon:faLaptopCode,
        title:" DevTacs",
        desc:"DevTACS is a student developer community under TACS at MEA Engineering College, offering workshops, hackathons, and projects to help students innovate, grow, and excel in technology."
    },
    {
        icon:faCalendarDays,
        title:"Events",
        desc:"TACS organizes a variety of events, including technical workshops, seminars, coding competitions, and cultural activities, fostering both technical and non-technical growth."
    },
    {
        icon:faChalkboardTeacher,
        title:"Mentoring Support",
        desc:"TACS provides robust mentoring support through a dedicated team of experienced faculty and senior students. This guidance helps members excel in academic & technical skills."
    },
    {
        icon:faAward,
        title:"Funds & Awards",
        desc:"The association also provides funding opportunities for innovative projects and recognizes achievements through awards, ensuring students are motivated and supported in their endeavors."
    },

]

  return (
    <div className={styles.container}>
        {
            CardItems?.map((item,index)=>(
                <Card icon={item?.icon} title={item?.title} desc={item?.desc}  key={index}/>
            ))
        }
    </div>
  )
}
