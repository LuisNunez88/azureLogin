import { Embed, models, Report, service } from "powerbi-client";

import { PowerBIEmbed } from "powerbi-client-react";
import { useEffect, useState } from "react";

import "./css/dashboard.css";

export const Dashboard = () => {
  const [report, setReport] = useState<Report>();

  useEffect(() => {
    mockSignIn();
  }, []);

  // Sample report configuration
  const sampleReportUrl = "https://playgroundbe-bck-1.azurewebsites.net/Reports/SampleReport";
  const [sampleReportConfig, setReportConfig] = useState<models.IReportEmbedConfiguration>({
    type: "report",
    embedUrl: undefined,
    tokenType: models.TokenType.Embed,
    accessToken: undefined,
    settings: undefined,
  });

  // Handle Report Events

  const eventHandlersMap = new Map([
    ["loaded", () => console.log("Report has loaded")],
    ["rendered", () => console.log("Report has rendered")],
    [
      "error",
      (event?: service.ICustomEvent<any>) => {
        if (event) {
          console.error(event.detail);
        }
      },
    ],
  ]);
  const mockSignIn = async () => {
    // Fetch sample report's embed config
    const reportConfigResponse = await fetch(sampleReportUrl);

    if (!reportConfigResponse.ok) {
      console.error(`Failed to fetch config for report. Status: ${reportConfigResponse.status} ${reportConfigResponse.statusText}`);
      return;
    }

    const reportConfig = await reportConfigResponse.json();

    // Set the fetched embedUrl and embedToken in the report config
    setReportConfig({
      ...sampleReportConfig,
      embedUrl: reportConfig.EmbedUrl,
      accessToken: reportConfig.EmbedToken.Token,
    });
  };

  return (
    <div>
      <PowerBIEmbed
        embedConfig={sampleReportConfig}
        eventHandlers={eventHandlersMap}
        cssClassName={"report-style-class"}
        getEmbeddedComponent={(embedObject: Embed) => {
          console.log(`Embedded object of type "${embedObject.embedtype}" received`);
          setReport(embedObject as Report);
        }}
      />

      <div className="hr"></div>
    </div>
  );
};

export default Dashboard;
