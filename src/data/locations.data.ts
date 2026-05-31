interface BranchOffer {
  title: string;
  price: string;
  description: string;
}

export interface BranchLocation {
  id: string;
  shortName: string;
  name: string;
  address: string;
  mapUrl: string;
  embedQuery: string;
  workingHours: {
    summary: string;
    sunday: string;
    weekdays: string;
    saturday: string;
  };
  challengeOffer: BranchOffer;
  coupleOffer: BranchOffer;
}

export const branchLocations: BranchLocation[] = [
  {
    id: 'chrompet',
    shortName: 'Chrompet Branch',
    name: 'FlexFit Club - Chrompet',
    address: 'Plot no 5, First Floor, Muthusamy Main Road, Muthusamy Nagar, Chrompet, Chennai - 600044',
    mapUrl: 'https://maps.app.goo.gl/K8LZ5yGL2shDQjWH9',
    embedQuery: 'FlexFit Club, Chrompet, Chennai',
    workingHours: {
      summary: 'Morning 5-10 am; Evening 4-10 pm',
      sunday: '5-10 am',
      weekdays: '5-10 am, 4-10 pm',
      saturday: '5-10 am, 4-10 pm'
    },
    challengeOffer: {
      title: '90 Days Body Transformation Challenge',
      price: 'Rs. 5,000/-',
      description: 'Personal training, diet chart, workout plan, and full guidance.'
    },
    coupleOffer: {
      title: '12 Months Couple Offer',
      price: 'Rs. 10,000/-',
      description: 'Annual couple package for two members.'
    }
  },
  {
    id: 'anna-nagar-chitlapakkam',
    shortName: 'Chitlapakkam Branch',
    name: 'FlexFit Club - Anna Nagar, Chitlapakkam',
    address: '1, Russo St, Doss Avenue, Anna Nagar, Chitlapakkam, Chennai, Tamil Nadu 600064',
    mapUrl: 'https://maps.app.goo.gl/N8bX75kz8WcuHYjv5',
    embedQuery: '1 Russo St, Doss Avenue, Anna Nagar, Chitlapakkam, Chennai, Tamil Nadu 600064',
    workingHours: {
      summary: 'Morning 5:30-10 am; Evening 4-10 pm',
      sunday: '5:30-10 am',
      weekdays: '5:30-10 am, 4-10 pm',
      saturday: '5:30-10 am, 4-10 pm'
    },
    challengeOffer: {
      title: '90 Days Transformation Offer Including PT',
      price: 'Rs. 6,999/-',
      description: 'Branch opening offer including personal training.'
    },
    coupleOffer: {
      title: '12 Months Couple Offer',
      price: 'Rs. 13,999/-',
      description: 'Chitlapakkam branch couple offer from the opening flyer.'
    }
  }
];

export const branchLocationIds = branchLocations.map((location) => location.id);

export const getBranchLocation = (locationId: string) =>
  branchLocations.find((location) => location.id === locationId);
