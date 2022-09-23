import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout, Menu, Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import JobCard from "./JobCard";

const { Header, Content, Footer } = Layout;
const { Option } = Select;

const baseURL =
  "https://raw.githubusercontent.com/abhinayy0/uietreferrals/main/data.json";

function Home() {
  const [jobData, setjobData] = useState(null);
  const [sortType, setSortType] = useState("latest");
  const getJobs = async () => {
    const resp = await axios.get(baseURL);
    setjobData(resp.data);
  };

  const suffix = (
    <div>
      Sort by:
      <Select defaultValue="latest" onChange={(v) => setSortType(v)}>
        <Option value="latest">Latest</Option>
        <Option value="alpha">Alphabetically</Option>
      </Select>
    </div>
  );
  useEffect(() => {}, []);

  useEffect(() => {
    if (!jobData) {
      getJobs();
      return;
    }

    const sortArray = (type) => {
      const types = {
        latest: "uid",
        alpha: "job",
      };
      const sortProperty = types[type];

      const sorted = [...jobData].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setjobData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <Layout className="layout">
      <Header
        style={{
          background: "white",
          height: "75px",
          paddingTop: "7px",
        }}
      >
        <div className="logo">UIET Referrals</div>
        <Menu
          style={{
            float: "right",
            marginTop: "7px",
            marginBottom: "7px",
            height: "45px",
          }}
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={[]}
          items={new Array(1).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: "Post a job",
              className: "customclass",
            };
          })}
        />
      </Header>

      <Content>
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(118, 37, 182, 0.9) 0%, rgba(95, 37, 182, 0.9) 100%), url(https://images.unsplash.com/photo-1580566176138-daa588058b59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)",
            backgroundSize: "cover",
            paddingTop: "50px",
            paddingBottom: "100px",
            color: "white",
            fontFamily: "Helvetica Neue",

            fontWeight: "700",
            fontSize: "48px",
            lineHeight: "120%",
            textAlign: "center",
          }}
        >
          <br />

          <b>Top jobs board for professionals</b>

          <div
            style={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "150%",
            }}
          >
            Discover your next career move with over 15 000 opening vacancies,
            customer support, software, design anywhere in the world or
            remotely.
          </div>
        </div>
        <br />

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
        UIET Referrals ©2022 Created by{" "}
        <a
          href="https://www.linkedin.com/in/abhinayy0/"
          target="_blank"
          rel="noreferrer"
          className="creator"
        >
          Abhinay Yadav
        </a>
      </Footer>
    </Layout>
  );
}

export default Home;
