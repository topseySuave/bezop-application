import React, { PropTypes } from "react";
import Paper from "material-ui/Paper";
import { white, grey800 } from "material-ui/styles/colors";
import { typography } from "material-ui/styles";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import Snackbar from "material-ui/Snackbar";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import data from "../../data";

class InfoBox extends React.Component {
  state = {
    openSnackBar: false,
    snackTitle: null
  };

  handleClick = snackTitle => {
    this.setState({ openSnackBar: true, snackTitle });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ openSnackBar: false });
  };

  showSnackBar() {
    return (
      <Snackbar
        open={this.state.openSnackBar}
        autoHideDuration={6000}
        message={<span id="message-id">{this.state.snackTitle}</span>}
        action={[
          <FlatButton
            key="undo"
            color="#FFFFFF"
            size="small"
            onClick={this.handleClose}
          >
            UNDO
          </FlatButton>,
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={this.handleClose}
          >
            <NavigationClose />
          </IconButton>
        ]}
      />
    );
  }

  render() {
    const { color, title, value, Icon, archiveSet } = this.props;

    const styles = {
      content: {
        padding: "5px 10px",
        marginLeft: 90,
        height: 80
      },
      number: {
        display: "block",
        fontWeight: typography.fontWeightMedium,
        fontSize: 18,
        color: grey800
      },
      text: {
        fontSize: 20,
        fontWeight: typography.fontWeightLight,
        color: grey800
      },
      iconSpan: {
        float: "left",
        height: 90,
        width: 90,
        textAlign: "center",
        backgroundColor: color
      },
      icon: {
        height: 48,
        width: 48,
        marginTop: 20,
        maxWidth: "100%"
      },
      menuItems: {
        position: "absolute",
        top: "0px",
        right: "0px"
      }
    };

    return (
      <Paper style={{ position: "relative" }}>
        <span style={styles.iconSpan}>
          <Icon color={white} style={styles.icon} />
        </span>

        <div style={styles.content}>
          <span style={styles.text}>{title}</span>
          <span style={styles.number}>{value}</span>
          <IconMenu
            iconButtonElement={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            style={styles.menuItems}
            anchorOrigin={{ horizontal: "right", vertical: "top" }}
            targetOrigin={{ horizontal: "right", vertical: "top" }}
          >
            {!archiveSet
              ? data.dashBoardPage.fileMenuItems.map(item => {
                  return (
                    <MenuItem
                      key={item.name}
                      primaryText={item.name}
                      leftIcon={item.icon}
                      onClick={() => this.handleClick(item.snackTitle)}
                    />
                  );
                })
              : data.dashBoardPage.fileMenuItemsInArchive.map(item => {
                  return (
                    <MenuItem
                      key={item.name}
                      primaryText={item.name}
                      leftIcon={item.icon}
                      onClick={() => this.handleClick(item.snackTitle)}
                    />
                  );
                })}
          </IconMenu>
        </div>
        {this.showSnackBar()}
      </Paper>
    );
  }
}

InfoBox.propTypes = {
  Icon: PropTypes.any, // eslint-disable-line
  color: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  archiveSet: PropTypes.boolean
};

export default InfoBox;
