const Position = ({ lat, lon }) => {
  return (
    <div>
      <h3>Your position is</h3>
      <div>Position: {lat},{lon}</div>
    </div>
  );
};
export default Position;