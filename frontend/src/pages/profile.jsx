function Profile() {
  var summaryTxt = document.getElementById("summary");

  function editSummary() {
    summaryTxt.setAttribute("contenteditable", "true");
    summaryTxt.classList.add("editMode");
  }

  function saveSummary() {
    summaryTxt.setAttribute("contenteditable", "false");
    summaryTxt.classList.remove("editMode");
  }

  return (
    <div className="profile container">
      <div className="profileabout">
        <h1 className="heading__h2">Welcome Back, AR Gorsi</h1>
        <p className="paragraph">username: argorsi</p>
        <div className="about__summary">
          <div className="profilepic"></div>

          <div className="about__summary__text">
            <h3 className="heading__h2">Summary:</h3>
            <p
              contentEditable="false"
              className="paragraph"
              id="summary"
              spellCheck="false"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              deleniti doloremque labore voluptate inventore aperiam porro eos
              atque totam modi consequatur vel magni, enim consectetur eaque
              iure voluptatum velit sint? Debitis velit ut explicabo
              exercitationem provident impedit, unde voluptates ullam ratione!
              Fugiat reiciendis quia nemo delectus, laborum veritatis officia
              magnam commodi nobis, eaque neque tempore a aperiam temporibus,
              voluptatem eum!
            </p>
            <div className="button">
              <button className="btn" id="editBtn" onClick={editSummary}>
                Edit Notes
              </button>
              <button className="btn" id="saveBtn" onClick={saveSummary}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
        <hr className="profile__line" />
      </div>
    </div>
  );
}

export default Profile;
