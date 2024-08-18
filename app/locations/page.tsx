import { Metadata } from 'next';
import ComingSoon from '../coming-soon';

export const metadata: Metadata = {
  title: 'Rick and Morty Locations',
};

export default function Locations() {
  return <ComingSoon />;
}
