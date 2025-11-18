import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  borderColor: string;
  iconBgColor: string;
  iconTextColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  borderColor,
  iconBgColor,
  iconTextColor = "text-white"
}) => {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-lg text-center border-t-4 ${borderColor}`}>
      <div className={`${iconBgColor} ${iconTextColor} rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6`}>
        <span>{icon}</span>
      </div>
      <h3 className="text-xl font-headline font-semibold mb-4 text-moss">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;