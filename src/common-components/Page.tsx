import { Box } from "@mui/material";
import * as React from "react";
import { Helmet } from "react-helmet";

export interface IPageProps {
  title: string;
  children: React.ReactNode;
}

export default function Page(props: IPageProps) {
  const { title, children } = props;

  return (
    <Box>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      {children}
    </Box>
  );
}
