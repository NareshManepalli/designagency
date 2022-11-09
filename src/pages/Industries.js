import Agritech from "./Components/Agritech.png";
import IT from "./Components/IT.png";
import Mobile from "./Components/Mobile.png";
import Travel from "./Components/Travel.png";
import Education from "./Components/Education.png";
import Retail from "./Components/Retail.png";
import Hospitality from "./Components/Hospitality.png";
import Health from "./Components/Health.png";
import Media from "./Components/Media.png";

function Industries() {
  const measurement = {
    backgroundColor: "#EDEDED",
    color: "#000000",
    paddingBottom: "40px",
  };

  const Heading = {
    fontSize: "42px",
    color: "#000000",
    textAlign: "center",
    fontWeight: 800,
    paddingTop: "60px",
    paddingBottom: "40px",
    fontFamily: "'Poppins', sans-serif",
  };

  const cardMenu = {
    paddingLeft: "60px",
  };

  const image = {
    marginRight: "30px",
    width: "75px",
    height: "75px",
    verticalAlign: "middle",
  };

  const text = {
    fontSize: "13px",
    color: "#000000",
    fontWeight: 600,
    fontFamily: "'Poppins', sans-serif",
    marginTop: "100px",
  };

  const row = {
    padding: "20px",
    margin: "10px",
  };

  return (
    <div className="container-fluid" style={measurement}>
      <div>
        <h1 style={Heading}>
          WE ARE WORKING <br />
          WITH THESE INDUSTRIES
        </h1>
      </div>

      <div style={cardMenu}>
        <div className="row" style={row}>
          <div className="col-sm-4">
            <div className="container-sm">
              <img
                src={Media}
                alt="some"
                className="float-start"
                style={image}
              />
              <span style={text}>
                MEDIA & <br /> ENTERTAINMENT
              </span>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="container-sm">
              <img
                src={Health}
                alt="some"
                className="float-start"
                style={image}
              />
              <span style={text}>
                HEALTH CARE & <br />
                WELLNESS
              </span>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="container-sm">
              <img
                src={Hospitality}
                alt="some"
                className="float-start"
                style={image}
              />
              <span style={text}>
                HOSPITALITY & <br />
                REAL ESTATE
              </span>
            </div>
          </div>
        </div>

        <div className="row" style={row}>
          <div className="col-sm-4">
            <div className="container-sm">
              <img
                src={Retail}
                alt="some"
                className="float-start"
                style={image}
              />
              <span style={text}>
                RETAIL & <br />E COMMERCE
              </span>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="container-sm">
              <img
                src={Education}
                alt="some"
                className="float-start"
                style={image}
              />
              <span style={text}>
                EDUCATION & <br />
                LEARNING
              </span>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="container-sm">
              <img
                src={Travel}
                alt="some"
                className="float-start"
                style={image}
              />
              <span style={text}>
                TRAVEL & <br /> TRANSPORT
              </span>
            </div>
          </div>
        </div>

        <div className="row" style={row}>
          <div className="col-sm-4">
            <div className="container-sm">
              <img
                src={Mobile}
                alt="some"
                style={image}
                className="float-start"
              />
              <span style={text}>
                MOBILE & <br />
                TELECOM
              </span>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="container-sm">
              <img src={IT} alt="some" style={image} className="float-start" />
              <span style={text}>IT & ITES</span>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="container-sm">
              <img
                src={Agritech}
                alt="some"
                style={image}
                className="float-start"
              />
              <span style={text}>AGRITECH</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Industries;
