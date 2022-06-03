import React from 'react';
import ActionBanner from './banners/ActionBanner';
import AdventureBanner from './banners/AdventureBanner';
import ComedyBanner from './banners/ComedyBanner';
import FantasyBanner from './banners/FantasyBanner';
import RomanceBanner from './banners/RomanceBanner';
import ScienceFiction from './banners/ScienceFiction';


const Categories = () => {
  return (
    <div className='categories-container'>
      <p className='categories-title'>Categories</p>
      
      <section className='banner-genre'>
          <div>
             <p className='genre-title'>Comedy</p>
            <ComedyBanner/> 
          </div>
          <div>
             <p className='genre-title'>Action</p>
            <ActionBanner/>
          </div>
          <div>
             <p className='genre-title'>Adventure</p>
            <AdventureBanner/>
          </div>
         <div>
            <p className='genre-title'>Fantasy</p>
            <FantasyBanner/>
         </div>
         <div>
            <p className='genre-title'>Romance</p>
            <RomanceBanner/>
         </div>
         <div>
            <p className='genre-title'>Science Fiction</p>
            <ScienceFiction/>
         </div>  
      </section>
    </div>
  )
}

export default Categories;
