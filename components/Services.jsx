import React from 'react';
import styles from '../styles/Services.module.css';
import Link from 'next/link';
import Image from 'next/image';


const Services = ({services}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What We Can Do?</h1>
      <h1 className={styles.subtitle}>Services we can help you with </h1>
      <div className={styles.services}>
        {services.map((service) => {
            
          return (
                

            <Link passHref key={service.id} href={`/products/${service.name}`}>
            <div className={styles.service}>
                <div className={styles.catInfo}>{service.desc}</div>
                <span className={styles.cat}>{service.title}</span>
                <div className={styles.media}>
                      {service.vedio ?(

                        
                    <video src={service.vedio} autoPlay loop className={ styles.vedio}/>

                  ) : (
                      
                      <Image
                        src={`/img/${service.photo}`}
                        width='100%'
                        height='100%'
                        objectFit='cover'
                        layout='responsive'
                        alt=''
                      />
                      
                      
                      )}

                </div>
           </div>
          </Link>
            
         )})}
      </div>
    </div>
  )
}

export default Services
