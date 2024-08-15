export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <img
        className="w-[500px] rounded-full"
        src="../../public/logo1x1.jpeg"
        alt=""
      />
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Clear Bunny Software Agency</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a
            onClick={() => {
              contentRef.current?.scrollInToView
            }}
            className="mr-5 hover:text-gray-900"
          >
            contentyyyyyyyyyyyyyyyyy
          </a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
      </div>
    </header>
  )
}
