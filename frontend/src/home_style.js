import image from "./bg.png";
import { common } from '@material-ui/core/colors';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(common.white),
      backgroundColor: common.white,
      '&:hover': {
        backgroundColor: '#ffffff7a',
      },
    },
  }))(Button);
  // const axios = require("axios").default;
  
export const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    clearButton: {
      width: "-webkit-fill-available",
      borderRadius: "15px",
      padding: "15px 22px",
      color: "#000000a6",
      fontSize: "20px",
      fontWeight: 900,
    },
    root: {
      maxWidth: 345,
      flexGrow: 1,
    },
    media: {
      height: 400,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    gridContainer: {
      justifyContent: "center",
      padding: "4em 1em 0 1em",
    },
    mainContainer: {
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: "93vh",
      marginTop: "8px",
    },
    imageCard: {
      margin: "auto",
      maxWidth: 400,
      height: 500,
      backgroundColor: 'transparent',
      boxShadow: '0px 9px 70px 0px rgb(0 0 0 / 30%) !important',
      borderRadius: '15px',
    },
    imageCardEmpty: {
      height: 'auto',
    },
    noImage: {
      margin: "auto",
      width: 400,
      height: "400 !important",
    },
    input: {
      display: 'none',
    },
    uploadIcon: {
      background: 'white',
    },
    tableContainer: {
      backgroundColor: 'transparent !important',
      boxShadow: 'none !important',
    },
    table: {
      backgroundColor: 'transparent !important',
    },
    tableHead: {
      backgroundColor: 'transparent !important',
    },
    tableRow: {
      backgroundColor: 'transparent !important',
    },
    tableCell: {
      fontSize: '22px',
      backgroundColor: 'transparent !important',
      borderColor: 'transparent !important',
      color: '#000000a6 !important',
      fontWeight: 'bolder',
      padding: '1px 24px 1px 16px',
    },
    tableCell1: {
      fontSize: '14px',
      backgroundColor: 'transparent !important',
      borderColor: 'transparent !important',
      color: '#000000a6 !important',
      fontWeight: 'bolder',
      padding: '1px 24px 1px 16px',
    },
    tableBody: {
      backgroundColor: 'transparent !important',
    },
    text: {
      color: 'white !important',
      textAlign: 'center',
    },
    buttonGrid: {
      maxWidth: "416px",
      width: "100%",
    },
    detail: {
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    },
    appbar: {
      background: '#be6a77',
      boxShadow: 'none',
      color: 'white'
    },
    loader: {
      color: '#be6a77 !important',
    }
  }));