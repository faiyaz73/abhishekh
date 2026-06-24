import React, { useEffect, useState } from 'react'
import {
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaDonate,
  FaFacebookF,
  FaPaperPlane,
  FaRegClock,
  FaShareAlt,
  FaUserPlus,
  FaUsers,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa'
import heroImage from '../assets/hero.png'
import { Link } from 'react-router'



const slides = [
  {
    image: '/jankalyan-logo.jpeg',
    title: 'Jan Kalyan Samiti',
    subtitle: 'Samaj seva, sahyog aur badlav ke liye ek saath.',
  },
  {
    image: heroImage,
    title: 'Member Apply',
    subtitle: 'Naye members ke liye registration aur seva ka mauka.',
  },
  {
    image: '/jankalyan-logo.jpeg',
    title: 'Donate for Welfare',
    subtitle: 'Aapka yogdan kisi zaruratmand ke liye umeed ban sakta hai.',
  },
]

const quickLinks = [
  {
    title: 'Member Apply',
    to: '/member_apply',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=80',
  },
  {
    title: 'Donation',
    to: '/donate',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=500&q=80',
  },
]

const activityTabs = [
  { label: 'Member Apply', to: '/member_apply', icon: FaUserPlus },
  { label: 'Upcoming Events', to: '/upcomming', icon: FaCalendarAlt },
  { label: 'Management Team', to: '/manegment_team', icon: FaUsers },
  { label: 'Donate', to: '/donate', icon: FaDonate },
]

const galleryImages = [
  '/jankalyan-logo.jpeg',
  heroImage,
  '/jankalyan-logo.jpeg',
]

const memberProfiles = [
  {
    image: heroImage,
    name: 'Pushpendra Sharma',
    role: 'Member',
  },
  {
    image: '/jankalyan-logo.jpeg',
    name: 'Aman Kumar',
    role: 'Volunteer',
  },
  {
    image: heroImage,
    name: 'Ritika Verma',
    role: 'Supporter',
  },
]

const managementProfiles = [
  {
    image: '/jankalyan-logo.jpeg',
    name: 'Rakhi',
    role: 'Computer Trainer',
  },
  {
    image: heroImage,
    name: 'Sanjay Gupta',
    role: 'President',
  },
  {
    image: '/jankalyan-logo.jpeg',
    name: 'Neha Singh',
    role: 'Coordinator',
  },
]

const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    title: 'Community Support',
  },
  {
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
    title: 'Health Camp',
  },
  {
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
    title: 'Education Drive',
  },
  {
    image: 'https://images.unsplash.com/photo-1469571486292-b53601020f52?auto=format&fit=crop&w=800&q=80',
    title: 'Volunteer Team',
  },
]

