"use client";

import { SyncLoader } from "react-spinners";

export default function Preloader() {
  return (
    <div style={styles.loaderWrapper}>
      <SyncLoader color="#1163ea" size={20} />
    </div>
  );
}

const styles = {
  loaderWrapper: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#ffffff",
  },
};