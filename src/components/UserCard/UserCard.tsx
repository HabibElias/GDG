import "./styles.css";

interface prop {
  name: string;
  email: string;
  age: number;
  color: string;
  onColor: () => void;
}

const UserCard = ({ name, email, age, color, onColor }: prop) => {
  return (
    <div className="userCard">
      <button className="changeColor" onClick={onColor}>
        Change Color
      </button>
      <ul className="card" style={{ background: color, color: "#111" }}>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Age: {age}</li>
      </ul>
    </div>
  );
};

export default UserCard;
