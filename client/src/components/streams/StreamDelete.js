import React from "react";
import Modal from "../Modal";

const StreamDelete = () => {
  const actions = (
    <>
      <div className="ui button negative">Delete</div>
      <div className="ui button">Cancel</div>
    </>
  );

  return (
    <div>
      Stream Delete
      <Modal
        title="Delete Your Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;
