import { useRef, useState, useEffect } from "react";
import { TextComponent, FromComponent } from "./styled";
import {
  Stack,
  TextField,
  InputAdornment,
  Button,
  Box,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { AR, USA } from "./translation";

import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

import SendIcon from "@mui/icons-material/Send";

import PersonIcon from "@mui/icons-material/Person";
import CheckIcon from "@mui/icons-material/Check";

import DangerousIcon from "@mui/icons-material/Dangerous";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import MessageIcon from "@mui/icons-material/Message";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import EmailIcon from "@mui/icons-material/Email";

import { ClipLoader } from "react-spinners";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactComponent = ({
  checkDarkMode,
  checkSaudiFlag,
  selectField,
  setSelectField,
  startPositionForm,
  setStartPositionForm,
  setNoneSelectField,
  noneSelectField,
  onFocusField,
  setOnFocusField,
  colors,
}) => {
  //! for name email pass
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  //! for animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => {
      AOS.refresh(); // Refresh AOS on component unmount
    };
  }, []);

  const RefAudio = useRef(null);

  //! check first click
  const [checkFirstClickOnEmailButton, setCheckFirstClickOnEmailButton] =
    useState(false);
  const [checkFirstClickOnNameButton, setCheckFirstClickOnNameButton] =
    useState(false);
  const [checkFirstClickOnLastNameButton, setCheckFirstClickOnLastNameButton] =
    useState(false);

  const [checkFirstClickOnMessage, setCheckFirstClickOnMessage] =
    useState(false);

  const [checkFocusEmail, setCheckFocusEmail] = useState(false);

  const [habitRun, setHabitRun] = useState("");
  const [habitRead, setHabitRead] = useState("");
  const [habitWrite, setHabitWrite] = useState("");
  const [habitGym, setHabitGym] = useState("");
  const [habitHelp, setHabitHelp] = useState("");
  const [allHabits, setAllHabits] = useState([]);

  //! for message
  const [checkUnValidMessage, setCheckUnValidMessage] = useState(false);

  //! for submit
  const [send, setSend] = useState(false);

  //!for phoneNumber
  const [checkFirstClickOnPhoneNumber, setCheckFirstClickOnPhoneNumber] =
    useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkUnValidPhoneNumber, setCheckUnValidPhoneNumber] = useState(false);
  const [errorPhoneNumber, setErrorPhoneNumber] = useState("");
  const [checkFocusPhoneNumber, setCheckFocusPhoneNumber] = useState(false);

  const validFirstThreeNumbers = ["012", "011", "010", "015"];

  useEffect(() => {
    const checkValidFirstThreeNumbers = validFirstThreeNumbers.some(
      (threeNumbers) => phoneNumber.startsWith(threeNumbers)
    );
    if (!checkValidFirstThreeNumbers) {
      setCheckUnValidPhoneNumber(true);
      setErrorPhoneNumber(
        "يجب أن يحتوي في البداية على 012 أو 010 أو 011 أو 015"
      );
    } else if (/[\s]/.test(phoneNumber)) {
      setCheckUnValidPhoneNumber(true);
      setErrorPhoneNumber("لا يمكن أن يحتوي رقم الهاتف على مسافة");
    } else if (/[a-zA-Z]/.test(phoneNumber)) {
      setCheckUnValidPhoneNumber(true);
      setErrorPhoneNumber("لا يمكن أن يحتوي رقم الهاتف على أي أحرف");
    } else if (/[^0-9]/.test(phoneNumber)) {
      setCheckUnValidPhoneNumber(true);
      setErrorPhoneNumber("لا يمكن لرقم الهاتف أن يحتوي على أي رموز");
    } else if (phoneNumber.length != 11) {
      setCheckUnValidPhoneNumber(true);
      setErrorPhoneNumber("يجب أن يحتوي رقم الهاتف على 11 رقمًا");
    } else {
      setCheckUnValidPhoneNumber(false);
      setErrorPhoneNumber("");
    }
  }, [phoneNumber]);

  useEffect(() => {
    setAllHabits([habitGym, habitHelp, habitRead, habitRun, habitWrite]);
  }, [habitRun, habitRead, habitWrite, habitGym, habitHelp]);

  const handelSubmit = (e) => {
    e.preventDefault();
    setSend(true); // Set loader to true when the form is submitted

    // Simulate sending process with a timeout
    setTimeout(() => {
      if (RefAudio.current) {
        RefAudio.current.load(); // Load the audio before playing
        RefAudio.current.play().catch((err) => {
          console.error("Audio play failed", err); // Catch any play errors
        });
      }

        setStartPositionForm(true);
        setSelectField(false);
        setTimeout(() => {
          setStartPositionForm(false);
          setNoneSelectField(true);
        }, 5000);

      setSend(false); // Set loader to false when submission completes
      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
    }, 2000);
  };

  const unValidWords = [
    "احا",
    "أحا",
    "كس امك",
    "كوس امك",
    "ابن المتناكه",
    "ياابن",
    "نجس",
    "وسخ",
    "خرا",
    "خره",
    "زاني",
    "امك",
    "متناك",
    "حمار",
    "غبي",
    "fuc you",
    "kos",
    "omak",
    "yabn",
    "facyou",
    "fac you",
    "yapn",
    "metnaka",
    "matnaka",
    "ميتناكه",
    "نتن",
    "وسخ",
    "عبيط",
  ];

  useEffect(() => {
    const containsUnValidWord = unValidWords.some((word) =>
      message.includes(word)
    );
    if (containsUnValidWord) {
      setCheckUnValidMessage(true);
    } else {
      setCheckUnValidMessage(false);
    }
  }, [message]);

  const isMobile = useMediaQuery("(max-width: 1000px)");

  return (
    <Grid
      container
      style={{
        minHeight: "700px",
        padding: "50px 0",
      }}
    >
      <Grid
        lg={6.5}
        sm={12}
        xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextComponent
          checkDarkMode={checkDarkMode}
          checkSaudiFlag={checkSaudiFlag}
          color={colors}
        >
          <Box width={600} className="text" data-aos="fade-down-left">
            <Typography variant="h6">
              {checkSaudiFlag ? AR.title : USA.title}
            </Typography>
            <Typography variant="h3">
              {checkSaudiFlag ? AR.content : USA.content}{" "}
              <span>
                {checkSaudiFlag ? AR.subContent : USA.subContent}
                <AutoAwesomeIcon className="icon" />
              </span>
            </Typography>
            <Typography variant="h5">
              {checkSaudiFlag ? AR.res : USA.res}
            </Typography>
          </Box>
        </TextComponent>
      </Grid>
      <Grid lg={5.5} sm={12} xs={12}>
        <FromComponent
          checkDarkMode={checkDarkMode}
          selectField={selectField}
          noneSelectField={noneSelectField}
          startPositionForm={startPositionForm}
          color={colors}
        >
          <div
            className="FormValidate"
            style={{ direction: "ltr", textAlign: "right" }}
            data-aos={!isMobile && "fade-down-right"}
          >
            <form onSubmit={handelSubmit} className="form">
              <Stack
                spacing={2}
                direction="column"
                className="mainStackInForm"
                width={500}
              >
                {/* Full Name &PhoneNumber */}
                <Stack className="name-phone-fields">
                  {/* Full Name */}
                  <TextField
                    InputLabelProps={{
                      style: {
                        color: checkDarkMode ? "silver" : "black",
                      },
                    }}
                    onFocus={() => setOnFocusField(true)}
                    onBlur={(e) => {
                      !name &&
                        !phoneNumber &&
                        !email &&
                        !message &&
                        setOnFocusField(false);
                    }}
                    required
                    className="name-filed"
                    value={name}
                    type="text"
                    variant="outlined"
                    label="Full Name"
                    variant="standard"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {name.length < 3 && checkFirstClickOnNameButton ? (
                            <ErrorOutlineIcon style={{ color: "red" }} />
                          ) : (
                            <PersonIcon
                              style={{ color: checkDarkMode && "white" }}
                            />
                          )}
                        </InputAdornment>
                      ),
                      style: {
                        color: checkDarkMode && "white",
                      },
                    }}
                    onChange={(e) => setName(e.target.value)}
                    onClick={() => {
                      setStartPositionForm(false);
                      setNoneSelectField(false);
                      setSelectField(true);
                      setCheckFirstClickOnNameButton(true);
                    }}
                    error={name.length < 3 && checkFirstClickOnNameButton}
                    color={name.length >= 3 ? "success" : "primary"}
                    helperText={
                      name.length < 3 ? (
                        name.length == 0 ? (
                          <div
                            style={{
                              color: checkDarkMode && "white",
                              marginLeft: "15px",
                            }}
                          >
                            Required
                          </div>
                        ) : (
                          <div style={{ marginLeft: "15px" }}>
                            "at least 3 letters"
                          </div>
                        )
                      ) : (
                        <div className="success" style={{ marginLeft: "15px" }}>
                          <CheckIcon />
                          Is valid
                        </div>
                      )
                    }
                  />
                  {/* Phone number */}
                  <TextField
                    InputLabelProps={{
                      style: {
                        color: checkDarkMode ? "silver" : "black",
                      },
                    }}
                    onFocus={() => setOnFocusField(true)}
                    onBlur={(e) => {
                      !name &&
                        !phoneNumber &&
                        !email &&
                        !message &&
                        setOnFocusField(false);
                    }}
                    required
                    value={phoneNumber}
                    type="text"
                    variant="outlined"
                    className="phone-filed"
                    label="Phone Number"
                    variant="standard"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PhoneAndroidIcon
                            style={{ color: checkDarkMode && "white" }}
                          />
                        </InputAdornment>
                      ),
                      style: {
                        color: checkDarkMode && "white",
                      },
                    }}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    onClick={() => {
                      setStartPositionForm(false);
                      setNoneSelectField(false);
                      setSelectField(true);
                      setCheckFirstClickOnPhoneNumber(true);
                    }}
                    color={!checkUnValidPhoneNumber ? "success" : "primary"}
                    helperText={
                      checkUnValidPhoneNumber ? (
                        phoneNumber.length == 0 && (
                          <div
                            style={{
                              color: checkDarkMode && "white",
                              marginLeft: "15px",
                            }}
                          >
                            optional
                          </div>
                        )
                      ) : (
                        <div className="success" style={{ marginLeft: "15px" }}>
                          <CheckIcon />
                          Is valid
                        </div>
                      )
                    }
                  />
                </Stack>

                {/* Email address */}
                <TextField
                  InputLabelProps={{
                    style: {
                      color: checkDarkMode ? "silver" : "black",
                    },
                  }}
                  onFocus={() => setOnFocusField(true)}
                  onBlur={(e) => {
                    !name &&
                      !phoneNumber &&
                      !email &&
                      !message &&
                      setOnFocusField(false);
                  }}
                  onClick={() => {
                    setStartPositionForm(false);
                    setNoneSelectField(false);
                    setSelectField(true);
                    setCheckFirstClickOnEmailButton(true);
                  }}
                  error={
                    (!email.endsWith(".com") ||
                      !email.includes("@") ||
                      email.includes("@.com") ||
                      email.length < 9) &&
                    checkFirstClickOnEmailButton
                  }
                  variant="filled"
                  type="email"
                  label="Email Address"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  color={
                    (!email.endsWith(".com") ||
                      !email.includes("@") ||
                      email.includes("@.com") ||
                      email.length < 9) &&
                    checkFirstClickOnEmailButton
                      ? "primary"
                      : "success"
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {(!email.endsWith(".com") ||
                          !email.includes("@") ||
                          email.includes("@.com") ||
                          email.length < 9) &&
                        checkFirstClickOnEmailButton ? (
                          <ErrorOutlineIcon style={{ color: "red" }} />
                        ) : (
                          <EmailIcon style={{ color: "white" }} />
                        )}
                      </InputAdornment>
                    ),
                    style: {
                      color: checkDarkMode && "white",
                    },
                  }}
                  helperText={
                    email.endsWith(".com") &&
                    email.includes("@") &&
                    !email.includes("@.com") &&
                    email.length >= 9 ? (
                      <div className="success">
                        <CheckIcon /> is valid
                      </div>
                    ) : email == "" ? (
                      <div style={{ color: checkDarkMode && "white" }}>
                        Required
                      </div>
                    ) : email.endsWith(".com") &&
                      email.includes("@") &&
                      !email.includes("@.com") ? (
                      <div className="flex">
                        must letters before_@Examle.com
                      </div>
                    ) : (
                      "Must include_@ ---.com at the end"
                    )
                  }
                />
                {/* Message */}
                <TextField
                  InputLabelProps={{
                    style: {
                      color: checkDarkMode ? "silver" : "black",
                    },
                  }}
                  onFocus={() => setOnFocusField(true)}
                  onBlur={(e) => {
                    !name &&
                      !phoneNumber &&
                      !email &&
                      !message &&
                      setOnFocusField(false);
                  }}
                  required
                  value={message}
                  multiline
                  // maxRows={3}
                  minRows={isMobile ? 2 : 5}
                  variant="standard"
                  label="Message"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {message.length < 3 && checkFirstClickOnMessage ? (
                          <ErrorOutlineIcon style={{ color: "red" }} />
                        ) : (
                          <MessageIcon
                            style={{ color: checkDarkMode && "white" }}
                          />
                        )}
                      </InputAdornment>
                    ),
                    style: {
                      color: checkDarkMode && "white",
                    },
                  }}
                  onChange={(e) => setMessage(e.target.value)}
                  onClick={() => {
                    setStartPositionForm(false);
                    setNoneSelectField(false);
                    setSelectField(true);
                    setCheckFirstClickOnMessage(true);
                  }}
                  error={
                    (message.length < 3 || checkUnValidMessage) &&
                    checkFirstClickOnMessage
                  }
                  color={message.length >= 3 ? "success" : "primary"}
                  helperText={
                    message.length < 3 ? (
                      message.length == 0 ? (
                        <div style={{ color: checkDarkMode && "white" }}>
                          Required
                        </div>
                      ) : (
                        "at least 3 letters"
                      )
                    ) : checkUnValidMessage ? (
                      <div style={{ display: "flex" }}>
                        No foul language allowed
                        <DangerousIcon />
                      </div>
                    ) : (
                      <div className="success">
                        <CheckIcon />
                        Is valid
                      </div>
                    )
                  }
                />

                {/* Submit */}
                <Button
                  disabled={
                    name.length < 3 || //! first name
                    message.length < 3 || //! message
                    checkUnValidMessage || //! message
                    !email.endsWith(".com") || //! Email
                    !email.includes("@") || //! Email
                    email.includes("@.com") //! Email
                  }
                  onClick={handelSubmit}
                  className="submit"
                  variant="contained"
                  color="info"
                  type="submit"
                >
                  {send ? (
                    <div className="flex">
                      Wait.. <ClipLoader color="#3d8b87" size={20} />{" "}
                      {/* Loader component */}
                    </div>
                  ) : (
                    <div className="flex">
                      Send <SendIcon style={{ marginLeft: "10px" }} />
                    </div>
                  )}
                </Button>
              </Stack>
            </form>
          </div>
        </FromComponent>
      </Grid>
      <audio ref={RefAudio} src="Audios/SendMessage.mp3"></audio>
    </Grid>
  );
};
export default ContactComponent;
