import {
  MY_BUTTON_TEXT_1,
  MY_BUTTON_TEXT_2,
  MY_BUTTON_TEXT_3,
  MY_BUTTON_TEXT_4,
  MY_BUTTON_TEXT_5,
  MY_BUTTON_TEXT_6,
  MY_BUTTON_TEXT_7,
  MY_BUTTON_TEXT_8,
  MY_BUTTON_TEXT_9,
  MY_BUTTON_TEXT_10,
  MY_BUTTON_TEXT_TOGGLER_1,
  MY_BUTTON_TEXT_TOGGLER_2,
  MY_BUTTON_TEXT_TOGGLER_3,
  MY_BUTTON_TEXT_TOGGLER_4,
} from "./btnTexts";

/*
    ?internalLink, externalLink, and handleClick
    !ONLY one of these 3 should have a value
    ?otherwise the onClick of the 
    ?button will use the default
  */

/* SM - BUTTONS */
const btnPrimary = {
  btnName: "btnPageBtnPrimary",
  title: MY_BUTTON_TEXT_1.title,
  ariaLabel: MY_BUTTON_TEXT_1.ariaLabel,
  content: {
    text: MY_BUTTON_TEXT_1.text,
  },
};
const btnPrimaryDisabled = {
  btnName: "btnPageBtnPrimaryDisabled",
  disabled: true,
  title: MY_BUTTON_TEXT_2.title,
  ariaLabel: MY_BUTTON_TEXT_2.ariaLabel,
  content: {
    text: MY_BUTTON_TEXT_2.text,
    icon: null,
  },
};
const btnSecondary = {
  btnName: "btnPageBtnSecondary",
  variant: "secondary",
  title: MY_BUTTON_TEXT_3.title,
  ariaLabel: MY_BUTTON_TEXT_3.ariaLabel,
  content: {
    text: MY_BUTTON_TEXT_3.text,
    icon: null,
  },
};
const btnSecondaryDisabled = {
  btnName: "btnPageBtnSecondaryDisabled",
  variant: "secondary",
  disabled: true,
  title: MY_BUTTON_TEXT_4.title,
  ariaLabel: MY_BUTTON_TEXT_4.ariaLabel,
  content: {
    text: MY_BUTTON_TEXT_4.text,
    icon: null,
  },
};
const btnPrimaryLink = {
  btnName: "btnPageBtnPrimaryLink",
  disabled: false,
  title: MY_BUTTON_TEXT_5.title,
  ariaLabel: MY_BUTTON_TEXT_5.ariaLabel,
  internalLink: "/test",
  content: {
    text: MY_BUTTON_TEXT_5.text,
    icon: null,
  },
};
const btnSecondaryLink = {
  btnName: "btnPageBtnSecondaryLink",
  variant: "secondary",
  title: MY_BUTTON_TEXT_6.title,
  ariaLabel: MY_BUTTON_TEXT_6.ariaLabel,
  externalLink: "https://google.com",
  content: {
    text: MY_BUTTON_TEXT_6.text,
    icon: null,
  },
};
/* SM - OUTLINED */
const btnPrimaryOutlined = {
  btnName: "btnPageBtnPrimaryOutlined",
  outlined: true,
  title: MY_BUTTON_TEXT_7.title,
  ariaLabel: MY_BUTTON_TEXT_7.ariaLabel,
  content: {
    text: MY_BUTTON_TEXT_7.text,
    icon: null,
  },
};
const btnPrimaryOutlinedDisabled = {
  btnName: "btnPageBtnPrimaryOutlinedDisabled",
  disabled: true,
  outlined: true,
  title: MY_BUTTON_TEXT_8.title,
  ariaLabel: MY_BUTTON_TEXT_8.ariaLabel,
  content: {
    text: MY_BUTTON_TEXT_8.text,
    icon: null,
  },
};
const btnSecondaryOutlined = {
  btnName: "btnPageBtnSecondaryOutlined",
  variant: "secondary",
  outlined: true,
  title: MY_BUTTON_TEXT_9.title,
  ariaLabel: MY_BUTTON_TEXT_9.ariaLabel,
  content: {
    text: MY_BUTTON_TEXT_9.text,
    icon: null,
  },
};
const btnSecondaryOutlinedDisabled = {
  btnName: "btnPageBtnSecondaryOutlinedDisabled",
  variant: "secondary",
  disabled: true,
  outlined: true,
  title: MY_BUTTON_TEXT_10.title,
  ariaLabel: MY_BUTTON_TEXT_10.ariaLabel,
  content: {
    text: MY_BUTTON_TEXT_10.text,
    icon: null,
  },
};

/* SM - Togglers */
const btnPrimaryToggle = {
  btnName: "btnPageBtnPrimaryToggle",
  title: MY_BUTTON_TEXT_TOGGLER_1.title,
  ariaLabel: MY_BUTTON_TEXT_TOGGLER_1.ariaLabel,
  content: {
    text: MY_BUTTON_TEXT_TOGGLER_1.text,
  },
  toggle: {
    isBtnToggle: true,
    on: false,
    onTxt: MY_BUTTON_TEXT_TOGGLER_1.on,
    offTxt: MY_BUTTON_TEXT_TOGGLER_1.off,
  },
};
const btnSecondaryToggle = {
  btnName: "btnPageBtnSecondaryToggle",
  variant: "secondary",
  title: MY_BUTTON_TEXT_TOGGLER_2.title,
  ariaLabel: MY_BUTTON_TEXT_TOGGLER_2.ariaLabel,
  content: {
    text: MY_BUTTON_TEXT_TOGGLER_2.text,
  },
  toggle: {
    isBtnToggle: true,
    on: false,
    onTxt: MY_BUTTON_TEXT_TOGGLER_2.on,
    offTxt: MY_BUTTON_TEXT_TOGGLER_2.off,
  },
};
const btnPrimaryOutlinedToggle = {
  btnName: "btnPageBtnPrimaryOutlinedToggle",
  outlined: true,
  title: MY_BUTTON_TEXT_TOGGLER_3.title,
  ariaLabel: MY_BUTTON_TEXT_TOGGLER_3.ariaLabel,
  content: {
    text: MY_BUTTON_TEXT_TOGGLER_3.text,
  },
  toggle: {
    isBtnToggle: true,
    on: false,
    onTxt: MY_BUTTON_TEXT_TOGGLER_3.on,
    offTxt: MY_BUTTON_TEXT_TOGGLER_3.off,
  },
};
const btnSecondaryOutlinedToggle = {
  btnName: "btnPageBtnSecondaryOutlinedToggle",
  variant: "secondary",
  outlined: true,
  title: MY_BUTTON_TEXT_TOGGLER_4.title,
  ariaLabel: MY_BUTTON_TEXT_TOGGLER_4.ariaLabel,
  content: {
    text: MY_BUTTON_TEXT_TOGGLER_4.text,
  },
  toggle: {
    isBtnToggle: true,
    on: false,
    onTxt: MY_BUTTON_TEXT_TOGGLER_4.on,
    offTxt: MY_BUTTON_TEXT_TOGGLER_4.off,
  },
};

export default [
  btnPrimary,
  btnPrimaryDisabled,
  btnSecondary,
  btnSecondaryDisabled,
  btnPrimaryLink,
  btnSecondaryLink,
  btnPrimaryOutlined,
  btnPrimaryOutlinedDisabled,
  btnSecondaryOutlined,
  btnSecondaryOutlinedDisabled,
  btnPrimaryToggle,
  btnSecondaryToggle,
  btnPrimaryOutlinedToggle,
  btnSecondaryOutlinedToggle,
];
