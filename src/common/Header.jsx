import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaHome } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isImportantDropdownOpen, setIsImportantDropdownOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsDropdownOpen(false)
    setIsImportantDropdownOpen(false)
  }

  return (
    <nav className="w-full top-0 z-20 border-default bg-[#59A404]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between p-4">
        <Link to="/" className="text-cyan-50" onClick={closeMenu}>
          <FaHome className="text-3xl" />
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-base p-2 text-body hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary md:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth={2}
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>

        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="mt-4 flex flex-col rounded-base border border-default bg-neutral-secondary-soft p-4 text-amber-50 font-medium md:mt-0 md:flex-row md:space-x-5 md:border-0 md:bg-neutral-primary md:p-0 md:mr-7">
            <li>
              <Link
                to="/member_apply"
                onClick={closeMenu}
                className="block rounded px-3 py-2 md:bg-transparent md:p-0 md:text-fg-brand"
                aria-current="page"
              >
                Member Apply
              </Link>
            </li>
            <li className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded px-3 py-2 font-medium text-heading hover:bg-neutral-tertiary md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-fg-brand"
                aria-expanded={isDropdownOpen}
              >
                About Us
                <svg
                  className="ms-1.5 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`${isDropdownOpen ? 'block' : 'hidden'} z-10 mt-2 w-44 rounded border border-green-100 bg-white text-gray-800 shadow-lg md:absolute md:left-0 md:top-full`}
              >
                <ul className="p-2 text-sm font-medium">
                  <li>
                    <Link to="/about" onClick={closeMenu} className="inline-flex w-full items-center rounded p-2 hover:bg-green-50 hover:text-green-700">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/team_member" onClick={closeMenu} className="inline-flex w-full items-center rounded p-2 hover:bg-green-50 hover:text-green-700">
                      Team Member
                    </Link>
                  </li>
                  <li>
                    <Link to="/manegment_team" onClick={closeMenu} className="inline-flex w-full items-center rounded p-2 hover:bg-green-50 hover:text-green-700">
                      Management Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/latestevent" onClick={closeMenu} className="inline-flex w-full items-center rounded p-2 hover:bg-green-50 hover:text-green-700">
                      Latest Event
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/idcarddownload" onClick={closeMenu} className="block rounded px-3 py-2 text-heading hover:bg-neutral-tertiary md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-fg-brand">
                ID Card Download
              </Link>
            </li>
            <li>
              <Link to="/upcomming" onClick={closeMenu} className="block rounded px-3 py-2 text-heading hover:bg-neutral-tertiary md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-fg-brand">
                Upcomming Event
              </Link>
            </li>
            <li>
              <Link to="/donate" onClick={closeMenu} className="block rounded px-3 py-2 text-heading hover:bg-neutral-tertiary md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-fg-brand">
                Donate
              </Link>
            </li>
            <li>
              <Link to="/donors" onClick={closeMenu} className="block rounded px-3 py-2 text-heading hover:bg-neutral-tertiary md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-fg-brand">
                List of Donors
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={closeMenu} className="block rounded px-3 py-2 text-heading hover:bg-neutral-tertiary md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-fg-brand">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu} className="block rounded px-3 py-2 text-heading hover:bg-neutral-tertiary md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-fg-brand">
                Contact Us
              </Link>
            </li>
            <li className="relative">
              <button
                type="button"
                onClick={() => setIsImportantDropdownOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded px-3 py-2 font-medium text-heading hover:bg-neutral-tertiary md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-fg-brand"
                aria-expanded={isImportantDropdownOpen}
              >
                Important Links
                <svg
                  className="ms-1.5 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`${isImportantDropdownOpen ? 'block' : 'hidden'} z-10 mt-2 w-52 rounded border border-green-100 bg-white text-gray-800 shadow-lg md:absolute md:right-0 md:top-full`}
              >
                <ul className="p-2 text-sm font-medium">
                  <li>
                    <Link to="/importantlink" onClick={closeMenu} className="inline-flex w-full items-center rounded p-2 hover:bg-green-50 hover:text-green-700">
                      Important Link
                    </Link>
                  </li>
                  <li>
                    <Link to="/idcarddownload" onClick={closeMenu} className="inline-flex w-full items-center rounded p-2 hover:bg-green-50 hover:text-green-700">
                      ID Card Download
                    </Link>
                  </li>
                  <li>
                    <Link to="/donors" onClick={closeMenu} className="inline-flex w-full items-center rounded p-2 hover:bg-green-50 hover:text-green-700">
                      List of Donors
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={closeMenu} className="inline-flex w-full items-center rounded p-2 hover:bg-green-50 hover:text-green-700">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/login" onClick={closeMenu} className="block rounded px-3 py-2 text-heading hover:bg-neutral-tertiary md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-fg-brand">
                LogIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
