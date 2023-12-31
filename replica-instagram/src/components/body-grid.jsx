import img1 from "../photos/1.jpeg";
import img2 from "../photos/2.jpeg";
import img3 from "../photos/3.jpeg";
import img4 from "../photos/4.jpg";

function Body() {
  const topnav = [
    {
      svg: (
        <svg
          aria-label=""
          class="_ab6-"
          color="rgb(0, 0, 0)"
          fill="rgb(0, 0, 0)"
          height="12"
          role="img"
          viewBox="0 0 24 24"
          width="12"
        >
          <rect
            fill="none"
            height="18"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            width="18"
            x="3"
            y="3"
          ></rect>
          <line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="9.015"
            x2="9.015"
            y1="3"
            y2="21"
          ></line>
          <line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="14.985"
            x2="14.985"
            y1="3"
            y2="21"
          ></line>
          <line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="21"
            x2="3"
            y1="9.015"
            y2="9.015"
          ></line>
          <line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="21"
            x2="3"
            y1="14.985"
            y2="14.985"
          ></line>
        </svg>
      ),
      option: "POSTS",
    },
    {
      svg: (
        <svg
          aria-label=""
          class="_ab6-"
          color="rgb(115, 115, 115)"
          fill="rgb(115, 115, 115)"
          height="12"
          role="img"
          viewBox="0 0 24 24"
          width="12"
        >
          <line
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            x1="2.049"
            x2="21.95"
            y1="7.002"
            y2="7.002"
          ></line>
          <line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="13.504"
            x2="16.362"
            y1="2.001"
            y2="7.002"
          ></line>
          <line
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            x1="7.207"
            x2="10.002"
            y1="2.11"
            y2="7.002"
          ></line>
          <path
            d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></path>
          <path
            d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
            fill-rule="evenodd"
          ></path>
        </svg>
      ),
      option: "REELS",
    },
    {
      svg: (
        <svg
          aria-label=""
          class="_ab6-"
          color="rgb(115, 115, 115)"
          fill="rgb(115, 115, 115)"
          height="12"
          role="img"
          viewBox="0 0 24 24"
          width="12"
        >
          <path
            d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></path>
          <path
            d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></path>
          <circle
            cx="12.072"
            cy="11.075"
            fill="none"
            r="3.556"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></circle>
        </svg>
      ),
      option: "TAGGED",
    },
  ];

  const image = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvSiYj0wgE8Qy_S0PQ1427fqaMBTrADCpjf4MEJbdS&s",
      alt: "1",
    },
    {
      url: "https://images.unsplash.com/photo-1613967193490-1d17b930c1a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80",
      alt: "1",
    },
    {
      url: "https://www.usnews.com/object/image/00000186-7a58-d975-aff7-fffbc8910000/iguazu-falls-stock.jpg?update-time=1677089883729&size=responsive640",
      alt: "1",
    },
    {
      url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      alt: "1",
    },
    {
      url: "https://i.natgeofe.com/n/737e4cbf-3d9e-4f89-b4b2-29b5cf303dba/01-best_pod_landscapes_16x9.jpg",
      alt: "1",
    },
    {
      url: img1,
      alt: "1",
    },
    ,
    {
      url: img2,
      alt: "1",
    },
    ,
    {
      url: img3,
      alt: "1",
    },
    ,
    {
      url: img4,
      alt: "1",
    },
  ];

  return (
    <div className="container flex-col-center">
      <div
        id="posts-reels-tags-container"
        className="width100 flex-row-center"
        style={{ height: "52px" }}
      >
        {topnav.map((item) => (
          <Option {...item}></Option>
        ))}
      </div>
      <div className="Gridbody">
        {image.map((pics) => (
          <FetchPics {...pics}></FetchPics>
        ))}
      </div>
    </div>
  );
}

function Option(props) {
  return (
    <a className="flex-row-center posts-reels-tags" style={{ height: "100%" }}>
      {props.svg}
      <span className="opt1">{props.option}</span>
    </a>
  );
}

function FetchPics(props) {
  return (
    <div className="pic-post">
      <img src={props.url} alt={props.alt} width={"100%"} />
    </div>
  );
}

export default Body;
