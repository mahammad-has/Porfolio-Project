import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineAlternateEmail } from 'react-icons/md';

import { contactPageContent } from '@/content/content';
import { ContactItem } from '@/components/contact-item';

export default function Contact() {
  return (
    <section className="py-5 md:py-20 px-10 md:px-52 min-h-full">
      <h2 className="text-4xl md:text-6xl text-center mb-12 uppercase font-bold text-primary-cta">
        Get in touch
      </h2>
      <div className="flex flex-col md:gap-8 bg-card-custom p-2 md:p-16 rounded-2xl">
        <div className="flex flex-col md:flex-row md:justify-around md:mb-8">
          <ContactItem
            Icon={MdOutlineAlternateEmail}
            link={`mailto:${contactPageContent.email}`}
            label={contactPageContent.email}
            isAnchor
          />
          <ContactItem
            Icon={IoLocationOutline}
            label={contactPageContent.address}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <ContactItem
            Icon={FaPhone}
            link={`tel:${contactPageContent.phoneNumber}`}
            label={contactPageContent.phoneNumber}
            isAnchor
          />

          <ContactItem
            Icon={FaLinkedin}
            label="LinkedIn"
            link={contactPageContent.linkedin}
            anchorProps={{ target: '_blank', rel: 'noopener noreferrer' }}
            isAnchor
          />

          <ContactItem
            Icon={FaGithub}
            label="GitHub"
            link={contactPageContent.github}
            anchorProps={{ target: '_blank', rel: 'noopener noreferrer' }}
            isAnchor
          />
        </div>
      </div>
    </section>
  );
}
