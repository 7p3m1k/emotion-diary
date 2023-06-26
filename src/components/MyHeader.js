const MyHeader = ({ headText, leftChild, righthChild }) => {
  return (
    <header>
      <div className="head_btn_left">{leftChild}</div>
      <div className="head_text">{headText}</div>
      <div className="head_btn_right">{righthChild}</div>
    </header>
  );
};

export default MyHeader;
