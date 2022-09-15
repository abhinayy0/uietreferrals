import React from "react";

import { Card, Avatar, Divider } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const { Meta } = Card;

const JobCard = (props) => (
  <>
    <Card bordered={false} style={{ width: "70%", margin: "auto" }}>
      <Meta
        avatar={<Avatar src={props.companyAvatar} />}
        title={
          <div
            style={{
              color: "#A1A1AA",
              fontFamily: "Helvetica Neue",
              fontWeight: 400,
            }}
          >
            {props.company}. {props.country}
          </div>
        }
      />

      <p>
        <b>{props.job}</b>
        <br />
        {props.description}
      </p>
      <HeartOutlined />
      <Divider />
    </Card>
  </>
);

export default JobCard;
