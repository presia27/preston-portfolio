import Link from 'next/link';

export default function NotFound() {
  return(
    <main className="contentMargins mt-32">
      <h1 className="bigHeader">404: Page Not Found</h1>
      <Link href="/" className='link text-2xl'>
        Return Home
      </Link>
    </main>
  )
}
