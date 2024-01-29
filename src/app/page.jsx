import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

import img from "./img/img.webp"
import img1 from "./img/2.png"
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.party1}>

        <div className={styles.party1_1}>
          <div className={styles.party1_1_info} >
            <h1 className={styles.party1_1_info_h1}>Remove background for free</h1>
            <p className={styles.party1_1_info_p}>Our AI background remover instantly removes the background of your photos in seconds. Then you can add any new background or leave it transparent!</p>
            <button className={styles.button_85}><i class='bx bx-upload' ></i>   Upload Your Image</button>
          </div>
          <Image src={img} width={600}   className={styles.navbarLogo} alt="Black Logo" />

        </div>

        <div className={styles.party1_2}> 
          <div className={styles.party1_2_info}><i class='bx bx-smile'></i><p>Free and quick to use</p></div>
          <div className={styles.party1_2_info}><i class='bx bx-user' ></i><p>Trusted by 20 million people</p></div>
          
          <Link href="/reviews"><div className={styles.party1_2_info}><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><p>142,800 Reviews</p></div></Link>

        </div>

      </div>

      <div className={styles.party2}>

          
        
         
        <div className={styles.party2_info} >
          <div className={styles.party2_title}>How to remove the background from an image</div>
          <div className={styles.party2_content}>
            <div className={styles.party2_content_option}>

              <div className={styles.party2_content_number}>1</div>
              <div>
                <div className={styles.party2_content_title}>Upload your Image</div>
                <p>Upload a JPG, PNG or HEIC file. Try to choose an image where the subject has clear edges.</p>
              </div>
              
            </div>

            <div className={styles.party2_content_option}>
              
              <div className={styles.party2_content_number}>2</div>
              <div>
                <div className={styles.party2_content_title}>Automatically remove background online</div>
                <p>Pixelcut will automatically remove the background from your image. Once the background is removed, you can refine the cutout if you need to.</p>
              </div>
              
            </div>

            <div className={styles.party2_content_option}>
              
              <div className={styles.party2_content_number}>3</div>
              <div>
                <div className={styles.party2_content_title}>Download or save new image as PNG file with no background</div>
                <p>Download your new cutout image to share, or keep editing and add new background details.</p>
              </div>
              
            </div>

          </div>
              
        </div>
        <Image src={img1} width={500}   className={styles.navbarLogo} alt="Black Logo" />

          

          
        

      </div>

      <div className={styles.party3}>

      </div>
    </div>

    
  )
}
