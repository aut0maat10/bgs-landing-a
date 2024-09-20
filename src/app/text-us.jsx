export default function TextUs() {
  return (
    <div className="container py-8 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Questions? Text us!</h2>
      <p className="text-2xl text-secondary mb-4">(347) 635-4588</p>
      <a
        className="btn btn-primary animate-pulse"
        href="sms://+13476354588&?body=Hi, I'm interested in guitar lessons."
      >
        Text us!
      </a>
      <div className="text-5xl animate-bounce pl-16 mt-2">👆</div>
    </div>
  );
}
