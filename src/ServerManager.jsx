// ServerManager.js

import React, { useEffect, useState } from "react";
import { Text, Heading, IconButton, Button } from "@chakra-ui/react";
import minecraftDirtblock from "./minecraft-dirtblock.png";
import minecraftPig from "./minecraft-pig.png";
import axios from "axios";
import { statusUrl, startUrl, stopUrl, serverIp, colorDict, serverName } from "./constants";

const ServerManager = () => {
  const [serverStatus, setServerStatus] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (serverStatus !== "VM running" && serverStatus !== "VM deallocated") {
        getServerStatus();
      }
    }, 3000);

    getServerStatus();

    return () => clearInterval(interval);
  }, [serverStatus]);

  const getServerStatus = async () => {
    try {
      const response = await axios.get(statusUrl);
      const data = response.data;
      setServerStatus(data["PowerState"]);
    } catch (error) {
      console.error("Error fetching server status:", error);
    }
  };

  const handleServer = async () => {
    try {
      if (serverStatus === "Running" || serverStatus === "VM running") {
        await axios.get(stopUrl);
      } else {
        await axios.get(startUrl);
      }
      getServerStatus();
    } catch (error) {
      console.error("Error changing server state:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "16px",
          background: "rgba(0, 0, 0, 0.7)",
          borderRadius: "4px",
        }}
      >
        <Heading
          style={{
            color: "white",
            margin: "0px",
            padding: "8px",
          }}
        >
          {serverName}
        </Heading>
        <Text fontSize="xl" style={{ color: "white", padding: "8px" }}> Server Address: {serverIp}</Text>
      </div>

      <Button
        isLoading={serverStatus === null}
        loadingText="getting server status..."
        colorScheme={colorDict[serverStatus]}
      >
        {serverStatus}
      </Button>

      <IconButton
        isLoading={
          serverStatus !== "VM running" && serverStatus !== "VM deallocated"
        }
        isRound={true}
        variant="solid"
        colorScheme="transparent"
        aria-label="Done"
        style={{ background: "rgba(0, 0, 0, 0.6)", padding: "8px" }}
        onClick={handleServer}
        sx={{
          margin: "16px",
          width: "76px",
          height: "76px",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.2)",
          },
        }}
        icon={
          <img
            src={
              serverStatus === "VM running" || serverStatus === "Running"
                ? minecraftPig
                : minecraftDirtblock
            }
            alt="Minecraft Dirt Block"
          />
        }
      />
    </div>
  );
};

export default ServerManager;
