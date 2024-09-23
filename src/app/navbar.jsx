export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 flex justify-between">
        <a className="btn btn-ghost text-xl text-primary">
          Bushwick Guitar Studio <span className="text-3xl ml-2 mb-2">🎸</span>
        </a>
        <div className="flex mr-4">
          <a
            className="btn btn-primary"
            href="sms:+13476354588&?body=Hi, I'm interested in guitar lessons."
          >
            Text us!
          </a>
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
