import { CSSProperties } from "react";

interface DevJobsAvatarProps {
  service?: string;
  username?: string;
  size?: number;
}

export function DevJobsAvatar({
  service = "github",
  username = "midudev",
  size = 40,
}: DevJobsAvatarProps) {
  const url = `https://unavatar.io/${service}/${username}`;
  const styles: CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "100%",
  };

  return <img src={url} alt={username} style={styles} />;
}
