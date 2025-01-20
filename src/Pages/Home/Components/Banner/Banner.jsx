import React from 'react'
import styles from './Banner.module.css'
import bannerImg from '../../../../assets/banner.svg'

export const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
    {/* <img src={bannerImg} alt="" className={styles.bannerImg}/> */}
    <div className={styles.dataBox}>
        <span className={styles.bannerTitle}>Belong Where Technology Innovators Thrive</span>
        <span className={styles.subTitle}>Become part of the community of computing leaders driving the future of technology.</span>
    </div>
    </div>
  )
}
