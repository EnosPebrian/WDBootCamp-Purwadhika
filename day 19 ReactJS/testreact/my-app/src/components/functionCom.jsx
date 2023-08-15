const Heading1 = (props) => {
  return (
    <div>
      <h1>Ini function Heading 1 buatan {props.name}</h1>
      <p>{props.children}</p>
    </div>
  );
};

export default Heading1;
