import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Lightbox from 'yet-another-react-lightbox';
import Video from 'yet-another-react-lightbox/plugins/video';
import type { Slide } from 'yet-another-react-lightbox';
import SectionHeading from '../components/common/SectionHeading';
import SectionLabel from '../components/common/SectionLabel';
import CtaBand from '../components/common/CtaBand';
import PageHero from './PageHero';

type BranchTab = 'all' | 'chrompet' | 'chitlapakkam';

const tabs: { key: BranchTab; label: string }[] = [
  { key: 'all', label: 'All Branches' },
  { key: 'chrompet', label: 'Chrompet Branch' },
  { key: 'chitlapakkam', label: 'Chitlapakkam Branch' }
];

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  branch: Exclude<BranchTab, 'all'>;
  branchLabel: string;
  type?: 'image' | 'video';
}

const chrompetPhotos: GalleryItem[] = [
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
  ['FlexFit_Award_Ceremony_Manmakers_Clinic.png', 'Events']
].map(([file, category], index) => ({
  src: `/assets/Gallery/${encodeURIComponent(file)}`,
  alt: `FlexFit Club gallery photo ${index + 1}`,
  category,
  branch: 'chrompet',
  branchLabel: 'Chrompet Branch'
}));

const chitlapakkamMedia: GalleryItem[] = [
  'download.jpg',
  'unnamed (1).jpg',
  'unnamed (2).jpg',
  'unnamed (3).jpg',
  'unnamed (4).jpg',
  'unnamed (5).jpg',
  'unnamed (6).jpg',
  'unnamed (7).jpg',
  'unnamed (8).jpg',
  'unnamed (9).jpg',
  'unnamed (10).jpg',
  'unnamed (11).jpg',
  'unnamed (12).jpg',
  'unnamed (13).jpg',
  'unnamed (14).jpg',
  'unnamed (15).jpg',
  'unnamed (16).jpg',
  'unnamed (17).jpg',
  'unnamed (18).jpg'
].map((file, index) => ({
  src: `/assets/Gallery/ChitlapakkamBracnch/${encodeURIComponent(file)}`,
  alt: `FlexFit Club  Chitlapakkam branch photo ${index + 1}`,
  category: 'Chitlapakkam Branch',
  branch: 'chitlapakkam',
  branchLabel: 'Chitlapakkam Branch',
  type: 'image'
}));

chitlapakkamMedia.push({
  src: '/assets/Gallery/ChitlapakkamBracnch/videoplayback.mp4',
  alt: 'FlexFit Club  Chitlapakkam branch video',
  category: 'Chitlapakkam Branch',
  branch: 'chitlapakkam',
  branchLabel: ' Chitlapakkam Branch',
  type: 'video'
});

const galleryItems: GalleryItem[] = [...chrompetPhotos, ...chitlapakkamMedia];

const toSlide = (item: GalleryItem): Slide =>
  item.type === 'video'
    ? {
      type: 'video',
      sources: [{ src: item.src, type: 'video/mp4' }],
      controls: true,
      preload: 'metadata',
      playsInline: true
    }
    : { src: item.src, alt: item.alt };

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState<BranchTab>('all');
  const [index, setIndex] = useState(-1);
  const filtered = useMemo(() => (activeTab === 'all' ? galleryItems : galleryItems.filter((item) => item.branch === activeTab)), [activeTab]);
  const branchGroups = useMemo(() => [
    {
      key: 'chrompet',
      title: 'Chrompet Branch',
      subtitle: 'Original FlexFit gym floor, equipment, member training, and event photos.',
      items: filtered.filter((item) => item.branch === 'chrompet')
    },
    {
      key: 'chitlapakkam',
      title: 'Chitlapakkam Branch',
      subtitle: 'Branch photos and walkthrough media from the Anna Nagar, Chitlapakkam location.',
      items: filtered.filter((item) => item.branch === 'chitlapakkam')
    }
  ].filter((group) => group.items.length > 0), [filtered]);
  const openItem = (item: GalleryItem) => setIndex(filtered.findIndex((galleryItem) => galleryItem.src === item.src && galleryItem.alt === item.alt));

  return (
    <>
      <Helmet>
        <title>Gym Gallery - FlexFit Club Equipment & Facilities | Chennai Branches</title>
        <meta name="description" content="See FlexFit Club's facilities, equipment, member transformations, and branch photos from Chrompet and Anna Nagar, Chitlapakkam, Chennai." />
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
                <button className={activeTab === tab.key ? 'active' : ''} key={tab.key} onClick={() => setActiveTab(tab.key)}>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          {branchGroups.map((group) => (
            <div className="gallery-branch-section" key={group.key}>
              <div className="gallery-branch-heading">
                <div>
                  <span>{group.items.length} media items</span>
                  <h3>{group.title}</h3>
                </div>
                <p>{group.subtitle}</p>
              </div>
              <div className="gallery-grid">
                {group.items.map((item, itemIndex) => (
                  <button className={`gallery-tile border-0 p-0 ${itemIndex === 0 ? 'wide' : ''} ${item.type === 'video' ? 'video-tile' : ''}`} key={`${item.src}-${itemIndex}`} onClick={() => openItem(item)}>
                    {item.type === 'video' ? (
                      <video muted playsInline preload="metadata" aria-label={item.alt}>
                        <source src={item.src} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={item.src} alt={item.alt} />
                    )}
                    <span className="gallery-branch-badge">{item.branchLabel}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
          <div className="text-center mt-5">
            <h2>Follow <span className="text-yellow">@flex._.fit_</span> on Instagram</h2>
            <p className="text-muted-ff">Real workouts. Real results. Every day.</p>
            <a className="btn-ff btn-ff-primary" href="https://www.instagram.com/flex._.fit_" target="_blank" rel="noreferrer">Follow on Instagram</a>
          </div>
        </div>
      </section>
      <CtaBand title="Like the space? Come feel the energy." text="Book a free trial and train on the FlexFit floor this week." />
      <Lightbox open={index >= 0} index={index} close={() => setIndex(-1)} slides={filtered.map(toSlide)} plugins={[Video]} />
    </>
  );
};

export default GalleryPage;
