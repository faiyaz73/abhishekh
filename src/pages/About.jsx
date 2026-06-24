import React from "react";

export default function About() {
  return (
    <div className="bg-[#dce8c9] min-h-screen py-8">

      {/* Heading */}
      <div className="flex justify-center mb-10">
        <h2 className="px-12 py-2 text-3xl font-semibold text-green-900 border-2 border-green-900 rounded-lg bg-[#edf5df] shadow">
          About Us
        </h2>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center p-8">

            <div>
              <img
                src="https://images.unsplash.com/photo-1469571486292-b53601020f52"
                alt="NGO"
                className="w-full h-100 object-cover rounded-xl"
              />
            </div>

            <div>
              <h3 className="text-4xl font-bold text-green-700 mb-4">
                Welcome To Our NGO
              </h3>

              <p className="text-gray-700 leading-8 text-justify">
                Our NGO is committed to creating positive social change through
                education, healthcare, environmental protection, and community
                development initiatives. We work together with volunteers,
                donors, and community members to build a better future.
              </p>

              <p className="text-gray-700 leading-8 mt-4 text-justify">
                Our mission is to support underprivileged communities and
                empower individuals through sustainable development programs.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-green-700 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-700 leading-7">
              To improve the quality of life for underprivileged people through
              education, healthcare support, skill development, and social
              welfare programs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-green-700 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-700 leading-7">
              To create an inclusive society where every individual has equal
              opportunities to live with dignity, security, and hope.
            </p>
          </div>

        </div>
      </div>

      {/* Objectives */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-green-100 sm:p-10">
          <div className="text-center">
            <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
              What We Focus On
            </span>
            <h3 className="mt-3 text-3xl font-bold text-green-800">
              Our Objectives
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Building a stronger community through meaningful action
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="group rounded-2xl border border-green-100 bg-linear-to-br from-green-50 to-emerald-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-xl font-bold text-white">
                01
              </div>
              <h4 className="mt-4 text-xl font-bold text-green-800">Education</h4>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Support quality education for children and help them grow with confidence.
              </p>
            </div>

            <div className="group rounded-2xl border border-green-100 bg-linear-to-br from-emerald-50 to-lime-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-xl font-bold text-white">
                02
              </div>
              <h4 className="mt-4 text-xl font-bold text-green-800">Healthcare</h4>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Organize health camps and awareness programs for better community well-being.
              </p>
            </div>

            <div className="group rounded-2xl border border-green-100 bg-linear-to-br from-lime-50 to-yellow-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-600 text-xl font-bold text-white">
                03
              </div>
              <h4 className="mt-4 text-xl font-bold text-green-800">Environment</h4>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Promote tree plantation, cleanliness drives, and eco-friendly practices.
              </p>
            </div>

            <div className="group rounded-2xl border border-green-100 bg-linear-to-br from-yellow-50 to-amber-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-600 text-xl font-bold text-white">
                04
              </div>
              <h4 className="mt-4 text-xl font-bold text-green-800">Women Empowerment</h4>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Support women through training, awareness, and opportunities for growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-green-600 text-white p-8 rounded-xl text-center">
            <h3 className="text-4xl font-bold">500+</h3>
            <p>Members</p>
          </div>

          <div className="bg-green-600 text-white p-8 rounded-xl text-center">
            <h3 className="text-4xl font-bold">100+</h3>
            <p>Volunteers</p>
          </div>

          <div className="bg-green-600 text-white p-8 rounded-xl text-center">
            <h3 className="text-4xl font-bold">50+</h3>
            <p>Projects</p>
          </div>

          <div className="bg-green-600 text-white p-8 rounded-xl text-center">
            <h3 className="text-4xl font-bold">10K+</h3>
            <p>Beneficiaries</p>
          </div>

        </div>
      </div>

    </div>
  );
}