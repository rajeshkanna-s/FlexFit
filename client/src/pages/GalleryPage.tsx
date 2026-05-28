import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Lightbox from 'yet-another-react-lightbox';
import SectionHeading from '../components/common/SectionHeading';
import SectionLabel from '../components/common/SectionLabel';
import CtaBand from '../components/common/CtaBand';
import PageHero from './PageHero';

const tabs = ['All', 'Gym Floor', 'Equipment', 'Members', 'Events'];

const photos = [
  ['FlexFit_Gym_Interior_Daytime_View.png', 'Gym Floor'],
  ['FlexFit_Gym_Interior_Equipment_View_1.png', 'Gym Floor'],
  ['FlexFit_Gym_Interior_Equipment_View_2.png', 'Gym Floor'],
  ['FlexFit_Dumbbell_Barbell_Rack_Setup.png', 'Equipment'],
  ['FlexFit_Athlete_Holding_Weight_Plates.png', 'Members'],
  ['FlexFit_Gym_Members_Training_Session.png', 'Members'],
  ['FlexFit_Gym_Two_Friends_Posing.png', 'Members'],
  ['FlexFit_Member_Back_Muscle_Pose.png', 'Members'],
  ['FlexFit_Member_Double_Bicep_Flex_Yellow_Tee.png', 'Members'],
  ['FlexFit_Trainer_Back_Double_Bicep_Pose.png', 'Members'],
  ['FlexFit_Trainer_Bicep_Curl_Pose.png', 'Members'],
  ['FlexFit_Award_Ceremony_Manmakers_Clinic.png', 'Events'],
  ['FlexFit_Signboard_Night_View.png', 'Gym Floor'],
  ['FlexFit_Logo_Black_Background.png', 'Events']
].map(([file, category], index) => ({
  src: `/assets/Gallery/${encodeURIComponent(file)}`,
  alt: `FlexFit Club gallery photo ${index + 1}`,
  category
}));

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [index, setIndex] = useState(-1);
  const filtered = useMemo(() => (activeTab === 'All' ? photos : photos.filter((photo) => photo.category === activeTab)), [activeTab]);

  return (
    <>
      <Helmet>
        <title>Gym Gallery - FlexFit Club Equipment & Facilities | Chrompet Chennai</title>
        <meta name="description" content="See FlexFit Club's state-of-the-art facilities, equipment, member transformations, and gym events in Chrompet, Chennai." />
        <link rel="canonical" href="https://flexfitclub.in/gallery" />
      </Helmet>
      <PageHero label="Gallery" title="See The" highlight="FlexFit Space" />
      <section className="section section-card">
        <div className="container">
          <div className="text-center mb-5">
            <SectionLabel text="Photos" />
            <SectionHeading line1="Equipment &" line2="Facilities" highlightLine={2} centered />
            <div className="gallery-tabs mt-4">
              {tabs.map((tab) => (
                <button className={activeTab === tab ? 'active' : ''} key={tab} onClick={() => setActiveTab(tab)}>
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="gallery-grid">
            {filtered.map((photo, photoIndex) => (
              <button className={`gallery-tile border-0 p-0 ${photoIndex === 0 ? 'wide' : ''}`} key={photo.src} onClick={() => setIndex(photoIndex)}>
                <img src={photo.src} alt={photo.alt} />
              </button>
            ))}
          </div>
          <div className="text-center mt-5">
            <h2>Follow <span className="text-yellow">@flex._.fit_</span> on Instagram</h2>
            <p className="text-muted-ff">Real workouts. Real results. Every day.</p>
            <a className="btn-ff btn-ff-primary" href="https://www.instagram.com/flex._.fit_" target="_blank" rel="noreferrer">Follow on Instagram</a>
          </div>
        </div>
      </section>
      <CtaBand title="Like the space? Come feel the energy." text="Book a free trial and train on the FlexFit floor this week." />
      <Lightbox open={index >= 0} index={index} close={() => setIndex(-1)} slides={filtered.map((photo) => ({ src: photo.src, alt: photo.alt }))} />
    </>
  );
};

export default GalleryPage;
