import React, { Component } from "react";

class Checkbox extends Component {
  render() {
    return (
      <form>SkillOptions:<br/>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Programming
          </label>
          <br></br>

          <input type="checkbox" class="form-check-input" id="exampleCheck2" />
          <label class="form-check-label" for="exampleCheck2">
            Development
          </label>
          <br></br>

          <input type="checkbox" class="form-check-input" id="exampleCheck3" />
          <label class="form-check-label" for="exampleCheck3">
            Design
          </label>
          <br></br>

          <input type="checkbox" class="form-check-input" id="exampleCheck4" />
          <label class="form-check-label" for="exampleCheck4">
            Testing
          </label>

        </div>
                  <br/>

      </form>
    );
  }
}

export default Checkbox;