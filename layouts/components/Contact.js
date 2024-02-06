import { markdownify } from '@lib/utils/textConverter';
import Image from 'next/image';
import Link from 'next/link';

export const Contact = ({ contact }) => {
  return (
    <section id="contact" className="section px-4">
      <div className="section container rounded-xl shadow">
        <div className="row  mx-auto items-center justify-center">
          <div className="md:col-5 lg:col-4">
            <Image
              className="w-full"
              src={contact?.image}
              alt="call to action image"
              width={325}
              height={206}
            />
          </div>
          <div className="mt-5 text-center md:col-6 lg:col-5 md:mt-0 md:text-left">
            <h2>{contact?.title}</h2>
            <p className="mt-6">{markdownify(contact?.content)}</p>
            {contact.button.enable && (
              <Link
                className="btn btn-primary mt-4"
                href={contact.button.link}
                rel={contact.button.rel}
              >
                {contact.button.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
