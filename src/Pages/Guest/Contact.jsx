
const Contact = () => {
  return (
    <div className="w-full bg-gray-100 px-40 py-15">

         <h1 className="text-4xl font-bold font-[Playfair Display] mb-6 text-gray-900 border-b-2 border-gray-300 inline-block pb-2 px-100 py-5">
  Contact Us
</h1>

      {/* GENERAL INQUIRIES */}
      <section className="mb-16" py-15>
        <h2 className="text-2xl font-bold mb-3 text-gray-900">General and Business Inquiries</h2>
        <p className="text-gray-600 mb-2">
          For inquiries and requests including RFP and competition invitations.
        </p>
        <p className="text-gray-700">
          Email:{" "}
          <a
            href="mailto:405arch@protonmail.com"
            className="text-blue-600 hover:text-blue-800 underline transition"
          >
            405arch@protonmail.com
          </a>
        </p>
      </section>

      {/* PRESS */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-3 text-gray-900">Press</h2>
        <p className="text-gray-600 mb-2">For media inquiries and upcoming events.</p>
        <p className="text-gray-700">
          Email:{" "}
          <a
            href="mailto:media@4ti5ied.com"
            className="text-blue-600 hover:text-blue-800 underline transition"
          >
            media@4ti5ied.com
          </a>
        </p>
      </section>

      {/* COMPANY HQ */}
      <section className="mb-16">
        <h1 className="text-4xl font-extrabold mb-3">Archbuild</h1>

        <h2 className="text-2xl font-bold mb-2">Headquarters</h2>
        <div className="w-full h-px bg-gray-300 mb-6"></div>

        <h3 className="text-xl font-semibold mb-1">Main Offices</h3>
        <p className="text-gray-600 mb-6">
          Ikeja, Osun, Ekiti, Abuja...
        </p>
      </section>

      {/* OVERSEAS OFFICES */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Overseas Offices</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">

          {/* CARD TEMPLATE */}
          <div className="p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Illinois</h3>
            <p className="text-gray-600 leading-relaxed">
              307 W 7th St, Muscatine, IA 52761 <br />
              <span className="font-semibold">TEL:</span> +1 432-343-4930 <br />
              <span className="font-semibold">FAX:</span> +1 432-343-4930
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Toronto, Ontario</h3>
            <p className="text-gray-600 leading-relaxed">
              4827 Maple Ridge Crescent, Toronto, ON M4J 2X9 <br />
              <span className="font-semibold">TEL:</span> +1 (604) 555-7294 <br />
              <span className="font-semibold">FAX:</span> +1 (604) 555-7294
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Calgary, Alberta</h3>
            <p className="text-gray-600 leading-relaxed">
              2318 Willow Bend Drive, Calgary, AB T2Y 4N3 <br />
              <span className="font-semibold">TEL:</span> +1 (613) 555-4421 <br />
              <span className="font-semibold">FAX:</span> +1 (613) 555-4421
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Manchester, UK</h3>
            <p className="text-gray-600 leading-relaxed">
              42 Willowbank Close, Manchester, M14 6QT, UK <br />
              <span className="font-semibold">TEL:</span> +44 20 3984 5521 <br />
              <span className="font-semibold">FAX:</span> +44 20 3984 5521
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;