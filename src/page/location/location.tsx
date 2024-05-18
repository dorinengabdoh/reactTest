import "./location.css";
const Location = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="locationContainer">
          <div className="saveLcation">
            <div className="saveLocationleft">
              <h1 className="number">152</h1>
              <p className="bold">Saved Locations</p>
              <div className="add">
                <img className="" src="../src/assets/icons/Add.svg" alt="" />
                <p className="text">4 newly saved locations </p>
              </div>
            </div>
            <div className="saveLocationRight">
              <img
                className="saveLoc"
                src="../src/assets/icons/savelocation.svg"
                alt=""
              />
            </div>
          </div>
          <div className="saveLcation">
            <div className="saveLocationleft">
              <h1 className="number">78</h1>
              <p className="bold">Active Locations</p>
              <div className="add">
                <img className="" src="../src/assets/icons/Add.svg" alt="" />{" "}
                <p className="text">2 newly saved locations </p>
              </div>
            </div>
            <div className="saveLocationRight">
              <img
                className="saveLoc"
                src="../src/assets/icons/activelocation.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="addLocation">
          <div className="searchLocation">
            <div className="search">
              <img
                className="searchIcon"
                src="../src/assets/icons/search-normal.svg"
                alt=""
              />
              <p>Search location</p>
            </div>
            <div className="filter">
              <p>Filter By</p>
              <img
                className="arrow"
                src="../src/assets/icons/arrow-down.svg"
                alt=""
              />
            </div>
            <div className="filter">
              <p>Sort By</p>
              <img
                className="arrow"
                src="../src/assets/icons/arrow-down.svg"
                alt=""
              />
            </div>
          </div>
          <div>
            <button className="addlocation">
              <img src="../src/assets/icons/location.svg" alt="" />
              <p>Add Location</p>
            </button>
          </div>
        </div>
        <div className="data">
          <div className="texte">
            <p className="export">Export Data</p>
            <button className="btn">CSV</button>
            <button className="btn">PDF</button>
            <button className="btn">EXCEL</button>
          </div>
          <div className="table">
            <div className="title">
              <img src="../src/assets/icons/Checkbox.svg" alt="" />
              <div className="city">
                <p>Town/City</p>
                <img src="../src/assets/icons/down.svg" alt="" />
              </div>
              <div className="city">
                <p>Employees Onsite</p>
                <img
                  className="icon"
                  src="../src/assets/icons/down.svg"
                  alt=""
                />
              </div>
              <div className="citi">
                <p>Download QRCode</p>
                <img src="../src/assets/icons/down.svg" alt="" />
              </div>
              <div className="city">
                <p>Action</p>
                <img src="../src/assets/icons/down.svg" alt="" />
              </div>
            </div>
            <div className="city1">
              <img src="../src/assets/icons/Checkbox.svg" alt="" />
              <div className="city">
                <p>Bastos,Yaounde</p>
              </div>
              <div className="city">
                <img
                  className="people1"
                  src="../src/assets/icons/people1.svg"
                  alt=""
                />
                <img
                  className="people2"
                  src="../src/assets/icons/people2.svg"
                  alt=""
                />
                <img
                  className="image"
                  src="../src/assets/icons/image 287.svg"
                  alt=""
                />
                <p className="none"></p>
              </div>
              <button className="BtnN">Download QRCode</button>
              <div className="citys">
                <img src="../src/assets/icons/eye.svg" alt="" />
                <img src="../src/assets/icons/edit.svg" alt="" />
                <img src="../src/assets/icons/trash.svg" alt="" />
              </div>
            </div>
            <div className="city2">
              <img src="../src/assets/icons/Checkbox.svg" alt="" />
              <div className="city">
                <p>  Moly kodd, Buea</p>
              </div>
              <div className="city">
                <img
                  className="people1"
                  src="../src/assets/icons/people1.svg"
                  alt=""
                />
                <img
                  className="people2"
                  src="../src/assets/icons/people2.svg"
                  alt=""
                />
                <img
                  className="image"
                  src="../src/assets/icons/image 287.svg"
                  alt=""
                />
                <p className="none"></p>
              </div>
              <button className="BtnN">Download QRCode</button>
              <div className="citys">
                <img src="../src/assets/icons/eye.svg" alt="" />
                <img src="../src/assets/icons/edit.svg" alt="" />
                <img src="../src/assets/icons/trash.svg" alt="" />
              </div>
            </div>
            <div className="city1">
              <img src="../src/assets/icons/Checkbox.svg" alt="" />
              <div className="city">
                <p>Small Soppo,Buea</p>
              </div>
              <div className="city">
                <img
                  className="people1"
                  src="../src/assets/icons/people1.svg"
                  alt=""
                />
                <img
                  className="people2"
                  src="../src/assets/icons/people2.svg"
                  alt=""
                />
                <img
                  className="image"
                  src="../src/assets/icons/image 287.svg"
                  alt=""
                />
                <p className="none"></p>
              </div>
              <button className="BtnN">Download QRCode</button>
              <div className="citys">
                <img src="../src/assets/icons/eye.svg" alt="" />
                <img src="../src/assets/icons/edit.svg" alt="" />
                <img src="../src/assets/icons/trash.svg" alt="" />
              </div>
            </div>
            <div className="city2">
              <img src="../src/assets/icons/Checkbox.svg" alt="" />
              <div className="city">
                <p>Simbock,Yaounde</p>
              </div>
              <div className="city">
                <img
                  className="people1"
                  src="../src/assets/icons/people1.svg"
                  alt=""
                />
                <img
                  className="people2"
                  src="../src/assets/icons/people2.svg"
                  alt=""
                />
                <img
                  className="image"
                  src="../src/assets/icons/image 287.svg"
                  alt=""
                />
                <p className="none"></p>
              </div>
              <button className="BtnN">Download QRCode</button>
              <div className="citys">
                <img src="../src/assets/icons/eye.svg" alt="" />
                <img src="../src/assets/icons/edit.svg" alt="" />
                <img src="../src/assets/icons/trash.svg" alt="" />
              </div>
            </div>
            <div className="bottom">
              <button className="prevBtn">prev</button>
              <p><span className="one">1</span> 2  3 5 - 19</p>
              <button className="prevBtn">Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
