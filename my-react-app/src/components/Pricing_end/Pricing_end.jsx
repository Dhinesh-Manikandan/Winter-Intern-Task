import React, { useState } from 'react';
import Pricing from '../Pricing/Pricing';
import Footers from '../Globe/GlobeIcon';
import './Pricing_end.css';
import { useNavigate } from 'react-router-dom';
export default function Pricing_end() {
    const navigate = useNavigate();
  return (
    <>
    <div className="sync-cycles-circles">
        <div></div> {/* Ring 1 */}
        <div></div> {/* Ring 2 */}
        <div></div> {/* Ring 3 */}
        <div></div> {/* Ring 4 */}
        <div></div> {/* Ring 5 */}
        <div></div> {/* Ring 6 */}
        <div></div> {/* Ring 7 */}
        <div></div> {/* Ring 8 */}
         <div></div> {/* Ring 9 */}
        <div></div> {/* Ring 10 */}
        <div></div> {/* Ring 11*/}
        <div></div> {/* Ring 12 */}
        <div></div> {/* Ring 13 */}
        <div></div> {/* Ring 14 */}
        <div></div> {/* Ring 15 */}
        {/* <div></div> Ring 16 */}
      </div>
    <div className='pricing-end-page'>
      <Pricing />
    </div>
    </>
  );
}