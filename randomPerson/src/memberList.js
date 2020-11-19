import { Component } from "react";
import getFakeMembers from "./fakeMembers";
import Member from "./members";

class Memberlist extends Component {
  constructor() {
    super();
    this.state = {
      members: [],
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    getFakeMembers(this.props.count).then(
      (members) => {
        this.setState({ members, loading: false });
      },
      (error) => {
        this.setState({ error, loading: false });
      }
    );
  }

  // componentWillUpdate() {
  //     console.log("updating lifecycle");
  // }

  render() {
      const {members, loading, error} = this.state;
      return (
          <div className="member-list">
              {(loading) ?
              <span>Loading members</span> :
              (members.length) ?
                members.map((user, i) => 
                <Member key={i} {...user}/>) :
                <span>0 Members loaded</span>
              }
              {(error) ?  <p>Error loading members</p> : ""}
          </div>
      )
  }
}

export default Memberlist;