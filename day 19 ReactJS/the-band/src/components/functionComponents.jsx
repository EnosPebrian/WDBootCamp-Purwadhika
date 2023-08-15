function Header() {
  return (
    <nav>
      <div className="nav-left">
        <div className="nav-item">HOME</div>
        <div className="nav-item">BAND</div>
        <div className="nav-item">TOUR</div>
        <div className="nav-item">CONTACT</div>
        <div className="nav-item">MORE</div>
      </div>
      <div className="nav-right nav-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          {" "}
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            fill="white"
          ></path>{" "}
        </svg>
      </div>
    </nav>
  );
}

function Imgsection() {
  return (
    <div className="homepicture flex-col-center">
      <img
        id="big_image"
        src="https://www.w3schools.com/w3images/ny.jpg"
        alt="performing band"
        width={"100%"}
      />
      <div className="flex-col-center picture-text">
        <div
          className="color-white"
          style={{ margin: "10px 0", fontSize: "24px" }}
        >
          New York
        </div>
        <div style={{ padding: "3px 0", margin: "15px 0" }}>
          <p className="color-white">
            The atmosphere in New York is lorem ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about-component flex-col-center">
      <div style={{ width: "100%", fontSize: "30px", margin: "10px 0" }}>
        THE BAND
      </div>
      <div style={{ width: "100%", fontSize: "15px", margin: "15px 0" }}>
        <i>We love music</i>
      </div>
      <div style={{ margin: "15px 0", textAlign: "justify" }}>
        We have created a fictional band website. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
      <div className="personel">
        <div>
          <div className="personel-name">Name</div>
          <img
            src="https://www.w3schools.com/w3images/bandmember.jpg"
            width={"60%"}
            style={{ marginBottom: "16px" }}
            alt="band member"
          />
        </div>
        <div>
          <div className="personel-name">Name</div>
          <img
            src="https://www.w3schools.com/w3images/bandmember.jpg"
            width={"60%"}
            style={{ marginBottom: "16px" }}
            alt="band member"
          />
        </div>
        <div>
          <div className="personel-name">Name</div>
          <img
            src="https://www.w3schools.com/w3images/bandmember.jpg"
            width={"60%"}
            style={{ marginBottom: "16px" }}
            alt="band member"
          />
        </div>
      </div>
    </div>
  );
}

function Tourdate() {
  const tour = [
    {
      city: "New York",
      date: "Fri 27 Nov 2016",
      url: "https://www.w3schools.com/w3images/newyork.jpg",
    },
    {
      city: "Paris",
      date: "Sat 28 Nov 2016",
      url: "https://www.w3schools.com/w3images/paris.jpg",
    },
    {
      city: "San Fransisco",
      date: "Sun 29 Nov 2016",
      url: "https://www.w3schools.com/w3images/sanfran.jpg",
    },
  ];
  return (
    <div
      style={{
        maxWidth: "2000px",
        textAlign: "center",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div className="tourdate-wrapper flex-col-center">
        <div
          style={{
            fontFamily: "Segoe UI, Arial, sans-serif",
            fontSize: "30px",
            letterSpacing: "10px",
            margin: "15px",
          }}
        >
          TOUR DATES
        </div>
        <p
          style={{
            display: "block",
            marginBlockStart: "1em",
            marginBlockEnd: "1em",
          }}
        >
          <i>Remember to book your tickets!</i>
        </p>
        <ul
          className="width100 list-tour"
          style={{
            textAlign: "left",
            listStyle: "none",
            backgroundColor: "white",
            color: "black",
            border: "1px solid gray",
          }}
        >
          <li>
            September <span>Sold out</span>
          </li>
          <li>
            October <span>Sold out</span>
          </li>
          <li>November</li>
        </ul>
        <div className="flex-row-center">
          {tour.map((val) => (
            <Tourplace {...val}></Tourplace>
          ))}
        </div>
      </div>
    </div>
  );
}

function Tourplace(props) {
  return (
    <div className="flex-col-center">
      <img src={props.url} />
      <div style={{ backgroundColor: "white", color: "black" }}>
        <p>
          <b>{props.city}</b>
        </p>
        <p>{props.date}</p>
        <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
        <button>Buy Tickets</button>
      </div>
    </div>
  );
}

export { Header, Imgsection, About, Tourdate };
