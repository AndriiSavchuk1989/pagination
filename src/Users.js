import React from "react";

class Users extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div className="example">
        {data.map(item => {
          return (
            <div className="example__item">
              {item.id} {item.first_name} {item.last_name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;
