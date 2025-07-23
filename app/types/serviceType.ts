export type Service = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export type ServiceCardProps = {
  service: Service;
  index: number;
};