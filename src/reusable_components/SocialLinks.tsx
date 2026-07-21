import { IconButton, Box, Tooltip } from "@mui/material";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

export default function SocialLinks() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
      }}
    >
      <Tooltip title="GitHub" arrow>
        <IconButton
          component="a"
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Google Scholar" arrow>
        <IconButton
          component="a"
          href="https://scholar.google.com/citations?user=HudJqrwAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google Scholar"
        >
          <SiGooglescholar size={24} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Instagram" arrow>
        <IconButton
          component="a"
          href="https://www.instagram.com/hotxsos/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
