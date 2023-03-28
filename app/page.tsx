import { EnvelopeIcon } from "@heroicons/react/24/outline";
// components
import { GitHubIcon, TwitterIcon, LinkedInIcon } from "components/icons";
// lib
import { FULL_NAME, ABOUT, BIO } from "lib/constants";

export const revalidate = 60;

export default async function HomePage() {
  return (
    <section className="py-20">
      <div className="flex justify-center">
        <div className="flex flex-col w-[70%]">
          <div className="flex mb-8">
            <div className="flex flex-1 justify-center">
              <img
                alt={FULL_NAME}
                className="rounded-full w-60 h-auto"
                src="/images/profile.webp"
                placeholder="blur"
              />
            </div>
            <div className=" flex flex-2 items-center">
              <div>
                <h1 className="font-bold text-3xl font-serif">{FULL_NAME}</h1>
                <p className="my-2 max-w-[460px]">{ABOUT}</p>
                <ul className="flex justify-start mt-4">
                  <li className="mx-3 items-center">
                    <a
                      className="social-icons-link"
                      href="https://github.com/sriramveeraghanta"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon />
                    </a>
                  </li>

                  <li className="mx-3">
                    <a
                      className="social-icons-link"
                      href="https://twitter.com/issriramv"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <TwitterIcon />
                    </a>
                  </li>
                  <li className="mx-3">
                    <a
                      className="social-icons-link"
                      href="https://www.linkedin.com/in/sriram-veeraghanta-22933798/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedInIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="my-5 text-center text-neutral-800 dark:text-neutral-200">
            {BIO}
          </p>
        </div>
      </div>
    </section>
  );
}