const testimonials = [
  {
    name: 'Asha Devi',
    role: 'Parent',
    quote: 'Is samiti ke dwara milin se mere bacche ko achhi padhai aur sahara mila hai. Hum bahut prabhavit hain.',
  },
  {
    name: 'Rahul Singh',
    role: 'Volunteer',
    quote: 'Yahan ka kaam aur samajik seva ka drshtikon sach mein inspiring hai. Har activity me naya sankalp milta hai.',
  },
  {
    name: 'Meena Gupta',
    role: 'Donor',
    quote: 'Maine apna yogdan diya aur dekha ki kitne logo ki zindagi par asar pada. Bahut khushi mili.',
  },
]

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(testimonialTimer)
  }, [])

  const goToPrevious = () => {
    setActiveSlide((current) => (current === 0 ? slides.length - 1 : current - 1))
  }

  const goToNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length)
  }

  const goToPreviousTestimonial = () => {
    setActiveTestimonial((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    )
  }

  const goToNextTestimonial = () => {
    setActiveTestimonial((current) => (current + 1) % testimonials.length)
  }

  return (
    <main>
      <section className="relative h-90 w-full overflow-hidden bg-gray-900 sm:h-107.5 lg:h-130">
        {slides.map((slide, index) => (
          <div
            key={`${slide.title}-${index}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              activeSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-6xl px-6 text-white">
                <div className="max-w-2xl">
                  <p className="mb-3 inline-block rounded bg-green-600 px-4 py-1 text-sm font-semibold uppercase tracking-wide">
                    Welcome
                  </p>
                  <h1 className="text-3xl font-bold sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mt-4 max-w-xl text-base leading-7 text-gray-100 sm:text-xl">
                    {slide.subtitle}
                  </p>
                  <button className="mt-7 rounded bg-green-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-green-700">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-green-700 shadow-md transition hover:bg-white sm:left-8"
          aria-label="Previous slide"
        >
          <FaChevronLeft />
        </button>
        <button
          type="button"
          onClick={goToNext}
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-green-700 shadow-md transition hover:bg-white sm:right-8"
          aria-label="Next slide"
        >
          <FaChevronRight />
        </button>

        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActiveSlide(index)}
              className={`h-3 rounded-full transition-all ${
                activeSlide === index ? 'w-9 bg-green-500' : 'w-3 bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="bg-[#efffe2] px-3 py-6 sm:px-5 lg:px-8">
        <div className="mx-auto grid max-w-462.5 gap-5 xl:grid-cols-[190px_minmax(0,1fr)_195px]">
          <aside className="space-y-4 xl:sticky xl:top-4 xl:self-start">
            <div className="flex justify-center">
              <span className="min-w-32 rounded border border-green-800 bg-[#f8fff2] px-5 py-1 text-center text-sm text-green-950 shadow-[0_2px_5px_rgba(28,92,22,0.35)]">
                Recent activity
              </span>
            </div>

            <div className="rounded border border-green-800 bg-[#55a900] p-2 shadow-lg">
              <div className="rounded bg-[#f6ffef] px-3 py-6 text-center text-sm leading-6 text-green-900">
                <p>माँ यमुना में हुई नाविकों की ऐतिहासिक दौड़ इस पर क्या बोले नाविक सुनें</p>
                <p className="mt-4 font-semibold">Aman Jan sewa Samiti</p>
                <p className="mt-3">विश्व पर्यावरण दिवस के उपलक्ष्य मुख्य कार्यक्रम</p>
                <p className="mt-3 font-semibold uppercase">Aman Jan Sewa Samiti</p>
              </div>
            </div>

            {quickLinks.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="group relative block overflow-hidden rounded border-4 border-white bg-white shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-28 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 flex items-center justify-center px-2 text-center text-sm font-bold uppercase tracking-wide text-white">
                  {item.title} <span className="ml-1 text-xl">→</span>
                </div>
              </Link>
            ))}

            <div className="fixed left-0 top-1/2 z-30 hidden -translate-y-1/2 overflow-hidden rounded-r-lg shadow-lg md:block">
              <a href="https://www.facebook.com/" className="flex h-8 w-8 items-center justify-center bg-blue-600 text-white" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://www.youtube.com/" className="flex h-8 w-8 items-center justify-center bg-red-600 text-white" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="https://wa.me/" className="flex h-8 w-8 items-center justify-center bg-green-500 text-white" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </aside>

          <div className="min-w-0">
            <div className="mx-auto mb-3 flex max-w-xl gap-2 overflow-x-auto border-b-4 border-gray-300 pb-2">
              {activityTabs.map((item) => {
                const Icon = item.icon

                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="flex min-h-16 min-w-24 flex-col items-center justify-center rounded border border-green-950 bg-white px-3 text-center text-[11px] font-semibold text-green-900 transition hover:bg-green-50"
                  >
                    <Icon className="mb-1 text-xl" />
                    {item.label}
                  </Link>
                )
              })}
            </div>

            <div className="mb-4 flex justify-center">
              <span className="min-w-32 rounded border border-green-800 bg-[#f8fff2] px-5 py-1 text-center text-sm text-green-950 shadow-[0_2px_5px_rgba(28,92,22,0.25)]">
                Latest Activity
              </span>
            </div>

            <div className="space-y-3">
              <article className="rounded border border-green-900 bg-white p-2 shadow-sm">
                <div className="relative h-14 overflow-hidden rounded-sm bg-gray-200">
                  <img src={heroImage} alt="Latest video activity" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute left-8 top-1/2 flex -translate-y-1/2 gap-5 text-white">
                    <FaShareAlt />
                    <FaRegClock />
                  </div>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-black/35 px-4 py-2 text-xs font-semibold text-white">
                    Watch on <FaYoutube className="mx-1 inline text-sm" /> YouTube
                  </div>
                </div>
                <h3 className="border-b border-gray-200 px-1 py-2 text-sm font-medium text-gray-900">
                  माँ यमुना में हुई नाविकों की ऐतिहासिक दौड़ इस पर क्या बोले नाविक सुनें
                </h3>
                <div className="flex items-center justify-between border-b border-gray-200 px-3 py-1 text-[11px] text-gray-700">
                  <span>0 Comments</span>
                  <button type="button" className="font-medium">Report</button>
                </div>
                <div className="flex gap-1 pt-2">
                  <input
                    type="text"
                    placeholder="Comment here"
                    className="h-8 flex-1 rounded border border-gray-300 px-3 text-xs outline-none focus:border-green-600"
                  />
                  <button type="button" className="flex h-8 w-9 items-center justify-center rounded border border-gray-300 text-sky-500">
                    <FaPaperPlane />
                  </button>
                </div>
              </article>

              <article className="rounded border border-green-900 bg-white p-3 shadow-sm">
                <div className="mb-2 flex items-center justify-between text-xs">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-green-700 bg-green-100">
                    <img src="/jankalyan-logo.jpeg" alt="Activity logo" className="h-7 w-7 rounded-full object-cover" />
                  </div>
                  <div className="flex items-center gap-2 text-gray-800">
                    <span>May 28, 2025 at 11:36 AM</span>
                    <FaShareAlt />
                  </div>
                </div>
                <div className="relative flex min-h-71.25 items-center justify-center overflow-hidden bg-[#eef4fd]">
                  <button type="button" className="absolute left-8 text-3xl text-white/80" aria-label="Previous gallery image">
                    ‹
                  </button>
                  <div className="absolute right-4 top-3 rounded-full bg-gray-700 px-2 py-1 text-[11px] font-bold text-white">
                    3/8
                  </div>
                  <img
                    src={galleryImages[0]}
                    alt="Activity gallery"
                    className="h-72 w-full max-w-sm object-contain"
                  />
                  <button type="button" className="absolute right-8 text-3xl text-white/80" aria-label="Next gallery image">
                    ›
                  </button>
                </div>
              </article>
            </div>
          </div>

          <aside className="space-y-5 xl:sticky xl:top-4 xl:self-start">
            <ProfilePanel
              label="Member"
              data={memberProfiles}
              to="/team_member"
            />
            <ProfilePanel
              label="Management Team"
              data={managementProfiles}
              to="/manegment_team"
            />
          </aside>
        </div>
      </section>


      {/* about us desgin  */}
      <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex justify-center">
            <Link to='/about'>
            <button className="rounded bg-green-600 px-8 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-green-700">
              
              About Us
            </button>
          </Link>
          </div>

          <div className="grid items-center gap-8 rounded-lg border border-green-100 bg-white p-6 shadow-lg md:grid-cols-[280px_1fr] md:p-10">
            <div className="flex justify-center">
              <div className="flex h-48 w-48 items-center justify-center rounded-lg border border-green-100 bg-green-50 p-4 shadow-sm sm:h-56 sm:w-56">
                <img
                  src="/jankalyan-logo.jpeg"
                  alt="Jan Kalyan Samiti logo"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Jan Kalyan 
              </h2>
              <p className="mt-4 text-base leading-8 text-gray-s700">
                Jan Kalyan Samiti samajik seva, sahyog aur lok kalyan ke liye
                kaam karne wali sanstha hai. Hamara uddeshya zaruratmand logo
                tak sahayata pahunchana, members ko seva se jodna aur samaj me
                sakaratmak badlav lana hai.
              </p>
              <p className="mt-3 text-base leading-8 text-gray-700">
                Aap member apply, donation, events aur gallery ke madhyam se
                hamare karya ke baare me adhik jankari prapt kar sakte hain.
                <Link to='/about'>
                <button
                className='bg-green-500 px-4 text-amber-50 rounded-2xl border-2 align-middle flex justify-end mt-5' 
                >Read More</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex justify-center">
            <Link to='/about'>
            <button className="rounded bg-green-600 px-4 py-1 text-lg font-semibold text-white shadow-md transition hover:bg-green-700">
            Secretary Message
            </button>
          </Link>
          </div>

          <div className="grid items-center gap-8 rounded-lg border border-green-100 bg-white p-6 shadow-lg md:grid-cols-[280px_1fr] md:p-10">
            <div className="flex justify-center">
              <div className="flex h-48 w-48 items-center justify-center rounded-lg border border-green-100 bg-green-50 p-4 shadow-sm sm:h-56 sm:w-56">
                <img
                  src="/jankalyan-logo.jpeg"
                  alt="Jan Kalyan Samiti logo"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div>
             
              <p className="mt-4 text-base leading-8 text-gray-s700">
               
Dear Friends,
              </p>
              <p className="mt-3 text-base leading-8 text-gray-700">
                t is with great pride and humility that I address you as the President of AMAN JAN SEWA SAMITI. Since our founding 2005, our organization has been driven by a simple yet profound belief: that every individual, regardless of circumstance, deserves the opportunity to thrive.

At AMAN JAN SEWA SAMITI, we are not just dreamers; we are doers. We roll up our sleeves and work tirelessly to turn our vision of a better world into reality. From providing access to education and healthcare to championing environmental sustainability and social justice, our efforts are guided by a deep commitment to making a meaningful difference in the lives of others.

But we cannot do it alone. Our success is built on the support of passionate individuals like you—individuals...
                <Link to='/about'>
                <button
                className='bg-green-500 px-4 text-amber-50 rounded-2xl border-2 align-middle flex justify-end mt-5' 
                >Read More</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className='bg-gray-50 px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='text-center'>
            <span className='inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700'>
              Our Focus Areas
            </span>
            <h2 className='mt-3 text-3xl font-bold text-gray-900 sm:text-4xl'>
              Our Objectives
            </h2>
          </div>

          <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5'>
            <Link
              to='/environment'
              className='group relative overflow-hidden rounded-2xl border border-green-100 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl'
            >
              <img
                className='h-64 w-full object-cover transition duration-500 group-hover:scale-105'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RgoNrHq5hpbqCfDLHT40jaHr65jZK9ciKA&s'
                alt='Environment'
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent' />
              <div className='absolute bottom-0 left-0 right-0 p-4'>
                <h3 className='text-lg font-bold text-white'>Environment</h3>
              </div>
            </Link>

            <Link
              to='/socile_walfare'
              className='group relative overflow-hidden rounded-2xl border border-green-100 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl'
            >
              <img
                className='h-64 w-full object-cover transition duration-500 group-hover:scale-105'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RgoNrHq5hpbqCfDLHT40jaHr65jZK9ciKA&s'
                alt='Social Welfare'
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent' />
              <div className='absolute bottom-0 left-0 right-0 p-4'>
                <h3 className='text-lg font-bold text-white'>Social Welfare</h3>
              </div>
            </Link>

            <Link
              to='/health'
              className='group relative overflow-hidden rounded-2xl border border-green-100 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl'
            >
              <img
                className='h-64 w-full object-cover transition duration-500 group-hover:scale-105'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RgoNrHq5hpbqCfDLHT40jaHr65jZK9ciKA&s'
                alt='Health & Research'
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent' />
              <div className='absolute bottom-0 left-0 right-0 p-4'>
                <h3 className='text-lg font-bold text-white'>Health & Research</h3>
              </div>
            </Link>

            <Link
              to='/education'
              className='group relative overflow-hidden rounded-2xl border border-green-100 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl'
            >
              <img
                className='h-64 w-full object-cover transition duration-500 group-hover:scale-105'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RgoNrHq5hpbqCfDLHT40jaHr65jZK9ciKA&s'
                alt='Education & Training'
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent' />
              <div className='absolute bottom-0 left-0 right-0 p-4'>
                <h3 className='text-lg font-bold text-white'>Education & Training</h3>
              </div>
            </Link>

            <Link
              to='/humanrights'
              className='group relative overflow-hidden rounded-2xl border border-green-100 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl'
            >
              <img
                className='h-64 w-full object-cover transition duration-500 group-hover:scale-105'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RgoNrHq5hpbqCfDLHT40jaHr65jZK9ciKA&s'
                alt='Human Rights'
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent' />
              <div className='absolute bottom-0 left-0 right-0 p-4'>
                <h3 className='text-lg font-bold text-white'>Human Rights</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className='bg-white px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-8 flex items-center justify-between'>
            <div>
              <span className='inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700'>
                Moments
              </span>
              <h2 className='mt-3 text-3xl font-bold text-gray-900'>Gallery</h2>
            </div>
            <Link
              to='/gallery'
              className='hidden rounded-full border border-green-600 px-4 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-50 md:inline-block'
            >
              View All
            </Link>
          </div>

          <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
            {galleryItems.map((item) => (
              <div key={item.title} className='group overflow-hidden rounded-2xl border border-green-100 bg-white shadow-md'>
                <div className='relative overflow-hidden'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='h-64 w-full object-cover transition duration-500 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent' />
                  <div className='absolute bottom-0 left-0 right-0 p-4'>
                    <h3 className='text-base font-semibold text-white'>{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-[#f7fbf1] px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-6xl'>
          <div className='text-center'>
            <span className='inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700'>
              Voices of Support
            </span>
            <h2 className='mt-3 text-3xl font-bold text-gray-900'>Testimonials</h2>
          </div>

          <div className='mt-8 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-green-100 sm:p-10'>
            <div className='relative'>
              <button
                type='button'
                onClick={goToPreviousTestimonial}
                className='absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-green-50 p-2 text-green-700 transition hover:bg-green-100'
                aria-label='Previous testimonial'
              >
                ‹
              </button>
              <button
                type='button'
                onClick={goToNextTestimonial}
                className='absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-green-50 p-2 text-green-700 transition hover:bg-green-100'
                aria-label='Next testimonial'
              >
                ›
              </button>

              <div className='mx-auto max-w-3xl px-8 text-center'>
                <div className='mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl text-green-700'>
                  “
                </div>
                <p className='mt-4 text-base leading-7 text-gray-700 sm:text-lg'>
                  {testimonials[activeTestimonial].quote}
                </p>
                <h3 className='mt-5 text-lg font-bold text-gray-900'>
                  {testimonials[activeTestimonial].name}
                </h3>
                <p className='text-sm text-green-700'>
                  {testimonials[activeTestimonial].role}
                </p>
              </div>
            </div>

            <div className='mt-6 flex justify-center gap-2'>
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type='button'
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeTestimonial ? 'w-8 bg-green-600' : 'w-2.5 bg-green-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>

   
  )
}

function ProfilePanel({ label, data, to }) {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? data.length - 1 : current - 1))
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % data.length)
  }

  const currentProfile = data[activeIndex]

  return (
    <div>
      <div className="mb-3 flex justify-center">
        <span className="min-w-32 rounded border border-green-800 bg-[#f8fff2] px-5 py-1 text-center text-sm text-green-950 shadow-[0_2px_5px_rgba(28,92,22,0.35)]">
          {label}
        </span>
      </div>
      <div className="rounded bg-white p-2 shadow-xl">
        <div className="relative overflow-hidden bg-[#55a900] p-3 text-white">
          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-r-md bg-black/10 px-2 py-1 text-3xl text-white/80 transition hover:bg-black/20"
            aria-label={`Previous ${label}`}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-l-md bg-black/10 px-2 py-1 text-3xl text-white/80 transition hover:bg-black/20"
            aria-label={`Next ${label}`}
          >
            ›
          </button>

          <div key={currentProfile.name + activeIndex} className="transition-all duration-300 ease-in-out">
            <img
              src={currentProfile.image}
              alt={currentProfile.name}
              className="mx-auto h-36 w-36 rounded border border-white/70 object-cover"
            />
            <div className="mx-auto mt-2 max-w-36 bg-[#3d8b00] px-2 py-2 text-center text-sm font-bold leading-5">
              {currentProfile.name}
              <br />
              ({currentProfile.role})
            </div>
          </div>

          <div className="mx-auto mt-3 flex max-w-28 justify-center gap-2">
            {data.map((_, index) => (
              <span
                key={`${label}-${index}`}
                className={`h-1.5 rounded-full transition-all ${
                  index === activeIndex ? 'w-6 bg-white' : 'w-3 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <Link to={to} className="mt-2 block text-center text-xs font-bold text-green-900 hover:text-green-700">
        View All
      </Link>
    </div>
  )
}

