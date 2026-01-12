// import React from 'react'
// import styles from './OfficeBearerContainer.module.css'
// import { Execom24 } from '../../../../Utils/Constants'
// import { PersonDetailsCard } from '../PersonDetailsCard/PersonDetailsCard'


// export const OfficeBearerContainer = () => {
//   const totalCards = Execom24.length;
//   const remainder = totalCards % 3;
//   const emptySlots = remainder > 0 ? 3 - remainder : 0;

//   return (
//     <div className={styles.container}>
//       <div className={styles.wrapper}>
//         <div className={styles.row}>
//           <span className={styles.title}>Execom 2024-25</span>
//         </div>
//         <div className={styles.row}>
//           {Execom24?.map((execom, index) => (
//             <div className={styles.wrap} key={index}>
//               <PersonDetailsCard execom={execom} />
//             </div>
//           ))}
//           {Array.from({ length: emptySlots }).map((_, index) => (
//             <div key={`empty-${index}`} className={styles.wrap} style={{ visibility: "hidden" }}></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


import React, { useState } from 'react';
import styles from './OfficeBearerContainer.module.css';
import { Execom24 } from '../../../../Utils/Constants';
import { PersonDetailsCard } from '../PersonDetailsCard/PersonDetailsCard';

export const OfficeBearerContainer = () => {
  const [showAll, setShowAll] = useState(false);
  const cardsPerRow = 3;
  const visibleRows = 4; 
  const visibleCards = visibleRows * cardsPerRow; 

  const totalCards = Execom24.length;
  const showReadMore = totalCards > visibleCards;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <span className={styles.title}>Execom 2025-26</span>
        </div>
        <div className={styles.row}>
          {Execom24.slice(0, showAll ? totalCards : visibleCards).map((execom, index) => (
            <div className={styles.wrap} key={index}>
              <PersonDetailsCard execom={execom} />
            </div>
          ))}
        </div>
        {showReadMore && !showAll && (
          <button className={styles.readMoreBtn} onClick={() => setShowAll(true)}>
            Read More ▼
          </button>
        )}
      </div>
    </div>
  );
};
