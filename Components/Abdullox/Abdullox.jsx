import React from "react";
import styles from "../../styles/Abdullox.module.css"

const Abdullox = () => {
  return (
    <div className={styles.container}>
      <div className="left">
        <p className={styles.art}>Achievements</p>
        <h1 className={styles.rtv}>We Worked With 100+ Companies Over 10 Years</h1>
        <img src="Group 203.png" alt="Company achievements" />
        <h1 className={styles.rtv2}>JobHub Job Finding Website</h1>
        <p className={styles.car}>
          This website has become one of the best UX interfaces for users with
          a beautiful UI and is also lucrative for upcoming startups in the
          sector.
        </p>
        <button className={styles.button}>View More Work</button>
      </div>





      <div className="right">
         <div className={styles.box}><h1 className={styles.rtv1}>9k+</h1> <p>Completed Full <br />
         Projects</p> <p className={styles.art}>From 789+ Companies</p></div>

         <div className={styles.box}><h1 className={styles.rtv1}>924+</h1> <p>Completed Full <br />
         Projects</p> <p className={styles.art}>From 789+ Companies</p></div>

         <div className={styles.box}><h1 className={styles.rtv1}>416+</h1> <p>Completed Full <br />
         Projects</p> <p className={styles.art}>From 789+ Companies</p></div>

         <div className={styles.box}><h1 className={styles.rtv1}>3024+</h1> <p>Completed Full <br />
         Projects</p> <p className={styles.art}>From 789+ Companies</p></div>



        <img src="Group 204.png" alt="Company achievements" />



        <h1 className={styles.rtv2}>JobHub Job Finding Website</h1>
        <p className={styles.car}>
          This website has become one of the best UX interfaces for users with
          a beautiful UI and is also lucrative for upcoming startups in the
          sector.
        </p>
        <button className={styles.button}>View More Work</button>
      </div>
    </div>
  );
};

export default Abdullox;
