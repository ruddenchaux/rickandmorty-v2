import { Metadata } from 'next';
import ComingSoon from '../coming-soon';

export const metadata: Metadata = {
  title: 'Rick and Morty Episodes',
};

export default function Episodes() {
  return <ComingSoon />;
}
