import React from "react";

import { Card, Avatar } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const { Meta } = Card;

const JobCard = (props) => (
  <>
    <Card
      bordered={true}
      style={{ width: "70%", margin: "auto" }}
      actions={[<HeartOutlined />, <div>{props.postDate}</div>]}
    >
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
        <a
          href={props.jobLink}
          target="_blank"
          rel="noreferrer"
          className="custom-link"
        >
          <b>{props.job}</b>
        </a>
        <br />
        {props.description}
      </p>
      <p>
        Referral :{" "}
        <a
          href={props.referralLink}
          target="_blank"
          rel="noreferrer"
          className="custom-link"
        >
          {props.referralName}
        </a>
      </p>
    </Card>
  </>
);

export default JobCard;
