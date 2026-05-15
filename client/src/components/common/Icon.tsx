import {
  Activity,
  Bullseye,
  Clock,
  EnvelopeFill,
  EyeFill,
  GearFill,
  GraphDownArrow,
  HeartFill,
  HeartPulseFill,
  Instagram,
  LightningFill,
  PeopleFill,
  PersonCheck,
  PersonFill,
  PhoneFill,
  ShieldCheck,
  Snow,
  TrophyFill,
  Whatsapp,
  Wind
} from 'react-bootstrap-icons';

const icons = {
  activity: Activity,
  clock: Clock,
  email: EnvelopeFill,
  eye: EyeFill,
  gear: GearFill,
  graph: GraphDownArrow,
  heart: HeartPulseFill,
  heartFill: HeartFill,
  instagram: Instagram,
  lightning: LightningFill,
  people: PeopleFill,
  person: PersonFill,
  personCheck: PersonCheck,
  phone: PhoneFill,
  shield: ShieldCheck,
  snow: Snow,
  target: Bullseye,
  trophy: TrophyFill,
  whatsapp: Whatsapp,
  wind: Wind
};

export type IconName = keyof typeof icons;

interface IconProps {
  name: string;
  className?: string;
}

const Icon = ({ name, className }: IconProps) => {
  const Component = icons[name as IconName] || Activity;
  return <Component className={className} aria-hidden="true" />;
};

export default Icon;
