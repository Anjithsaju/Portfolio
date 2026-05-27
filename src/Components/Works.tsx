import "./Works.css";

function Works() {
  return (
    <>
      <div className="carddiv">
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
            src="https://i.postimg.cc/RCGcfTLd/mayor.jpg"
            className="card-img-top"
            alt="Sanin Story"
          />

          <div className="card-body">
            <h5 className="card-title">Sanin Story</h5>

            <p className="card-text">
              Memories from my Japan internship journey.
            </p>

            <a
              href="https://saninstory.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
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

        <div id="crd" className="card">
          <img
            src="https://the6thsense.vercel.app/model.jpg"
            className="card-img-top"
            alt="6th Sense"
          />

          <div className="card-body">
            <h5 className="card-title">6th Sense</h5>

            <p className="card-text">
              AI-powered smart safety helmet for two-wheelers.
            </p>

            <a
              href="https://the6thsense.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
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
