function Works() {
  return (
    <>
      <div className="workdiv">
        {/* <img src="./src/Images/mywork.gif" alt="" className="work" /> */}

        <div className="carddiv">
          <div className="card" style={{ width: "18rem" }}>
            <img src="./src/Images/split.png" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">{}</h5>
              <p className="card-text">{}</p>
              <a href="" className="btn btn-primary">
                {}
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="./src/Images/expense.png"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">{}</h5>
              <p className="card-text">{}</p>
              <a href="" className="btn btn-primary">
                {}
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src="./src/Images/sign .png" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">{}</h5>
              <p className="card-text">{}</p>
              <a href="" className="btn btn-primary">
                {}
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src="./src/Images/link.png" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">{}</h5>
              <p className="card-text">{}</p>
              <a href="" className="btn btn-primary">
                {}
              </a>
            </div>
          </div>
        </div>
        <p className="typewriter">This text will type out like a typewriter.</p>
      </div>
    </>
  );
}
export default Works;
