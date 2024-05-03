import { IconType } from 'react-icons';

type ContactItemProps = {
  Icon: IconType;
  label: string;
  link?: string;
  anchorProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  isAnchor?: boolean;
};

export const ContactItem = ({
  Icon,
  label,
  link,
  anchorProps,
  isAnchor,
}: ContactItemProps) => {
  return (
    <div className="flex items-center space-x-2 md:space-x-4">
      <Icon className="text-1xl md:text-4xl text-primary-cta" />
      {isAnchor ? (
        <a href={link} className="text-base md:text-2xl" {...anchorProps}>
          {label}
        </a>
      ) : (
        <span className="text-base md:text-2xl">{label}</span>
      )}
    </div>
  );
};
