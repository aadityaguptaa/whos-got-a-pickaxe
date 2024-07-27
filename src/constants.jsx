const functionUrl = process.env.REACT_APP_FUNCTION_URL;
const functionName = process.env.REACT_APP_FUNCTION_NAME;
const serverCode = process.env.REACT_APP_SERVER_CODE;
const resourceGroup = process.env.REACT_APP_RESOURCE_GROUP;
const vmName = process.env.REACT_APP_VM_NAME;
const serverIP = process.env.REACT_APP_SERVER_IP;
const statusAction = "get";
const startAction = "start";
const stopAction = "stop";

export const statusUrl =
  functionUrl +
  functionName +
  "?code=" +
  serverCode +
  "&action=" +
  statusAction +
  "&resourcegroup=" +
  resourceGroup +
  "&vm=" +
  vmName;

export const startUrl =
  functionUrl +
  functionName +
  "?code=" +
  serverCode +
  "&action=" +
  startAction +
  "&resourcegroup=" +
  resourceGroup +
  "&vm=" +
  vmName;

export const stopUrl =
  functionUrl +
  functionName +
  "?code=" +
  serverCode +
  "&action=" +
  stopAction +
  "&resourcegroup=" +
  resourceGroup +
  "&vm=" +
  vmName;

export const serverIp = serverIP;

export const colorDict = {
  "VM running": "green",
  "VM deallocated": "red",
  Running: "green",
};

export const serverName = "Who's got a pickaxe?";
