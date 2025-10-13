export default function NavBar({ onOpenContact }) {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 flex justify-between items-center">
        <a href="/" className="btn btn-ghost text-xl text-primary">
          Bushwick Guitar Studio <span className="text-3xl ml-2 mb-2">🎸</span>
        </a>
        <div className="flex gap-4 mr-4 items-center">
          <a href="/pricing" className="btn btn-ghost">
            Pricing
          </a>
          <a href="/about" className="btn btn-ghost">
            About
          </a>
          <button
            className="btn btn-primary"
            onClick={() => onOpenContact && onOpenContact()}
          >
            Contact Us
          </button>
        </div>
      </div>
      {/* <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <span className="text-3xl">🎸</span>
        </button>
      </div> */}
    </div>
  )
}
