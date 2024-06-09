import React from 'react'
import { Headings, IconScroll } from '../../components';
import { data } from '../../constants';
import './CaseStudies.css';
import { FiArrowUpRight } from 'react-icons/fi'


const CaseStudies = () => {
  return (
    <div className="section-padding" id="use-cases">

      <Headings title="Case Studies" text="Discover How Our Job Portal Has Helped Companies Find and Hire Top Talents through Our Success Stories" />

        <div className="case-studies">

          {data.CaseStudies.map(({ text, link }, index) => (
            <div key="index" className="case-studies-item">
              <p>{text}</p>
              <a href={link} alt="Learn more">Learn more <FiArrowUpRight /></a>
            </div>
          ))}
        </div>
        
    <IconScroll />
   
      </div>

  )
}

export default CaseStudies