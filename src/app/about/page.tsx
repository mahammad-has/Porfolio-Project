import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { aboutPageContent } from '@/content/content';

export default function About() {
  return (
    <section className="flex flex-col md:flex-row min-h-full items-center justify-between px-4 md:px-52 gap-14 py-5 md:py-20">
      <div className="md:w-full space-y-4">
        <h1 className="text-3xl md:text-5xl font-medium">
          Hi, I am <br />
          <span className="text-primary-cta">{aboutPageContent.name}</span>
        </h1>
        <h3 className="text-xl md:text-2xl">{aboutPageContent.title}</h3>
        <p className="text-lg md:text-xl">{aboutPageContent.description}</p>
        <div className="space-x-4">
          <Button asChild size="md" className="md:text-xl">
            <a href={aboutPageContent.cv} download={true}>
              Download CV
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="uppercase md:text-xl"
            size="md"
          >
            <Link href="/projects">Projects</Link>
          </Button>
        </div>
      </div>
      <div className="md:w-full pb-4">
        <Image
          src={aboutPageContent.image}
          alt={aboutPageContent.name}
          width={1200}
          height={1200}
          priority
          className="w-full h-full rounded-xl"
        />
      </div>
    </section>
  );
}
