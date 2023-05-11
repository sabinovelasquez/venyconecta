import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Home">
      <img src='images/iso.svg' alt='Ven y Conecta' />
    </Link>
  )
}
