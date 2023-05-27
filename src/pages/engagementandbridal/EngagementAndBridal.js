import React from 'react';
import '../store/Store.css';
import HeadingComponent from '../../components/shared/headingcomponent/HeadingComponent';
import image1 from '../../assets/watchs/herolarged_avenue_collection.avif';
import ButtonComponent from '../../components/shared/buttonComponent/ButtonComponent';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// importing images for the collection page
import img1 from '../../assets/creationsImage/Bangal2.jpg';
import img2 from '../../assets/creationsImage/Bangal__Custom.png';
import img3 from '../../assets/creationsImage/Bangal__Custom.png';
import img4 from '../../assets/creationsImage/Bangal3.jpg';
import img5 from '../../assets/creationsImage/Bangal4.jpg';
import img6 from '../../assets/creationsImage/EarPiece.png';
import img7 from '../../assets/creationsImage/PNeckLace.png';

const Store = () => {
	const all = [img1, img2, img3, img4, img5, img6, img7, img3];

	// const [currCollection, setCurrCollection] = React.useState(all);
	// const [currFilter, setCurrFilter] = React.useState("all");

	// React.useEffect(() => {
	//   console.log("comp rerender");
	// }, [currCollection, currFilter]);

	return (
		<div>
			<img
				className='page-top-image'
				style={{ width: '100%' }}
				src={image1}
				alt='page top'
			/>
			<HeadingComponent
				heading={'Engagement & Bridal'}
				paragraph={
					'At Alankar Jewellers, we believe that your engagement and wedding day is one of the most important days of your life'
				}
				paragraph2={
					' which is why we have curated a collection of exceptional engagement and bridal jewellery.'
				}
				paragraph3={
					'Each piece is crafted with the utmost care and precision, creating a unique and unforgettable symbol of your love'
				}
				marginTop={'0px'}
			/>
			{/* <div className="filter-component-container">
        <div className="filter-container">
          <div
            className={
              "filter-item " + (currFilter === "all" && "active-filter-item")
            }
            onClick={() => {
              setCurrCollection(all);
              setCurrFilter("all");
            }}
          >
            All
          </div>
          <div
            className={
              "filter-item " +
              (currFilter === "bangles" && "active-filter-item")
            }
            onClick={() => {
              setCurrCollection(bangles);
              setCurrFilter("bangles");
            }}
          >
            Bangles
          </div>
          <div
            className={
              "filter-item " +
              (currFilter === "bracelets" && "active-filter-item")
            }
            onClick={() => {
              setCurrCollection(bracelet);
              setCurrFilter("bracelets");
            }}
          >
            Bracelets
          </div>
          <div
            className={
              "filter-item " +
              (currFilter === "necklace" && "active-filter-item")
            }
            onClick={() => {
              setCurrCollection(necklace);
              setCurrFilter("necklace");
            }}
          >
            Necklace
          </div>
          <div
            className={
              "filter-item " +
              (currFilter === "earring" && "active-filter-item")
            }
            onClick={() => {
              setCurrCollection(earring);
              setCurrFilter("earring");
            }}
          >
            Earrings
          </div>
          <div
            className={
              "filter-item " + (currFilter === "rings" && "active-filter-item")
            }
            onClick={() => {
              setCurrCollection(rings);
              setCurrFilter("rings");
            }}
          >
            Rings
          </div>
        </div>
      </div> */}
			<div className='store-container'>
				<div className='store-grid'>
					{all.map((item) => (
						<div className='item-container'>
							<LazyLoadImage
								style={{ width: '100%' }}
								src={item}
								effect='blur'
								alt='collection of pics from alankar store'
							/>
						</div>
					))}
				</div>
			</div>
			<div style={{ margin: '3rem auto' }}>
				<ButtonComponent />
			</div>
		</div>
	);
};

export default Store;
