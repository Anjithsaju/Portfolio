import "./Works.css";

function Works() {
  return (
    <>
      <div className="carddiv">
        <div id="crd" className="card">
          <img
            src="https://i.postimg.cc/bJwgTqd0/split.png"
            className="card-img-top"
            alt="Split-App"
          />
          <div className="card-body">
            <h5 className="card-title">Split-App</h5>
            <p className="card-text">
              Split group expenses and track balances with ease.
            </p>
            <a
              href="https://anjithsaju.github.io/"
              target="_blank"
              className="btn btn-danger"
            >
              Visit Site
            </a>
          </div>
        </div>

        <div id="crd" className="card">
          <img
            src="https://i.postimg.cc/t4x05cgx/Screenshot-2025-04-17-232540.png"
            className="card-img-top"
            alt="Baaki Pinne Tharam"
          />
          <div className="card-body">
            <h5 className="card-title">Baaki Pinne Tharam</h5>
            <p className="card-text">
              Curious??....Check out the site to know more.
            </p>
            <a
              href="https://baakipinnetharam.vercel.app/"
              target="_blank"
              className="btn btn-danger"
            >
              Visit Site
            </a>
          </div>
        </div>

        <div id="crd" className="card">
          <img
            src="https://i.postimg.cc/D0bqj0hG/sign.png"
            className="card-img-top"
            alt="Talents"
          />
          <div className="card-body">
            <h5 className="card-title">Talents</h5>
            <p className="card-text">
              A platform to post and discover unique talents.
            </p>
            <a
              href="https://anjithsaju.github.io/sighinAS.github.io/"
              target="_blank"
              className="btn btn-danger"
            >
              Visit Site
            </a>
          </div>
        </div>

        <div id="crd" className="card">
          <img
            src="https://i.postimg.cc/8CR28rMk/Screenshot-2025-04-17-232610.png"
            className="card-img-top"
            alt="THEIA"
          />
          <div className="card-body">
            <h5 className="card-title">THEIA</h5>
            <p className="card-text">
              AI-powered device to help the visually impaired.
            </p>
            <a
              href="https://theia-pied.vercel.app/"
              target="_blank"
              className="btn btn-danger"
            >
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
