import buttonImg from "../../assets/buttonImg.svg";
/*eslint no-dupe-keys: "Off"*/

const GREY = '#CCC';
const GREY_LIGHT = 'rgba(255, 255, 255, 0.4)';
const GREY_DIM = '#686868';

const styles = {
  content: {
    width: "75vw",
    height: "auto",
    margin: "auto",
    marginTop: "30px",
    textAlign: "center"
  },
  label: {
    textAlign: "center",
    display: "block",
    color: "white",
    fontSize: "15px"
  },
  transparentInput: {
    textAlign: "center",
    width: "90%",
    margin: "auto",
    color: "white",
    border: "none", // border or no border ???
    background: "rgba(240, 248, 255, 0.10)",
    background:
      "-moz-linear-gradient(left, rgba(240, 248, 255, 0.40) 0%, rgba(240, 248, 255, 0.25) 50%, rgba(240, 248, 255, 0.10) 100%)",
    background:
      "-webkit-linear-gradient(left, rgba(240, 248, 255, 0.40) 0%, rgba(240, 248, 255, 0.25) 50%, rgba(240, 248, 255, 0.10) 100%)",
    background:
      "linear-gradient(to right, rgba(240, 248, 255, 0.40) 0%, rgba(240, 248, 255, 0.25) 50%, rgba(240, 248, 255, 0.10) 100%)"
  },
  selectButton: {
    width: "55%",
    margin: "30px auto 30px 35px",
    textAlign: "center",
    backgroundImage: `url(${buttonImg})`,
    backgroundSize: "cover",
    border: "1px solid yellow"
  },
  resetButton: {
    paddingLeft: "30px",
    paddingRight: "30px",
    background: "#d020ba",
    background: "-moz-linear-gradient(left, #d020ba 0%, #BF28C3 10%, #6563E0 100%)",
    background: "-webkit-linear-gradient(left, #d020ba 0%, #BF28C3 10%, #6563E0 100%)",
    background: "linear-gradient(to right, #d020ba 0%, #BF28C3 10%, #6563E0 100%)",
    color: "yellow",
    border: "0.5px solid white",
    fontSize: "15px",
    cursor: "pointer"
  },
  runFunctionButton: {
    margin: "35px",
    width: "300px",
    height: "50px",
    background: "#d020ba",
    background: "-moz-linear-gradient(left, #d020ba 0%, #BF28C3 10%, #6563E0 100%)",
    background: "-webkit-linear-gradient(left, #d020ba 0%, #BF28C3 10%, #6563E0 100%)",
    background: "linear-gradient(to right, #d020ba 0%, #BF28C3 10%, #6563E0 100%)",
    color: "yellow",
    border: "0.5px solid white",
    padding: "8px",
    fontSize: "20px",
    cursor: "pointer",
    borderRadius: "25px",
    fontWeight: "600",
    letterSpacing: "2px"
  },
  transparentContainer: {
    borderRadius: "20px",
    background: "rgba(240, 248, 255, 0.10)",
    background:
      "-moz-linear-gradient(left, rgba(240, 248, 255, 0.40) 0%, rgba(240, 248, 255, 0.25) 50%, rgba(240, 248, 255, 0.10) 100%)",
    background:
      "-webkit-linear-gradient(left, rgba(240, 248, 255, 0.40) 0%, rgba(240, 248, 255, 0.25) 50%, rgba(240, 248, 255, 0.10) 100%)",
    background:
      "linear-gradient(to right, rgba(240, 248, 255, 0.40) 0%, rgba(240, 248, 255, 0.25) 50%, rgba(240, 248, 255, 0.10) 100%)",
    border: "1px solid",
    textAlign: "center",
    paddingTop: "30px",
    paddingBottom: "20px",
    fontSize: "25px",
    color: "white"
  },
  transparentContainerInside: {
    borderRadius: "15px",
    margin: "30px",
    marginTop: "15px",
    background: "rgba(240, 248, 255, 0.10)",
    background:
      "-moz-linear-gradient(left, rgba(240, 248, 255, 0.40) 0%, rgba(240, 248, 255, 0.25) 50%, rgba(240, 248, 255, 0.10) 100%)",
    background:
      "-webkit-linear-gradient(left, rgba(240, 248, 255, 0.40) 0%, rgba(240, 248, 255, 0.25) 50%, rgba(240, 248, 255, 0.10) 100%)",
    background:
      "linear-gradient(to right, rgba(240, 248, 255, 0.40) 0%, rgba(240, 248, 255, 0.25) 50%, rgba(240, 248, 255, 0.10) 100%)",
    border: "1px solid",
    textAlign: "center",
    paddingBottom: "20px",
    marginBottom: "0",
    fontSize: "25px",
    color: "white"
  },
  displayAssets: {
    alignSelf: "center",
    maxWidth: "50%",
    marginTop: "8px",
    margin: "auto",
    borderRadius: "8px",
    backgroundColor: "white",
    color: "black",
    opacity: "0.8"
  },

  // TABS:
  tabs: {
    height: "60px",
    color: "white",
    borderBottom: "none"
  },

  // Minter tab
  input: {
    width: "60%",
    margin: "auto",
    marginBottom: "30px",
    border: "1px solid #ddd",
    boxSizing: "border-box",
    display: "block"
  },
  input2: {
    width: "60%",
    margin: "auto",
    marginBottom: "10px",
    border: "1px solid #ddd",
    boxSizing: "border-box",
    display: "block"
  },
  textarea: {
    width: "60%",
    margin: "auto",
    marginBottom: "30px",
    display: "block"
  },
  select: {
    width: "100%",
    padding: "6px 10px",
    margin: "10px 0",
    border: "1px solid #ddd",
    boxSizing: "border-box",
    display: "block"
  },

  // Bundle tab
  uploadBox: {
    display: "flex-grid",
    marginTop: "40px",
    margin: "20px",
    padding: "15px",
    background: "rgba(240, 248, 255, 0.10)",
    background:
      "-moz-linear-gradient(left, rgba(240, 248, 255, 0.40) 0%, rgba(240, 248, 255, 0.25) 50%, rgba(240, 248, 255, 0.10) 100%)",
    background:
      "-webkit-linear-gradient(left, rgba(240, 248, 255, 0.40) 0%, rgba(240, 248, 255, 0.25) 50%, rgba(240, 248, 255, 0.10) 100%)",
    background:
      "linear-gradient(to right, rgba(240, 248, 255, 0.40) 0%, rgba(240, 248, 255, 0.25) 50%, rgba(240, 248, 255, 0.10) 100%)",
    borderRadius: "8px",
    opacity: "0.9",
    marginBottom: "20px",
    color: "white",
    fontSize: "15px"
  },
  zone: {
    alignItems: 'center',
    marginTop: "10px",
    marginBottom: "15px",
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: "#6d3ef7",
    backgroundColor:"white",
    color: "black",
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    padding: 20,
  },
  file: {
    background: 'linear-gradient(to bottom, rgb(243 213 232), rgb(22 0 110))',
    borderRadius: 20,
    display: 'flex',
    height: 100,
    width: "80%",
    position: 'relative',
    zIndex: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  info: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
  },
  size: {
    backgroundColor: GREY_LIGHT,
    borderRadius: 3,
    marginBottom: '0.5em',
    justifyContent: 'center',
    display: 'flex',
  },
  name: {
    backgroundColor: GREY_LIGHT,
    borderRadius: 3,
    fontSize: 18,
    marginBottom: '0.5em',
  },
  progressBar: {
    bottom: 14,
    position: 'absolute',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  zoneHover: {
    borderColor: GREY_DIM,
  },
  default: {
    borderColor: GREY,
  },
  remove: {
    height: 23,
    position: 'absolute',
    right: 6,
    top: 6,
    width: 23,
  },
  contentGrid: {
    marginBottom: "30px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "49% 2% 49%",
    fontSize: "15px"
  },

  // Claim tab
  displaySelected: {
    margin: "auto",
    marginTop: "50px",
    borderRadius: "8px",
    backgroundColor: "white",
    color: "black",
    opacity: "0.8",
    fontSize: "16px",
    width: "40%"
  },

  // MARKETPLACE:
  table: {
    margin: "0 auto",
    width: "1000px"
  }
};

export default styles;
