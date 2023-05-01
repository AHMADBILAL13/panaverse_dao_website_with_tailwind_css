import Image from 'next/image'
import Logo from '/public/logo.png'
import Link from 'next/link'
import Wrapper from '@/components/shared/Wrapper'

const Header = () => {
  return (
    <Wrapper>
    <header className="flex justify-between bg-slate-300 py-4 sticky items-center">
      {/* Logo */}
      <div>
      {/* <h2 className="text-xl">Panaverse DAO</h2> */}
      <Image src={Logo} alt='Panaverse DAO Logo' width={100} height={100} />
      </div>
      {/* Navigation Bar */}
      <ul className="flex space-x-8 font-semibold">
        <li>
        <Link href='/'>Home</Link>
          </li>
        <li>
          <Link href='/'>Courses</Link>
          </li>
      </ul>
    </header>
    </Wrapper>
  )
}

export default Header
