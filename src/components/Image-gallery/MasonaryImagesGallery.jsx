import React from 'react'
import galleryImages from './galleryImages'
import Masonary, {ResponsiveMasonary} from 'react-responsive-masonary'

function MasonaryImagesGallery() {
  return (
    <ResponsiveMasonary columnsCountBreakPoints={{350:1, 768:3, 992:4}}>
     <Masonary gutter='1rem'>
        {
            galleryImages.map((item,index)=>(
                <img src={item} key={index} alt="" style={{'width':'100%'}} />
            ))
        }
     </Masonary>
    </ResponsiveMasonary>
  )
}

export default MasonaryImagesGallery