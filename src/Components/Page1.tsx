import "./Styles.css";

function Page1() {
  return (
    <>
      <div className="page1">
        <img
          src="https://i.postimg.cc/SsZR83Qk/hi.gif"
          alt="nothing"
          className="imgname"
        />

        <img
          src="https://i.postimg.cc/dVkNW1B5/fog.gif"
          alt="nothing"
          className="fog"
        />
        <div
          className="nav
        "
        >
          <button id="btn1" type="button" className="btn btn-primary">
            Primary
          </button>
          <button id="btn1" type="button" className="btn btn-primary">
            Primary
          </button>
          <button id="btn1" type="button" className="btn btn-primary">
            Primary
          </button>
          <button id="btn1" type="button" className="btn btn-primary">
            Primary
          </button>
        </div>
        {/* <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button> */}
      </div>
    </>
  );
}

export default Page1;
