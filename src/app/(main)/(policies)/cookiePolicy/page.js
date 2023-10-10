import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="container text-justify mx-auto my-16">
      <div>
        <p className="text-3xl font-bold mb-8 text-center">Cookies Policy</p>
        <p className="font-bold text-xl my-3">
          Definition and function of cookies
        </p>
        <p>
          What are cookies? A cookie is a file that is downloaded to your
          computer or terminal when you access our website. Cookies allow us,
          among other things, to store and retrieve information about the
          browsing habits of a user or their equipment and, depending on the
          information they contain and the way you use your equipment, they can
          be used to recognize the user.
        </p>
      </div>
      <div>
        <p className="font-bold text-xl my-3">
          What types of cookies does our website use?
        </p>
        <ul className="list-disc list-inside">
          <li className="pl-5">
            <span className="font-bold">Own cookies:</span> These are those that
            we send to your computer or terminal from our website.
          </li>
          <li className="pl-5">
            <span className="font-bold">Third-party cookies:</span> These are
            those that are sent to your computer or terminal from a domain or a
            website that is not managed by us, but by another entity that
            processes the data obtained through cookies.
          </li>
          <li className="pl-5">
            <span className="font-bold">Session cookies:</span> These are a type
            of cookies designed to collect and store data while you access our
            website.
          </li>
          <li className="pl-5">
            <span className="font-bold">Persistent cookies:</span> These are a
            type of cookies in which the data continues to be stored in the
            terminal and can be accessed and processed for a specific period of
            time, which can range from a few minutes to several years.
          </li>
          <li className="pl-5">
            <span className="font-bold">Analysis cookies:</span> These are those
            that, well treated by us or by third parties, allow us to quantify
            the number of users and carry out statistical measurement and
            analysis of the use made by users of our website. To do this, we
            analyze the navigation on our website in order to improve the range
            of products or services we offer.
          </li>
          <li className="pl-5">
            <span className="font-bold">Advertising cookies:</span> These are
            those that allow the management, in the most efficient way possible,
            of the advertising spaces on our website based on criteria such as
            the edited content or the frequency in which the ads are displayed
            or based on behavior. of users obtained through continuous
            observation of their browsing habits, which allows the development
            of a specific profile to display advertising based on it.
          </li>
        </ul>
      </div>
      <div>
        <p className="font-bold text-xl my-3">Cookie management</p>
        <ul className="list-disc list-inside">
          You can allow, block or delete cookies installed on your computer by
          configuring the options of the browser installed on your computer.
          <li className="pl-5">
            <span className="font-bold inline-block">CHROME:</span>{" "}
            <Link
              href={"https://support.google.com/chrome/answer/95647?hl=es"}
              target="_blank"
              className="underline"
            >
              https://support.google.com/chrome/answer/95647?hl=es
            </Link>
          </li>
          <li className="pl-5">
            <span className="font-bold inline-block">EXPLORER:</span>{" "}
            <Link
              href={
                "http://windows.microsoft.com/es-es/windows-vista/Block-or-allow-cookie"
              }
              target="_blank"
              className="underline"
            >
              http://windows.microsoft.com/es-es/windows-vista/Block-or-allow-cookie
            </Link>
          </li>
          <li className="pl-5">
            <span className="font-bold inline-block">FIREFOX:</span>{" "}
            <Link
              href={
                "http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we"
              }
              target="_blank"
              className="underline"
            >
              http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we
            </Link>
          </li>
          <li className="pl-5">
            <span className="font-bold inline-block">SAFARI:</span>{" "}
            <Link
              href={"http://www.apple.com/es/privacy/use-of-cookies/"}
              target="_blank"
              className="underline"
            >
              http://www.apple.com/es/privacy/use-of-cookies/
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="font-bold text-xl my-3">Collaborating companies</p>
        <ul className="list-disc list-inside">
          Specifically, the service providers with whom we have contracted a
          service for which the use of cookies is necessary are:
          <li className="pl-5">
            <span className="font-bold">Google, INC.</span> with the Google
            Analytics cookie that is used to analyze user behavior on the
            Internet. The information generated by the cookie about the user's
            use of the website is generally transmitted to and stored on Google
            servers in the United States. If you activate the anonymous IP
            option on the website, the IP address will not appear complete
            within the countries of the European Union or in other countries
            that have agreed so within the economic area of the European Union.
            Only in exceptional cases will the full IP address be transmitted to
            a Google server in the United States and shortened there. Only with
            the authorization of the user of the page, Google will use this
            information in order to evaluate the user's behavior on the website,
            generate reports on website activities and offer the owner of the
            page services related to web and Internet use. The IP address
            transmitted by your browser within the framework of Google Analytics
            will not be associated with other Google data. The user can prevent
            the storage of cookies by configuring the browser accordingly so
            that cookies are not stored. This setting may affect the full
            functionality of the website. By using this website, the user agrees
            to the processing of data by Google in the aforementioned manner.
            The user can also prevent the recording of data generated by cookies
            and data related to the use of the website (including the IP
            address), as well as their processing by downloading and installing
            the following browser plugin available through this link:
            http://tools.google.com/dlpage/gaoptout More information about the
            terms and conditions of use and privacy policy in the conditions of
            use of Google Analytics or in the general conditions of Google
            Analytics. Please note that on this page the Google Analytics code
            includes the tag “gat._anonymizeIp();”, which ensures the collection
            of IP addresses anonymously (IP mask).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
