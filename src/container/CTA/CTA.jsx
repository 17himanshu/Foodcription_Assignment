import React from 'react';
import './CTA.css';
import { images } from '../../constants';

const CTA = () => {
  return (
    <div className="section-padding">
<div className="row cta">
    <div className="col-lg-8 col-12">
<h3>Let’s make things happen</h3>

<p className="pt-2 pb-4">Let’s find your next team member Contact us today to learn more about how our job portal can help your company find and hire the best talent.</p>
<buton className="btn-positivus">Post Your Job Now</buton>
</div>
<div className="col-lg-4 d-lg-flex d-none">
<img src={images.thingshappen} alt="thingshappen" />
</div>
    </div>
    </div>
  )
}

export default CTA