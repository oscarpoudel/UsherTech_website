"use client"

import Link from "next/link"

function PrivacyPolicy() {
  return (
    <section>
      <div className="relative w-full dark:bg-darkblack">
        <div className="container">
          <div className="flex flex-col gap-1.5 py-10 md:py-20">
            <p>
              This Privacy Policy explains how personal information about our (potential) customers and other individuals
              using our services is collected, used, and disclosed by <strong>UsherTech</strong> ("us", "we", "our"). This
              Privacy Policy describes our privacy practices in relation to the use of our website and services,
              including project inquiries, consulting engagements, software tools, scripts, dashboards, mobile
              applications, hardware prototypes, and related research and marketing activities (the "Services").
              You can learn more about us at <Link href="https://www.UsherTech.com">https://www.UsherTech.com</Link>.
            </p>

            <p>
              By using our Services, contacting us, or engaging us for a project, you consent to the collection, use,
              storage, and disclosure of your information as described in this Privacy Policy.
            </p>

            <p>
              Our Services may contain links to external websites or services. The privacy practices and content of such
              sites or services are governed by their respective privacy policies.
            </p>

            <p>
              We may update this Privacy Policy periodically. If changes occur, we will notify you by updating the date
              on this page and, where appropriate, providing additional notice (such as a notice on our website). We
              encourage you to review this Privacy Policy whenever you use our Services to stay informed about how we
              handle your information.
            </p>

            <div className="my-6">
              <h4 className="font-semibold">Personal Information Collection</h4>
              <p className="mt-6">
                While using our Services, we may ask you to provide certain information that can be used to contact or
                identify you. This may include your name, email address, phone number, company name, job title, project
                details, and any other information you choose to share when submitting a form or communicating with us.
              </p>

              <p className="mt-6">
                If you share project files or content with us (such as drawings, schedules, PDFs, spreadsheets, photos,
                videos, BIM exports, logs, or field notes), we use that content only to evaluate, deliver, and support
                the requested Services.
              </p>

              <p className="mt-6">
                We do not intentionally collect sensitive personal information. Please avoid sending sensitive details
                unless it is necessary for the work and you have appropriate permission to share it.
              </p>
            </div>

            <div className="my-6">
              <h4 className="font-semibold">Information You Provide to Us</h4>
              <p className="mt-6">
                You may provide information when you request a quote, schedule a consultation, subscribe to updates,
                request support, or otherwise communicate with us. We use this information to respond to you, deliver
                Services, provide support, and improve our offerings.
              </p>
            </div>

            <div className="my-6">
              <h4 className="font-semibold">Automatically Collected Information</h4>
              <p className="mt-6">
                When you visit our website, we may automatically collect limited technical information such as browser
                type, device type, approximate location (based on IP address), pages viewed, and referring pages. This
                information helps us operate and improve the website, maintain security, and understand usage trends.
              </p>
            </div>

            <div className="my-6">
              <h4 className="font-semibold">How We Use Information</h4>
              <p className="mt-6">
                We use personal information to communicate with you, provide and improve our Services, manage project
                delivery, maintain security, comply with legal obligations, and conduct internal analytics. If you opt
                in, we may also use your contact information to share updates about our services and offerings.
              </p>
            </div>

            <div className="my-6">
              <h4 className="font-semibold">Sharing and Disclosure</h4>
              <p className="mt-6">
                We do not sell your personal information. We may share information with service providers who help us
                operate our website and deliver Services (for example hosting, analytics, email, storage, or
                collaboration tools). These providers are authorized to use information only as necessary to provide
                services to us.
              </p>
              <p className="mt-6">
                We may also disclose information if required to comply with applicable laws, enforce our agreements, or
                protect the rights, property, and safety of our users, clients, or others.
              </p>
            </div>

            <div className="my-6">
              <h4 className="font-semibold">Data Retention</h4>
              <p className="mt-6">
                We retain personal information only for as long as necessary to fulfill the purposes described in this
                Privacy Policy, including providing Services, resolving disputes, maintaining records, and complying
                with legal obligations. Project files and deliverables may be retained for continuity, support, and
                record keeping unless you request deletion, subject to legal and contractual requirements.
              </p>
            </div>

            <div className="my-6">
              <h4 className="font-semibold">Security</h4>
              <p className="mt-6">
                We take reasonable administrative and technical measures to protect information. However, no method of
                transmission or storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="my-6">
              <h4 className="font-semibold">Payments</h4>
              <p className="mt-6">
                If we offer paid Services, payments may be processed through third party payment providers. We do not
                store payment card details on our servers. Any payment information you provide is handled directly by
                the payment provider under their privacy policy.
              </p>
            </div>

            <div className="my-6">
              <h4 className="font-semibold">Your Choices</h4>
              <p className="mt-6">
                You may request access, correction, or deletion of your personal information, subject to legal and
                contractual limitations. You can also opt out of marketing communications at any time by following the
                unsubscribe instructions in the message or by contacting us.
              </p>
            </div>

            <div className="my-6">
              <h4 className="font-semibold">Contact Us</h4>
              <p className="mt-6">
                If you have questions about this Privacy Policy or our data practices, please contact us through our
                website at <Link href="https://www.UsherTech.com">https://www.UsherTech.com</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy
