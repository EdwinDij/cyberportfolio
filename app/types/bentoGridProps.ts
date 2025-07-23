export type BentoGridProps = {
  className?: string;
    children: React.ReactNode;
};

export type BentoGridItemProps = {
  className?: string;
  title: string;
  description: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
};