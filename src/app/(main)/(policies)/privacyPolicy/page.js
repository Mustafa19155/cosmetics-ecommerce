import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto text-justify">
      <div>
        <p className="text-3xl font-bold text-center mt-16 mb-8">
          Privacy Policy
        </p>
        <p>
          By virtue of the provisions of Law 15/1999, of December 13, on the
          Protection of Personal Data, we inform you that by completing this
          form your personal data will be incorporated and will be processed in
          the files owned by MalikPak SL, in order to manage, administer and
          maintain the Services provided and/or contracted, as well as to keep
          you informed, including by electronic means, on issues related to the
          activity of the Company and its services.
          <br />
          <br />
          You can exercise, at any time, the rights of access, rectification,
          cancellation and opposition of your personal data by email addressed
          to info@aliyaabeauty.com or by writing to Avenida san memes local 15
          código postal 24007 León Spain, always accompanying a photocopy of
          your ID
        </p>
      </div>
      <div>
        <p className="text-xl font-bold my-3">Cookies</p>
        <ol className="list-inside list-decimal">
          <li className="">
            We may collect information about your computer, including, where
            applicable, your IP address, operating system and browser type, for
            system administration. This is statistical data about how you
            navigate our website.
          </li>
          <li className="">
            For the same reason, we may obtain information about your general
            Internet usage through a cookie file that is stored on your
            computer's hard drive. Cookies contain information that is
            transferred to your computer's hard drive.
          </li>
          <li className="">
            Cookies help us improve our website and provide a better and more
            personalized service. Specifically, they allow us:
            <ul className="list-disc list-inside">
              <li className="pl-5">
                Make an estimation on numbers and use patterns.
              </li>
              <li className="pl-5">
                Store information about your preferences and personalize our
                website according to your individual interests.
              </li>
              <li className="pl-5">Speed up your searches.</li>
              <li className="pl-5">
                Recognize you when you return to our site.
              </li>
            </ul>
          </li>
          <li className="">
            You can refuse to accept cookies by activating the setting on your
            browser that allows you to reject cookies. However, if you select
            this setting, you may not be able to access certain parts of the
            Website or you may not be able to take advantage of some of our
            services. Unless you have adjusted your browser settings to reject
            cookies, our system will produce cookies when you connect to our
            site.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Page;
