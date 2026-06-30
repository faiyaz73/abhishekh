import React, { useMemo, useState } from 'react'
import { FaEnvelope, FaPhoneAlt, FaSearch } from 'react-icons/fa'
import abhishekhOjhaImage from '../assets/abhishekh ojha.jpeg'
import seemaMauryaImage from '../../IMAGE/Seema Maurya1.jpg'

const managementMembers = [
  {
    image: abhishekhOjhaImage,
    name: 'Abhishekh Ojha',
    title: 'Director',
    phone: '+91 98765 43210',
    email:'jankalyancarefoundation@gmail...'
  },
  {
    image: seemaMauryaImage,
    name: 'Seema Maurya',
    title: 'Director',
    phone: '+91 98765 43211',
    email: 'jankalyancarefoundation@gmail...',
  },
  {
    image: '/jankalyan-logo.jpeg',
    name: 'Rakhi',
    title: 'Computer Trainer',
    phone: '+91 98765 43212',
    email: 'jankalyancarefoundation@gmail...',
  },
  
  {
    image: abhishekhOjhaImage,
    name: 'Abhishekh Ojha',
    title: 'Member',
    phone: '+91 98765 43214',
    email: 'jankalyancarefoundation@gmail...',
  },
  
 

]

export default function Manegment_team() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMembers = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    if (!query) {
      return managementMembers
    }

    return managementMembers.filter((member) =>
      [member.name, member.title, member.phone, member.email]
        .join(' ')
        .toLowerCase()
        .includes(query),
    )
  }, [searchTerm])

  return (
    <main className="bg-[#f4fbef] px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-block rounded border border-green-700 bg-white px-5 py-1 text-sm font-semibold text-green-800 shadow-sm">
            Management Team
          </span>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Team Members
          </h1>
        </div>

        <div className="mx-auto mt-8 max-w-2xl">
          <div className="flex items-center gap-3 rounded border border-green-200 bg-white px-4 py-3 shadow-md focus-within:border-green-600">
            <FaSearch className="shrink-0 text-green-700" />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by name, title, number..."
              className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400 sm:text-base"
            />
          </div>
        </div>

        <div className="mt-10 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredMembers.map((member) => (
            <article
              key={member.email}
              className="flex h-full flex-col rounded border border-white/70 bg-[#59A404] p-4 text-center shadow-[0_10px_25px_rgba(255,255,255,0.85)] transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(255,255,255,0.95)]"
            >
              <div className="mx-auto h-40 w-full max-w-44 shrink-0 overflow-hidden rounded border-4 border-white bg-green-50">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-4 flex flex-1 flex-col items-center justify-between min-w-0">
                <div className="w-full">
                  <h2 className="text-lg font-bold text-white">{member.name}</h2>
                  <p className="mt-1 inline-block rounded bg-white px-3 py-1 text-sm font-semibold text-[#347000]">
                    {member.title}
                  </p>
                </div>

                <div className="mt-4 w-full space-y-2 text-sm text-white">
                  <a
                    href={`tel:${member.phone.replace(/\s/g, '')}`}
                    className="flex w-full items-center justify-center gap-2 transition hover:text-green-100"
                  >
                    <FaPhoneAlt className="h-4 w-4 shrink-0 text-white" />
                    <span>{member.phone}</span>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex w-full items-center justify-center gap-2 text-center transition hover:text-green-100"
                  >
                    <FaEnvelope className="h-4 w-4 shrink-0 text-white" />
                    <span className="min-w-0 break-all leading-snug">{member.email}</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="mt-10 rounded border border-green-100 bg-white px-6 py-10 text-center text-gray-700 shadow">
            No team member found.
          </div>
        )}
      </section>
    </main>
  )
}
