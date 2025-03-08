import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import mButtons from "../data/buttons/mButtons";
import Text from "../components/Text";

const Buttons = () => {
  const [lastIndex, setLastIndex] = useState(0);
  const [myButtons, setMyButtons] = useState([]);
  const [smButtons, setSMButtons] = useState([]);
  const [mdButtons, setMDButtons] = useState([]);
  const [lgButtons, setLGButtons] = useState([]);

  const handleToggle1Click = (e) => {
    setMyButtons(
      myButtons.map((item) => {
        if (item.btnName === "btnPageBtnPrimaryToggle") {
          item.toggle.on = !item.toggle.on;
          return item;
        }
        return item;
      })
    );
  };
  const handleToggle2Click = (e) => {
    setMyButtons(
      myButtons.map((item) => {
        if (item.btnName === "btnPageBtnSecondaryToggle") {
          item.toggle.on = !item.toggle.on;
          return item;
        }
        return item;
      })
    );
  };
  const handleToggle3Click = (e) => {};
  const handleToggle4Click = (e) => {};

  const handleClick1 = (e) => {
    alert("Test button 1 click");
  };

  useEffect(() => {
    if (myButtons.length > 0) {
      setSMButtons(mButtons);
      setMDButtons(mButtons);
      setLGButtons(mButtons);
    } else {
      setMyButtons(mButtons);
    }
  }, [myButtons]);

  return (
    <div className="buttons">
      <div className="buttons-sm">
        <Text txtData={{ type: "h3", txt: "Buttons SM" }} />
        <div
          className="buttons-sm-buttons"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {smButtons.map((item, index) => {
            if (index === 0) {
              return (
                <Button
                  key={item.btnName}
                  btnData={{
                    ...item,
                    handleClick: handleClick1,
                    tabIndex: lastIndex + 1,
                  }}
                />
              );
            }
            if (item.toggle && item.toggle.isBtnToggle) {
              return (
                <Button
                  key={item.btnName}
                  btnData={{
                    ...item,
                    handleClick:
                      item.btnName === "btnPageBtnPrimaryToggle"
                        ? handleToggle1Click
                        : item.btnName === "btnPageBtnSecondaryToggle"
                        ? handleToggle2Click
                        : null,
                    tabIndex: lastIndex + 1,
                  }}
                />
              );
            }
            return (
              <Button
                key={item.btnName}
                btnData={{
                  ...item,
                  tabIndex: lastIndex + 1,
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="buttons-md">
        <Text txtData={{ type: "h3", txt: "Buttons MD" }} />
        <div
          className="buttons-md-buttons"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {smButtons.map((item, index) => {
            if (index === 0) {
              return (
                <Button
                  key={item.btnName}
                  btnData={{
                    ...item,
                    size: "md",
                    handleClick: handleClick1,
                    tabIndex: lastIndex + 1,
                  }}
                />
              );
            }
            if (item.toggle && item.toggle.isBtnToggle) {
              return (
                <Button
                  key={item.btnName}
                  btnData={{
                    ...item,
                    size: "md",
                    handleClick:
                      item.btnName === "btnPageBtnPrimaryToggle"
                        ? handleToggle1Click
                        : item.btnName === "btnPageBtnSecondaryToggle"
                        ? handleToggle2Click
                        : null,
                    tabIndex: lastIndex + 1,
                  }}
                />
              );
            }
            return (
              <Button
                key={item.btnName}
                btnData={{
                  ...item,
                  size: "md",
                  tabIndex: lastIndex + 1,
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="buttons-lg">
        <Text txtData={{ type: "h3", txt: "Buttons LG" }} />
        <div
          className="buttons-lg-buttons"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {smButtons.map((item, index) => {
            if (index === 0) {
              return (
                <Button
                  key={item.btnName}
                  btnData={{
                    ...item,
                    size: "lg",
                    handleClick: handleClick1,
                    tabIndex: lastIndex + 1,
                  }}
                />
              );
            }
            if (item.toggle && item.toggle.isBtnToggle) {
              return (
                <Button
                  key={item.btnName}
                  btnData={{
                    ...item,
                    size: "lg",
                    handleClick:
                      item.btnName === "btnPageBtnPrimaryToggle"
                        ? handleToggle1Click
                        : item.btnName === "btnPageBtnSecondaryToggle"
                        ? handleToggle2Click
                        : null,
                    tabIndex: lastIndex + 1,
                  }}
                />
              );
            }
            return (
              <Button
                key={item.btnName}
                btnData={{
                  ...item,
                  size: "lg",
                  tabIndex: lastIndex + 1,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Buttons;
