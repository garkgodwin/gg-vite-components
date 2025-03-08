import React from "react";
import Text from "../components/Text";

const Texts = () => {
  return (
    <div className="texts" style={{ marginTop: "40px" }}>
      <div
        className="texts"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Text txtData={{ type: "h3" }}>TEXTS</Text>
        <div className="texts-p">
          <Text>p tag samples</Text>
          <div style={{ display: "flex", gap: "24px" }}>
            <Text>
              p: SM Lorem commodo sit exercitation consectetur do.
            </Text>
            <Text txtData={{ size: "md" }}>
              p: MD Lorem commodo sit exercitation consectetur do.
            </Text>
            <Text txtData={{ size: "lg" }}>
              p: LG Lorem commodo sit exercitation consectetur do.
            </Text>
          </div>
        </div>
        <div className="texts-h1">
          <Text txtData={{ type: "h1" }}>H1 tag samples</Text>
          <div style={{ display: "flex", gap: "24px" }}>
            <Text txtData={{ type: "h1" }}>
              H1: SM Lorem commodo sit exercitation consectetur do.
            </Text>
            <Text txtData={{ type: "h1", size: "md" }}>
              H1: MD Lorem commodo sit exercitation consectetur do.
            </Text>
            <Text txtData={{ type: "h1", size: "lg" }}>
              H1: LG Lorem commodo sit exercitation consectetur do.
            </Text>
          </div>
        </div>

        <div className="texts-h2">
          <Text txtData={{ type: "h2" }}>H2 tag sample</Text>
          <div style={{ display: "flex", gap: "24px" }}>
            <Text txtData={{ type: "h2" }}>
              H2: SM Lorem commodo sit exercitation consectetur do.
            </Text>
            <Text txtData={{ type: "h2", size: "md" }}>
              H2: MD Lorem commodo sit exercitation consectetur do.
            </Text>
            <Text txtData={{ type: "h2", size: "lg" }}>
              H2: LG Lorem commodo sit exercitation consectetur do.
            </Text>
          </div>
        </div>

        <div className="texts-h3">
          <Text txtData={{ type: "h3" }}>H3 tag sample</Text>
          <div style={{ display: "flex", gap: "24px" }}>
            <Text txtData={{ type: "h3" }}>
              H3: SM Lorem commodo sit exercitation consectetur do.
            </Text>
            <Text txtData={{ type: "h3", size: "md" }}>
              H3: MD Lorem commodo sit exercitation consectetur do.
            </Text>
            <Text txtData={{ type: "h3", size: "lg" }}>
              H3: LG Lorem commodo sit exercitation consectetur do.
            </Text>
          </div>
        </div>

        <div className="texts-h4">
          <Text txtData={{ type: "h4" }}>H4 tag sample</Text>
          <div style={{ display: "flex", gap: "24px" }}>
            <Text txtData={{ type: "h4" }}>
              H4: SM Lorem commodo sit exercitation consectetur do.
            </Text>
            <Text txtData={{ type: "h4", size: "md" }}>
              H4: MD Lorem commodo sit exercitation consectetur do.
            </Text>
            <Text txtData={{ type: "h4", size: "lg" }}>
              H4: LG Lorem commodo sit exercitation consectetur do.
            </Text>
          </div>
        </div>

        <div className="texts-h5">
          <Text txtData={{ type: "h5" }}>H5 tag sample</Text>
          <div style={{ display: "flex", gap: "24px" }}>
            <Text txtData={{ type: "h5" }}>
              H5: SM Lorem commodo sit exercitation consectetur do.
            </Text>
            <Text txtData={{ type: "h5", size: "md" }}>
              H5: MD Lorem commodo sit exercitation consectetur do.
            </Text>
            <Text txtData={{ type: "h5", size: "lg" }}>
              H5: LG Lorem commodo sit exercitation consectetur do.
            </Text>
          </div>
        </div>

        <div className="texts-h6">
          <Text txtData={{ type: "h6" }}>H6 tag sample</Text>
          <div style={{ display: "flex", gap: "24px" }}>
            <Text txtData={{ type: "h6" }}>
              H6: SM Lorem commodo sit exercitation consectetur do.
            </Text>
            <Text txtData={{ type: "h6", size: "md" }}>
              H6: MD Lorem commodo sit exercitation consectetur do.
            </Text>
            <Text txtData={{ type: "h6", size: "lg" }}>
              H6: LG Lorem commodo sit exercitation consectetur do.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Texts;
