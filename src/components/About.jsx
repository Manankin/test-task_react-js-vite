import '../styles/about.scss';

export default function About() {
  return (
    <div className="about">
      <h2 className="about__title">About us</h2>
      <iframe
        className='about__video'
        src="https://www.youtube.com/embed/9Kw6MRZZQ6E?si=3lj4w2RxhLSQbadb"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      >
      </iframe>
    </div>
  )
}