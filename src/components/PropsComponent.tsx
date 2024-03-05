import React from "react";
type UserProps = {
  firstName: string;
  lastName: string;
};
const PropsComponent: React.FC<UserProps> = ({ firstName, lastName }) => {
  return (
    <div>
      <p>{firstName}</p>
      <p>{lastName}</p>
    </div>
  );
};

export default PropsComponent;