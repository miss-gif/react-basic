import React from "react";
import { Navigate } from "react-router-dom";

const MyPage = () => {
  const isLogin = false;
  console.log(isLogin);

  // if (isLogin) {
  //   return <Navigate to="/login" replace={true} />;
  // }

  return (
    <div>
      <h2> {!isLogin && <Navigate to="/login" replace={true} />}</h2>
    </div>
  );
};

export default MyPage;
