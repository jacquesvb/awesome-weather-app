import { BiSearch } from "react-icons/bi";
import PropTypes from "prop-types";

const FindForm = (props) => {
  return (
    <div className="w-full">
      <br />
      <div className="flex justify-center">
        {props.children}{" "}
        <button className="text-2xl" onClick={props.btn}>
          <BiSearch />
        </button>
      </div>
      <br />
    </div>
  );
};

FindForm.propTypes = {
  children: PropTypes.node.isRequired,
  btn: PropTypes.func.isRequired,
};

export default FindForm;
