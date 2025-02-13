import { Redirect } from "expo-router";
import { useState } from "react";

const index = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  if (isSignedIn) {
    return <Redirect href="/(screens)/contacts" />;
  }

  return <Redirect href="/(auth)/welcome" />;
};

export default index;
