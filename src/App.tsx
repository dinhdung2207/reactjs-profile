import React, { useState } from "react";
import "./App.css";
import Page from "./common-components/Page";
import { Card, Box, Tabs, Tab, Container, styled } from "@mui/material";
import ProfileCover from "./components/profile/ProfileCover";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CodeIcon from "@mui/icons-material/Code";

const TabsWrapperStyled = styled("div")(({ theme }) => ({
  display: "flex",
  bottom: 0,
  zIndex: 9,
  position: "absolute",
  width: "100%",
  backgroundColor: "#FDFDFD",
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'center',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(3)
  }
}));

function App() {
  const [currTab, setCurrTab] = useState("profile");

  const onChangeTab = (e: React.SyntheticEvent, newValue: string) => {
    setCurrTab(newValue);
  };

  const PROFILE_TABS = [
    {
      id: "profile",
      value: "Profile",
      icon: <AccountBoxIcon />,
      component: "",
    },
    {
      id: "aboutMe",
      value: "About me",
      icon: <AccountBoxIcon />,
      component: "",
    },
    {
      id: "myProject",
      value: "My Project",
      icon: <CodeIcon />,
      component: "",
    },
  ];

  return (
    <Page title="Dung Vo - Software Engineer">
      <Container>
        <Card
          sx={{
            mb: 3,
            height: 300,
            position: "relative",
          }}
        >
          <ProfileCover profile={{}} />

          <TabsWrapperStyled sx={{}}>
            <Tabs
              value={currTab}
              onChange={onChangeTab}
              aria-label=""
              variant="scrollable"
            >
              {PROFILE_TABS.map((tab) => (
                <Tab
                  key={tab.id}
                  value={tab.value}
                  icon={tab.icon}
                  iconPosition="start"
                  label={tab.value}
                />
              ))}
            </Tabs>
          </TabsWrapperStyled>
        </Card>

        {PROFILE_TABS.map((tab) => {
          const isMatched = tab.value === currTab;

          return isMatched && <Box key={tab.id}>{tab.component}</Box>;
        })}
      </Container>
    </Page>
  );
}

export default App;
