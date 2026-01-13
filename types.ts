export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  visualId: string;
}

export interface SlideProps {
  data: SlideData;
  isActive: boolean;
}