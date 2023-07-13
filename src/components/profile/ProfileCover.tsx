import * as React from "react";
import { Box, Avatar, Typography, styled, alpha } from "@mui/material";

export interface IProfileCoverProps {
  profile: any;
}

const CoverImageStyle = styled("img")(({ theme }) => ({
  zIndex: 8,
  objectFit: "cover",
  position: "absolute",
  width: "100%",
  height: "100%",
}));

const RootStyle = styled("div")(({ theme }) => ({
  "&:before": {
    top: 0,
    zIndex: 9,
    width: "100%",
    content: "''",
    height: "100%",
    position: "absolute",
    backdropFilter: "blur(3px)",
    WebkitBackdropFilter: "blur(3px)", // Fix on Mobile
  },
}));

const InfoStyle = styled("div")(({ theme }) => ({
  zIndex: 99,
  position: "absolute",
  [theme.breakpoints.up("md")]: {
    right: "auto",
    display: "flex",
    alignItems: "center",
    left: theme.spacing(3),
    bottom: theme.spacing(5),
  },
}));

export default function ProfileCover(props: IProfileCoverProps) {
  const { profile } = props;

  return (
    <RootStyle>
      <InfoStyle>
        <Avatar
          src="https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGd1eXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          sx={{
            width: {
              xs: 80,
              md: 128,
            },
            height: {
              xs: 80,
              md: 128,
            },
            borderStyle: "solid",
            borderColor: "common.white",
            borderWidth: 2,
            mx: "auto",
          }}
        />

        <Box
          sx={{
            color: "common.white",
            textAlign: {
              xs: "center",
              md: "left",
            },
            ml: {
              md: 3,
              xs: 1,
            },
            mt: {
              xs: 1,
              md: 0,
            },
          }}
        >
          <Typography variant="h4">{"Võ Đình Dũng"}</Typography>
          <Typography sx={{ opacity: 0.72 }}>{"Software Engineer"}</Typography>
        </Box>
      </InfoStyle>

      <CoverImageStyle
        alt="Cover Image"
        src="https://www.betterteam.com/images/it-and-tech-job-boards-2400x2400-20201203.jpg?crop=1:1,smart&width=1200&dpr=2"
      />
    </RootStyle>
  );
}
