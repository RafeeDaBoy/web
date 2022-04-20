import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

import { version } from "../../components";

const styles = (theme) => ({
  footer__container: {
    width: "100%",
    height: "75px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div style={{ paddingTop: "75px" }}>
        <footer className={classes.footer__container} id="footer__container">
          <a href="https://github.com/libDrive/libDrive/" target="_blank">
            <img
              src="/images/github.gif"
              className="footer__github"
              height="64px"
              alt="github-logo"
            />
          </a>
          <a
            className="no_decoration_link footer__text"
            href="https://cdn.discordapp.com/avatars/254889951173410817/05002d2557a112056d7739ca8eb694b3.png?size=1024"
            target="_blank"
          >
            {`© 2022 Copyright: Rafee Maisoon - v${version}`}
          </a>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Footer);
