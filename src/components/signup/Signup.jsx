import React from 'react'
import styles from './signup.module.css'
import backgroundImage from "../../assets/shake.png"
import logo from "../../assets/logo.jpg"
import chevronLeft from "../../assets/chevron-left.jpg"
import person from "../../assets/person.jpg"
import mail from "../../assets/mail.jpg"
import lock from "../../assets/lock.jpg"
import info from "../../assets/info.jpg"
import arrowRight from "../../assets/arrow-right.png"



export const Signup = () => {
  return (
    <section className={styles.container}>
        <div className={styles.bg}>
            <div 
                style={{  
                    backgroundImage: "url(" + backgroundImage + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '75%',
                    width: '100%'
                }}
            >
                <div>
                    <section className={styles.imageCon}>
                    <img 
                        src={logo} 
                        alt="brand logo" 
                    />
                    </section>
                    <section className={styles.parnership}>
                        <p className={styles.firstPara}>Partnership for <br /> Business Growth</p>
                        <p className={styles.secondPara}>Partnerships are pivotal for business growth, enabling companies to leverage mutual strengths, share risks, and capitalize on opportunities.</p>
                    </section>
                </div>
            </div>
        </div>

        <div className={styles.conRight}>
            <section className={styles.first}>
                <div className={styles.firstSub}>
                    <img 
                        src={chevronLeft} 
                        alt="chevron left" 
                        height={"20px"}
                        width={"20px"}
                    />
                    <p className={styles.returnPara}>Return Home</p>
                </div>
                <div>
                    <p className={styles.returnPara}>Already a Member? <span className={styles.returnSpan}>LOG IN NOW</span></p>
                </div>
            </section>

            <section className={styles.become}>
                <div>
                    <h2>BECOME AN EXCLUSIVE MEMBERS</h2>
                    <p className={styles.becomeText}>SIGN UP and join the partnership </p>
                </div>
                <div style={{width: "100%"}}>
                    <form action="">
                        <section>
                            <div className={styles.formInput}>
                                <input type="text" placeholder='Johnson Doe' />
                                <div className={styles.formInputSub}>
                                    <div>
                                        <img 
                                            src={person} 
                                            height={"25px"}
                                            width={"25px"} 
                                            alt="person" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className={styles.formInput}>
                                <input type="email" placeholder='example@email.com' />
                                <div className={styles.formInputSub}>
                                    <div>
                                        <img 
                                            src={mail} 
                                            alt="email"
                                            height={"25px"} 
                                            width={"25px"}  
                                            />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className={styles.formInput}>
                                <input type="password" placeholder='*********' />
                                <div className={styles.formInputSub}>
                                    <div>
                                        <img 
                                            src={lock} 
                                            alt="info" 
                                            height={"25px"} 
                                            width={"25px"} 
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className={styles.btnCon}>                           
                            <button 
                                className={styles.btn} 
                                onClick={(e) => { 
                                    e.preventDefault(); 
                                    alert("Coming soon......")
                                }}>
                                <span>Become a Member</span>
                                <span className={styles.btnSpanCon}><img src={arrowRight} alt="arrow right" /></span>
                            </button>
                        </section>
                    </form>
                </div>
            </section>

            <section className={styles.foot}>
                <div>
                    <p className={styles.footCopyRight}>Copyright 2021 - 2022 5Starcompany. All rights Reserved</p>
                </div>
                <div className={styles.infoCon}>
                    <img src={info} alt="info sign" />
                    <p className={styles.footText}>Become a Member</p>
                </div>
            </section>
        </div>
    </section>
  )
}
