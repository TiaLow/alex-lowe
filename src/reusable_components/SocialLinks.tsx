import { IconButton, Box, Tooltip, SvgIcon } from "@mui/material";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import UCMP_logo from "../assets/images/logo_UCMP.png";

export default function SocialLinks() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
      }}
    >
      <Tooltip title="University of California Museum of Paleontology" arrow>
        <IconButton
          component="a"
          href="https://ucmp.berkeley.edu/people/alex-lowe/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="University of California Museum of Paleontology"
        >
          <SvgIcon viewBox="0 0 24 24">
            <image href={UCMP_logo} height={24} width={24} />
          </SvgIcon>
        </IconButton>
      </Tooltip>

      <Tooltip title="GitHub" arrow>
        <IconButton
          component="a"
          href="https://github.com/lowepb"
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
          href="https://www.instagram.com/hotxsos/" // TODO: update to profesh IG
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
