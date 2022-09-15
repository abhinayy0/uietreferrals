import React, { useState, useEffect } from "react";

import { Layout, Menu, Input, Divider } from "antd";
import { SearchOutlined, CaretDownOutlined } from "@ant-design/icons";

import JobCard from "./JobCard";

const { Header, Content, Footer } = Layout;
const suffix = (
  <div>
    Sort by: Latest
    <CaretDownOutlined />
  </div>
);

function Home() {
  const [jobData, setjobData] = useState();

  useEffect(() => {
    setjobData([
      {
        company: "Osmania Technologies",
        country: "India",
        job: "Python Developer",
        description: "Seeking a passionate developer",
        companyAvatar: "https://joeschmoe.io/api/v1/random",
      },
      {
        company: "Osmania Tech",
        country: "India",
        job: "Python Developer",
        description: "Seeking a passionate developer",
        companyAvatar: "https://joeschmoe.io/api/v1/random",
      },
    ]);
  }, []);
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">UIET referrals</div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={[]}
          items={new Array(1).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: "Post a job",
            };
          })}
        />
      </Header>

      <Content>
        <div
          style={{
            aspectRatio: "32/5",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1580566176138-daa588058b59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80),linear-gradient(180deg, #7625B6 0%, #3925B6 100%)",
          }}
        ></div>
        <br />

        <Divider />
        <div style={{ margin: "auto", width: "70%" }}>
          <Input
            size="large"
            placeholder="Start searching ..."
            prefix={<SearchOutlined />}
            suffix={suffix}
          />
        </div>

        {jobData &&
          jobData.map((jobCard) => (
            <JobCard key={jobCard.company} {...jobCard} />
          ))}
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        UIET Referrals ©2022 Created by Abhinay Yadav
      </Footer>
    </Layout>
  );
}

export default Home;
