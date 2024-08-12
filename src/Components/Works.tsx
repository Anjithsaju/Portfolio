import "./Works.css";
interface Props {
  workclass: string; // Add the pid prop to the Props interface
}
function Works({ workclass }: Props) {
  return (
    <>
      <div className="maindiv">
        {/* <img className="temp" src="./src/Images/template.png" alt="" /> */}
        <div className={workclass}>
          {/* <img src="./src/Images/mywork.gif" alt="" className="work" /> */}
          {/* <h2>My Works</h2> */}
          <div className="carddiv">
            <div id="crd" className="card">
              <img
                src="https://i.postimg.cc/bJwgTqd0/split.png"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">Split-App</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                src="https://i.postimg.cc/LsNBhGvJ/expense.png"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">Expense Tracker</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a
                  href="https://anjithsaju.github.io/Expenses/"
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
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">Sign in</h5>
                <p className="card-text">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                src="https://i.postimg.cc/3RqXFps7/link.png"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">Linktree</h5>
                <p className="card-text">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a
                  href="https://anjithsaju.github.io/Linktree/"
                  target="_blank"
                  className="btn btn-danger"
                >
                  Visit Site
                </a>
                {/* <a
                href="https://anjithsaju.github.io/Linktree/"
                target="_blank"
                className="btn btn-info"
                style={{ marginLeft: "1.1vw" }}
                >
                View Code
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Works;
