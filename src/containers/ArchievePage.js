import React from "react";
import {
  cyan600,
  pink600,
  purple600,
  orange600
} from "material-ui/styles/colors";
import Assessment from "material-ui/svg-icons/action/assessment";
import Face from "material-ui/svg-icons/action/face";
import ThumbUp from "material-ui/svg-icons/action/thumb-up";
import ShoppingCart from "material-ui/svg-icons/action/shopping-cart";
import InfoBox from "../components/dashboard/InfoBox";
import globalStyles from "../styles";
import Data from "../data";

const ArchievePage = () => {
  return (
    <div>
      <h3 style={globalStyles.navigation}>Application / Archieve</h3>

      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox
            Icon={ShoppingCart}
            color={pink600}
            archiveSet={true}
            title="Total Profit"
            value="1500k"
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox
            Icon={ThumbUp}
            color={cyan600}
            archiveSet={true}
            title="Likes"
            value="4231"
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox
            Icon={Assessment}
            color={purple600}
            archiveSet={true}
            title="Sales"
            value="460"
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox
            Icon={Face}
            color={orange600}
            archiveSet={true}
            title="New Members"
            value="248"
          />
        </div>
      </div>
    </div>
  );
};

export default ArchievePage;
